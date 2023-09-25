import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  uname : string ="";
  pass : string ="";
  check : boolean=false ;
  names = ["aadesh","vishwajeet","swapnil","sammed","hrtvik"] ;
  getdata(){
   
    this.check = true ; 
    

  }
  

  biodata = {
    name : "Aadesh" ,
    age : 30,
    appa : "satish",
    chappa : "dabba"
  }

  inline ={
    'color' : 'yellow',
    'background-color' : 'black'
  }

  multicss = {
    'colorchange' : true,
    'bgcolor' : false
  }
  weeks = ['ap','as'] ;
  ngOnInit() {   
  }
}
