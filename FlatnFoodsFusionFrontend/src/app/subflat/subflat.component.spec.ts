import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubflatComponent } from './subflat.component';

describe('SubflatComponent', () => {
  let component: SubflatComponent;
  let fixture: ComponentFixture<SubflatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubflatComponent]
    });
    fixture = TestBed.createComponent(SubflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
