import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@core/modules/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtModule} from '@auth0/angular-jwt';

// Token getter for JWT module
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/auth/']
      }
    })
  ],
  providers: [
    JwtHelperService
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class CoreModule {
}
