import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  /* https://rawgit.com/Marak/faker.js/master/examples/browser/index.html#lorem - link to fake demo, when you can choose a method */
  solved = false;
  inputText = '';

  checkInput(value: string) {
    this.inputText = value;
    if (value === this.randomText) {
      this.solved = true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  /*
this is first solution
inputText = '';

checkInput(value: string) {

 this.inputText = value;
if(this.inputText == this.randomText) {
  console.log(this.inputText)
}
} */
}
