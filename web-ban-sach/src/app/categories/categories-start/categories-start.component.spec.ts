import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesStartComponent } from './categories-start.component';

describe('CategoriesStartComponent', () => {
  let component: CategoriesStartComponent;
  let fixture: ComponentFixture<CategoriesStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
