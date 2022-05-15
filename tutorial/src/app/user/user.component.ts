import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  name: string,
  address: string,
  phone: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
    this.user = {} as UserInterface;
    this.userEvent = new EventEmitter<UserInterface>();
  }

  @Input() user: UserInterface;

  // @Output() userEvent = new EventEmitter<UserInterface>();
  @Output() userEvent: EventEmitter<UserInterface>;

  ngOnInit(): void {
  }
  // user = {
  //   name: "Test User",
  //   address: "Raipur, Chhattisgarh",
  //   phone: "8822110011"
  // }

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }

}
