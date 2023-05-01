import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryComponent } from './documentary.component';

describe('DocumentaryComponent', () => {
  let component: DocumentaryComponent;
  let fixture: ComponentFixture<DocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
