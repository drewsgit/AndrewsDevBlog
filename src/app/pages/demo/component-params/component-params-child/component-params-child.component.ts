import { Component, EventEmitter, inject, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ComponentService } from '../component-service/component-service.service';

@Component({
  selector: 'app-component-params-child',
  standalone: true,
  imports: [],
  templateUrl: './component-params-child.component.html',
  styleUrl: './component-params-child.component.scss'
})
export class ComponentParamsChildComponent implements OnChanges {

  componentService = inject(ComponentService)

  @Input() fName: string = '';
  @Output() emitLastName = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  test() {
    this.emitLastName.next('wong');
  }

  test2() {
    this.componentService.name = this.fName;
  }
}
