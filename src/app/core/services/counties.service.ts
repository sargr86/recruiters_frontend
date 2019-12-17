import {Injectable} from '@angular/core';
import {API_URL} from '@core/constants/app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountiesService {

  constructor(
    private http: HttpClient
  ) {
  }

  getByState(state) {
    return this.http.get(`${API_URL}counties/get-by-state`, {params: {state}});
  }

  get() {
    return this.http.get(`${API_URL}counties/get`);
  }
}
