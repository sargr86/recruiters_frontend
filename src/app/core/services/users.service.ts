import {Injectable} from '@angular/core';
import {User} from '@shared/models/User';
import {API_URL} from '@core/constants/app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUserInfo(email) {
    return this.http.get<User>(`${API_URL}users/get-one`, {params: {email}});
  }
}
