import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Data, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  subscriptions: Subscription[] = [];
  routerUrl: string;
  currentSection;

  constructor(
    public router: Router,
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd || event instanceof NavigationStart)
        )
        .subscribe((dt: Data) => {
          this.routerUrl = dt.url;

          // Could add more chars url:path?=;other possible
          this.currentSection = dt.url.split('/')[2];


        })
    );
  }

}
