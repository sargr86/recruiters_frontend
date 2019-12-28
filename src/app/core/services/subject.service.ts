import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  titleData = new Subject<any>();

  constructor() {
  }


  setTitleData(value) {
    this.titleData.next(value);
  }

  getTitleData(): Observable<any> {
    return this.titleData.asObservable();
  }
}
