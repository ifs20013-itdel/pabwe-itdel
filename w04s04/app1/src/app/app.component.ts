import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  console.log(`Tambahkan article dengan judul: ${title.value} dan tautan: ${link.value}`);
  return false;
 }
}
