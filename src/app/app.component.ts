import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  constructor(
    public router: Router
  ) {

  }

  ngOnInit(): void {
  }

  get ifDashboardPage(): boolean {
    return /admin|dashboard/.test(this.router.url);
  }

}
