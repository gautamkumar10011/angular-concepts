import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = ' Angular tutorial';
  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log(response);
    })
  }
  constructor(private httpService: HttpService) { }
  userObj = {
    name: "Coins",
    address: "Raipur",
    phone: "344354354543"
  }

  handleMyEvent(event: any) {
    console.log(event);
  }

  // posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe()   // normal http calling
  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')    // async http calling 

  getFakePosts(): any {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
      this.posts = response;
    })
  }

  ngOnInit(): void {
    // this.getFakePosts();
  }
}
