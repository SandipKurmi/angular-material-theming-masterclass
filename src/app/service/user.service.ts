import { Injectable } from '@angular/core';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    name: 'John Doe',
    age: 25,
  };

  constructor() {}

  getUser() {
    return this.user;
  }
}
