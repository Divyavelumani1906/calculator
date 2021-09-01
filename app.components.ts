import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Calculator';

  public num1: number | any;
  public num2: number | any;
  public num3: number | any;

  add(){
    this.num3 = this.num1 + this.num2;
  }
  sub(){
    this.num3 = this.num1 - this.num2;
  }
  multiply(){
    this.num3 = this.num1 * this.num2;
  }
  divide(){
    this.num3 = this.num1 / this.num2;
  }

}
