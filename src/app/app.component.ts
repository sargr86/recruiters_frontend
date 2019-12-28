import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import {SubjectService} from '@core/services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  constructor(
    public router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
    private subject: SubjectService
  ) {

  }

  ngOnInit(): void {
    this.router.events.pipe(map(() => {
      let child = this.route.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data.title) {
          return child.snapshot.data.title;
        } else {
          return null;
        }
      }
      return null;
    })).subscribe(title => {
      this.setPageTitle(title);
      this.subject.setTitleData(title);
    });
  }

  setPageTitle(title) {
    if (title) {
      this.titleService.setTitle(title);
    }
  }

  get ifDashboardPage(): boolean {
    return /admin|dashboard|auth/.test(this.router.url);
  }

}
