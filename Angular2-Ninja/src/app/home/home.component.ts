import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Myhicken='This is my Chicked';
  ninja={
name:"Rajat",
belt:"Black"

  }
  alertMe=function(val){
    alert("Hey Boy"+val);
  }

}
