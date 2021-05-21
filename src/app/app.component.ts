import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  place : any;
  a:any; 
  b:any;
  constructor() {
    this.place="";
    this.a=""; 
    this.b=0;
  }
  ngOnInit() {
  }
eval(val:any) 
{  
  this.place=this.place+val; 
  if(this.a)
  {
    this.b=eval(this.place);
    this.a="";
  }
}
con(val : any)
{
this.place=this.place+val;
this.a=val;
}
clear(){
  this.place=""; 
}
result(){ 
this.place=this.b;
}
removelastchar(){
  this.place=this.place.slice(0,-1); 
}
}
