import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParamsChildComponent } from './component-params-child.component';

describe('ComponentParamsChildComponent', () => {
  let component: ComponentParamsChildComponent;
  let fixture: ComponentFixture<ComponentParamsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentParamsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentParamsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
