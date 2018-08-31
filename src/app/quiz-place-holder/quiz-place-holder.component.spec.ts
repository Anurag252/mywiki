import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlaceHolderComponent } from './quiz-place-holder.component';

describe('QuizPlaceHolderComponent', () => {
  let component: QuizPlaceHolderComponent;
  let fixture: ComponentFixture<QuizPlaceHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPlaceHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
