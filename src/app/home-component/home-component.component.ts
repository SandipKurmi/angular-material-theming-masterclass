import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../modals/user';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent {
  user: User = this.userService.getUser();
  constructor(private userService: UserService) {}
}
