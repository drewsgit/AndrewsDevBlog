import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DasbhoardComponent } from "./dashboard.component";

describe("IndexBusinessComponent", () => {
  let component: DasbhoardComponent;
  let fixture: ComponentFixture<DasbhoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasbhoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DasbhoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
