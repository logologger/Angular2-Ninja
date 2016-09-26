import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() ninja;
@Output() onYell=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  Myhicken='This is my Chicked';
//   ninja={
// name:"Rajat",
// belt:"Black"

//   };
  alertMe=function(val){
    alert("Hey Boy"+val);
  };
  fireYellEvent=function(e){
    this.onYell.emit(e);
  }

}
