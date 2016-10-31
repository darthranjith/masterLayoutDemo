import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myData: string;
  constructor(public service: SharedService) {  }
  ngOnInit() {
    this.service.getData().subscribe(
      data => {
        this.myData = data;
      }
    );
  }

}
