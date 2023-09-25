import { Component } from '@angular/core';
import { even } from '../checkGirl.service';

@Component({
  selector: 'app-chandrayan',
  templateUrl: './chandrayan.component.html',
  styleUrls: ['./chandrayan.component.css'],
  providers:[even]
})
export class ChandrayanComponent {

constructor(obj:even){
obj.checkNum(10)
//  add(){
//   const e = new even();
// e.checkNum(10);
// return true ;
// }

// s=this.add()




}




}
