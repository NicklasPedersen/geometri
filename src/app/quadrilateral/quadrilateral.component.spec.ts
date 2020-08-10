import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrilateralComponent } from './quadrilateral.component';

describe('QuadrilateralComponent', () => {
  let component: QuadrilateralComponent;
  let fixture: ComponentFixture<QuadrilateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrilateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrilateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
