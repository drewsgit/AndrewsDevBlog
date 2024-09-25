import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBlogDetailComponent } from './blog-detail.component';

describe('BusinessBlogDetailComponent', () => {
  let component: BusinessBlogDetailComponent;
  let fixture: ComponentFixture<BusinessBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessBlogDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BusinessBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
