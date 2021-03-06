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

  getByState(stateId) {
    return this.http.get(`${API_URL}counties/get-by-state`, {params: {stateId}});
  }

  get() {
    return this.http.get(`${API_URL}counties/get`);
  }
}
