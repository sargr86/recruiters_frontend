import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  constructor() {

  }

  ngOnInit(): void {
  }

}
