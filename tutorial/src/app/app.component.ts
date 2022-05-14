import { Component } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Angular tutorial';
  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log(response);
    })
  }
  constructor(private httpService: HttpService) { }
}
