import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandrayanComponent } from './chandrayan.component';

describe('ChandrayanComponent', () => {
  let component: ChandrayanComponent;
  let fixture: ComponentFixture<ChandrayanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChandrayanComponent]
    });
    fixture = TestBed.createComponent(ChandrayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
