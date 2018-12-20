import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  userInput='';
  
  constructor(private el:ElementRef) { } //Access underlying dom 

  @HostListener('focus') onfocus()
  {
    console.log("Focus Called");
  }
  @HostListener('keyup') onkeyup()
  {
    console.log("Keyup Called");
    this.userInput=this.el.nativeElement.value;
    let userInput1=this.userInput.split(' ');
    let userInput2=[];
    for(let i=0;i<userInput1.length;i++)
    {
      if(userInput1[i].search(/a|an|between|the|or|under|and/gi))
      {
        
        userInput2[i]=userInput1[i].charAt(0).toUpperCase() + userInput1[i].slice(1);     
        
      }
      else
      {
        userInput2[i] =userInput1[i].toLowerCase();
      }
      
    }
    
    this.userInput=userInput2.join(' ');
    this.el.nativeElement.value=this.userInput;
  }
}
