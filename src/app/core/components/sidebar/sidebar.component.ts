import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DASHBOARD_LINKS, MAIN_SECTIONS, MENU_ITEM_ICONS, USER_TYPES} from '@core/constants/app.config';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {AuthService} from '@core/services/auth.service';
import {ActivatedRoute, Data, NavigationEnd, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SubjectService} from '@core/services/subject.service';
import {filter} from 'rxjs/operators';
import {Section} from '@shared/models/Section';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

let treeData: TreeNode[] = [];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  adminRole: boolean;
  dashboardLinks = DASHBOARD_LINKS;
  mainSections: Section[] = MAIN_SECTIONS;
  sidebarOpened = false;
  mapForm: FormGroup;
  latlng: any = [];
  lat = 0;
  lng = 0;


  @Output() toggle = new EventEmitter();
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  sidebarOpen = true;

  @Output() toggleSide = new EventEmitter();
  routerUrl;

  constructor(
    public auth: AuthService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    public router: Router,
    private subject: SubjectService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getSidebarDataSrc();

    // this.toggle.emit();
    this.mapForm = this.fb.group({
      type: ['']
    });
  }

  getSidebarDataSrc() {
    this.adminRole = this.auth.checkRoles('admin');


    if (!this.adminRole && this.auth.userData) {
      const currentPartnerType = this.auth.userData.partner_type ? this.auth.userData.partner_type.name : '';
      const employeeRole = this.auth.checkRoles('employee');
      const customerRole = this.auth.checkRoles('customer');


      // Generating partner links based on current partner type
      // this.dashboardLinks = this.dashboardLinks.filter(l => {
      //
      //   if (employeeRole && l.children) {
      //     l.children = l.children.filter(sl => !sl.name.includes('Add'));
      //   } else if (customerRole) {
      //     return l.name === 'Dashboard';
      //   }
      //
      //   // Showing dashboard and current partner type links
      //   const linksShown = l.name === 'Dashboard' || l.name === currentPartnerType || l.name === 'Jobs';
      //
      //   return employeeRole ? linksShown : linksShown || l.name === 'Employees';
      //
      //
      // });
    }

    this.dataSource.data = this.dashboardLinks;
  }

  /**
   * Gets icons for each node
   * @param node current section name
   */
  getIcon(node) {
    let icon = '';
    const parentNode = this.getParent(node);
    const childNode = node.name.toLowerCase();

    MENU_ITEM_ICONS.map(mi => {
      if (childNode.includes('add')) {
        icon = 'fa-plus';
      } else if (childNode.includes('edit')) {
        icon = 'fa-edit';
      } else if (parentNode === mi['item']) {
        icon = mi['icon'];
      } else if (parentNode.includes(mi['item'])) {
        icon = mi['icon'];
      }
    });
    return icon;
  }

  /**
   * Navigates to the selected node page
   * @param node current section name
   */
  navigate(node) {
    const parentNode = this.getParent(node);
    const childNode = node.name.toLowerCase().replace(/ /g, '-');
    const url = parentNode.replace(/\//g, '-') + '/' + (childNode === 'show' ? 'show' : childNode);

    // Getting redirect url part matching current user role
    const currentRole = this.auth.userData.role.name.toLowerCase();
    const userType = USER_TYPES.find(d => d.role === currentRole);

    // sidenav.toggle();
    this.sidebarOpened = !this.sidebarOpened;
    if (this.responsiveMode) {
      this.toggle.emit();
      this.toggleSide.emit();
      this.closeSidebar();
    }
    this.router.navigate([`${userType ? userType.label : 'admin'}/${url}`]);
    this.expandLinks();
  }

  /**
   * Gets the parent node of current one
   * @param node current section node
   */
  getParent(node) {
    const {treeControl} = this;
    const currentLevel = treeControl.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i];

      if (treeControl.getLevel(currentNode) < currentLevel) {
        return currentNode.name.toLowerCase();
      }
    }
  }

  toggleSidebar() {
    this.toggleSide.emit();
    // if (this.router.url === '/' || this.router.url.includes('auth')) {
    //     this.sidebarOpen = !this.sidebarOpen;
    //
    // }
  }

  closeSidebar() {
    // this.sidebarOpen = false;
    this.toggle.emit();
  }

  changeSection(link) {
    // console.log(link)
    // this.mapForm.patchValue({type: section});
    // this.changePlace(section);
    // @todo enable activities & tours here
    if (this.responsiveMode && link !== 'activities' && link !== 'tours') {
      this.router.navigate([link])
      this.closeSidebar();
    }

  }

  // Expanding necessary tree parent node
  ngAfterViewInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((dt: Data) => {
      this.routerUrl = dt.url;
      this.expandLinks();
    });


  }

  expandLinks() {
    if (this.routerUrl) {
      const routerUrl = this.routerUrl.replace('_', ' ');
      if (this.treeControl.dataNodes) {
        for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
          const node = this.treeControl.dataNodes[i];
          const treeItem = node.name.toLowerCase().replace(/\//g, '-');
          this.treeControl.collapse(node);
          if (routerUrl.includes(treeItem)) {
            this.treeControl.expand(node);
            // this.cdr.detectChanges();
          }
        }
      }
    }
  }

  get responsiveMode() {

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  checkIfAuthDashboardPage() {
    return /auth|admin|partner|customers|employee/.test(this.router.url);
  }
}
