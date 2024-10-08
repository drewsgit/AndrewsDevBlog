import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  showText1 = false;
  showText2 = false;

  code =
    `This is the code used behind the scenes.

  @if(showText1) { 
    &nbsp;<div>Showing Text 1</div>
  } @else if (showText2) {
      <div>Showing Text 2</div>
  } @else {
      <div>Default Text</div>
  }`

  test1() {
    this.reset();
    this.showText1 = true;
  }

  test2() {
    this.reset();
    this.showText2 = true;
  }

  reset() {
    this.showText1 = false;
    this.showText2 = false;
  }
}
