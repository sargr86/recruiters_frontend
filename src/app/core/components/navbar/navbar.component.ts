import {Component, OnInit} from '@angular/core';
import {Data, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {AuthService} from '@core/services/auth.service';

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
    public auth: AuthService
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

          if (this.auth.loggedIn()) {

            const urlLastPart = dt.url.split('/')[3];

            if (urlLastPart) {

              // Could add more chars url:path?=;other possible
              this.currentSection = urlLastPart
                .replace(/\b[a-z]/g, m => m.toUpperCase())
                .replace('-', ' ');
            }
          }


        })
    );
  }

}
