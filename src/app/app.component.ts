import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Ali Can Yücel Angular Xox Game';
  mark: string = "";
  moves: any = [];
  message: string = "";
  gameOver: boolean = false;
  games: any[] = [
  ];
  constructor() {
    this.newGame();
  }
  newGame() {
    this.mark = "X";
    this.message = "Sıradaki:X";
    this.games = [
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },
      { mark: "", winner: false },];
    this.gameOver = false;
    this.moves=[];
  }
  isGameOver() {
    if (this.games[0].mark != "" && this.games[0].mark == this.games[1].mark && this.games[1].mark == this.games[2].mark) {
      this.gameOver = true;
     this.games[0].winner=true
     this.games[1].winner=true
     this.games[2].winner=true
    }
    if (this.games[3].mark != "" && this.games[3].mark == this.games[4].mark && this.games[4].mark == this.games[5].mark) {
      this.gameOver = true;
      this.games[3].winner=true
      this.games[4].winner=true
      this.games[5].winner=true

    }
    if (this.games[6].mark != "" && this.games[6].mark == this.games[7].mark && this.games[7].mark == this.games[8].mark) {
      this.gameOver = true;
      this.games[6].winner=true
      this.games[7].winner=true
      this.games[8].winner=true
    }
    if (this.games[0].mark != "" && this.games[0].mark == this.games[3].mark && this.games[3].mark == this.games[6].mark) {
      this.gameOver = true;
      this.games[0].winner=true
      this.games[3].winner=true
      this.games[6].winner=true
    }
    if (this.games[1].mark != "" && this.games[1].mark == this.games[4].mark && this.games[4].mark == this.games[7].mark) {
      this.gameOver = true;
      this.games[1].winner=true
      this.games[4].winner=true
      this.games[7].winner=true
    }
    if (this.games[2].mark != "" && this.games[2].mark == this.games[5].mark && this.games[5].mark == this.games[8].mark) {
      this.gameOver = true;
      this.games[2].winner=true
      this.games[5].winner=true
      this.games[8].winner=true
    }
    if (this.games[0].mark != "" && this.games[0].mark == this.games[4].mark && this.games[4].mark == this.games[8].mark) {
      this.gameOver = true;
      this.games[0].winner=true
      this.games[4].winner=true
      this.games[8].winner=true
    }
    if (this.games[2].mark != "" && this.games[2].mark == this.games[4].mark && this.games[4].mark == this.games[6].mark) {
      this.gameOver = true;
      this.games[2].winner=true
      this.games[4].winner=true
      this.games[6].winner=true
    }
  }
changeWinnerButtonClass(winner:boolean)
{
if(winner)
  return "btn-success";
  else
  return "btn-warning"
}
  returnSelectMove(index: number) {
    this.games = this.moves[index];
  }
  setMark(index: number) {
    // fonksiyon içindeki parametreyi kullanmak için [parametre] bu şekilde
    if (this.games[index].mark == "" && !this.gameOver) {
      this.games[index].mark = this.mark;
      this.moves.push([...this.games]);
      this.isGameOver();
      if (this.gameOver) {
        this.message = "Oyun Bitti.Kazanan:" + this.mark
      }
      else {
        if (this.mark == "X")
          this.mark = "O"
        else
          this.mark = "X"
        this.message = `Sıradaki:${this.mark}`
      }
    }
  }
}