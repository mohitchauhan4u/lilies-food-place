import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMealCardComponent } from './home-page-meal-card.component';

describe('HomePageMealCardComponent', () => {
  let component: HomePageMealCardComponent;
  let fixture: ComponentFixture<HomePageMealCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageMealCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageMealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
