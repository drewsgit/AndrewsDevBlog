import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { ComponentParamsChildComponent } from './component-params-child/component-params-child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentService } from './component-service/component-service.service';

@Component({
  selector: 'app-component-params',
  standalone: true,
  imports: [ComponentParamsChildComponent, CommonModule, FormsModule],
  templateUrl: './component-params.component.html',
  styleUrl: './component-params.component.scss'
})
export class ComponentParamsComponent {
  componentService = inject(ComponentService);

  name: string = ''

  updateFromChildControl(lname: string) {
    console.log(lname);
  }

  getValueFromService() {
    this.name = this.componentService.name;
  }
}
