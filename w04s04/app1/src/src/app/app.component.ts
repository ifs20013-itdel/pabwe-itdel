import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = []
  myTitle = "daw"
  myLink = "dawd"
  @ViewChild('myTitle') inputTitle
  @ViewChild('myLink') inputLink
  
  public onDuplicate(title: HTMLInputElement, link: HTMLInputElement){
    this.data.push({
      title: title.value,
      link: link.value
    })
    this.inputTitle.nativeElement.value = ''
    this.inputLink.nativeElement.value = ''
  }
}
