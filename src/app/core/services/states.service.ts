import {Injectable} from '@angular/core';
import {API_URL} from '@core/constants/app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(
    private http: HttpClient
  ) {
  }

  get() {
    return this.http.get(`${API_URL}states/get`);
  }
}
