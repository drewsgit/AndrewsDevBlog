import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParamsComponent } from './component-params.component';

describe('ComponentParamsComponent', () => {
  let component: ComponentParamsComponent;
  let fixture: ComponentFixture<ComponentParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
