import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../modals/user';

// { name: 'John Doe', age: 25 }

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent {
  user: User = this.userService.getUser();
  countList: number[] = [];
  userInformation: User[] = [];
  subjectData: number[] = [];

  constructor(private userService: UserService) {
    this.userService.subject$.next(1);
    this.userService.subject$.subscribe({
      next: (data) => {
        this.subjectData.push(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  pushNumber() {
    this.userService.subject$.next(4);
  }

  ngOnInit() {
    this.obs();
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo$().subscribe({
      next: (data) => {
        this.userInformation.push(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  obs() {
    this.userService.obs$.subscribe({
      next: (data) => {
        this.countList = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
