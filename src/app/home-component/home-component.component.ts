import { Component, OnInit, computed, signal } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../modals/user';
import { mergeMap } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../pipe/shared.module';
import { TimestampDirective } from './directive/timestamp.directive';

// { name: 'John Doe', age: 25 }

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    TimestampDirective,
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent implements OnInit {
  user: User = this.userService.getUser();
  countList: number[] = [];
  userInformation: User[] = [];
  subjectData: number[] = [];
  postList: Post[] = [];
  searchInput = new FormControl('');
  timestamp: number = 1706812329000;

  // 5 user with name and age with create at of timestamp

  userList = [
    { name: 'John Doe', age: 25, createdAt: 1706812329000 },
    { name: 'John Doe', age: 25, createdAt: 1706812329000 },
    { name: 'John Doe', age: 25, createdAt: 1706812329000 },
    { name: 'John Doe', age: 25, createdAt: 1706812329000 },
    { name: 'John Doe', age: 25, createdAt: 1706812329000 },
  ];

  searchString = signal('');

  count = signal(0);

  increment() {
    console.log('The count is: ' + this.count());
    this.count.update((value) => value + 1);
  }

  users = signal<User[]>([
    { name: 'Sandip', age: 25 },
    { name: 'Akash', age: 24 },
    { name: 'Rahul', age: 26 },
    { name: 'Shiva', age: 26 },
  ]);
  filteredUsers = computed(() => {
    return this.users().filter((user) =>
      user.name.toLowerCase().includes(this.searchString())
    );
  });

  date = signal(1706812329);

  setSearchString(event: Event) {
    this.searchString.set((event.target as HTMLInputElement).value);
  }

  setDate($event: Event) {
    console.log(this.timestamp);
    const selectedDate = (<HTMLInputElement>$event.target).value;
    console.log(selectedDate);

    this.timestamp = new Date(selectedDate).getTime();

    console.log(this.timestamp);
  }

  // setUserDate

  setUserDate($event: Event, index: number) {
    console.log(this.userList[index].createdAt);
    const selectedDate = (<HTMLInputElement>$event.target).value;
    console.log(selectedDate);
    this.userList[index].createdAt = new Date(selectedDate).getTime();
  }

  addUser() {
    this.users.update((users) => [
      ...users,
      { name: 'New User', age: Math.floor(Math.random() * 100) },
    ]);
  }

  constructor(private userService: UserService, private http: HttpClient) {
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
    this.searchInput.valueChanges
      .pipe(
        mergeMap((str) => {
          return this.http.get<Post[]>(
            `https://jsonplaceholder.typicode.com/posts?query=${str}`
          );
        })
      )
      .subscribe({
        next: (data) => {
          this.postList = data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        },
      });

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

  createUser() {}
  updateUser() {}
}
