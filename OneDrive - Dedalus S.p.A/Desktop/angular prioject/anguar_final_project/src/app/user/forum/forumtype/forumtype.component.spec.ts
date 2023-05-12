import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumtypeComponent } from './forumtype.component';

describe('ForumtypeComponent', () => {
  let component: ForumtypeComponent;
  let fixture: ComponentFixture<ForumtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
