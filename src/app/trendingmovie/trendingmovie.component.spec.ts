import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingmovieComponent } from './trendingmovie.component';

describe('TrendingmovieComponent', () => {
  let component: TrendingmovieComponent;
  let fixture: ComponentFixture<TrendingmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
