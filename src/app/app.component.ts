import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Ali Can Yücel Angular Xox Game';
  mark: string = "X";
  message:string="Sıradaki: X";
  games: string[] = ["", "", "", "", "", "", "", "", ""];
  constructor(){
    this
  }
  setMark(index:number) {
  // fonksiyon içindeki parametreyi kullanmak için [parametre] bu şekilde
    this.games[index]=this.mark;
    if(this.mark=="X")
    this.mark="O"
    else
    this.mark="X"
    this.message=`Sıradaki:${this.mark}`
  }
}
