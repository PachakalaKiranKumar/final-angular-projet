import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplandetailsComponent } from './dietplandetails.component';

describe('DietplandetailsComponent', () => {
  let component: DietplandetailsComponent;
  let fixture: ComponentFixture<DietplandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplandetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietplandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
