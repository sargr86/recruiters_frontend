import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '@core/constants/app.config';

@Injectable({
  providedIn: 'root'
})
export class CounselorsService {

  constructor(
    private http: HttpClient
  ) { }

  invite() {
    return this.http.get(`${API_URL}counselors/invite`);
  }
}
