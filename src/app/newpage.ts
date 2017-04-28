import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'new-page',
  template: `
  <div style="padding:0px 20px;">
      <h1>about page data here</h1>
      {{data}}<br><br>
  <div>`
})

export class Newpage  {  
    data="no server data yet";
    
    ngOnInit(){
        console.log("new page2")
    }
}
