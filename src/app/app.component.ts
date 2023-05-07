import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Ali Can Yücel Angular Xox Game';
  mark: string = "";
  moves:any=[];
  message: string = "";
  games: string[] = ["", "", "", "", "", "", "", "", ""];
  constructor() {
    this.newGame();
  }
  newGame() {
    this.mark = "X";
    this.message = "Sıradaki:X";
    this.games = ["", "", "", "", "", "", "", "", ""];

  }
  setMark(index: number) {
    // fonksiyon içindeki parametreyi kullanmak için [parametre] bu şekilde
    this.games[index] = this.mark;
    this.moves.push([...this.games]);
    if (this.mark == "X")
      this.mark = "O"
    else
      this.mark = "X"
    this.message = `Sıradaki:${this.mark}`
  }
}
