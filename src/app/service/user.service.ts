import { Injectable } from '@angular/core';
import { User } from '../modals/user';
import { JSlib, JS_LIB_STRING } from './../jslib';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  jslib = new JSlib();
  jslibString = JS_LIB_STRING;

  constructor() {
    this.jslib.callMethod();
  }

  obs$ = of([1, 2, 3, 4, 5]);

  userInformation$ = of(
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 30 }
  );

  getUserInfo$() {
    return this.userInformation$.pipe(
      map((user) => {
        user.age = user.age + 1;
        return user;
      })
    );
  }

  //subject

  // subject$ = new Subject<number>();
  subject$ = new BehaviorSubject<number>(0);

  user: User = {
    name: 'John Doe',
    age: 25,
  };

  getUser() {
    return this.user;
  }
}
