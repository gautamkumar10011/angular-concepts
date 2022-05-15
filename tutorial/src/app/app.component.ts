import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = ' Angular tutorial';
  // handleEvent() {
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
  //     console.log(response);
  //   })
  // }
  constructor(private router: Router) { }

  goToRoute(route: string = "/second"): void {
    this.router.navigateByUrl(route).then(() => {
      // checking the active url
      console.log(this.router.url);
    });
  }

  userObj = {
    name: "Coins",
    address: "Raipur",
    phone: "344354354543"
  }

  handleMyEvent(event: any) {
    console.log(event);
  }

  // posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe()   // normal http calling
  // posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')    // async http calling 

  // getFakePosts(): any {
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
  //     this.posts = response;
  //   })
  // }

  ngOnInit(): void {
    // this.getFakePosts();
  }

  testProps = new FormControl('');
}
