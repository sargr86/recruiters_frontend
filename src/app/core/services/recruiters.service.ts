import {Injectable} from '@angular/core';
import {API_URL} from '@core/constants/app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecruitersService {

  constructor(
    private http: HttpClient
  ) {
  }

  invite() {
    return this.http.get(`${API_URL}recruiters/invite`);
  }
}
