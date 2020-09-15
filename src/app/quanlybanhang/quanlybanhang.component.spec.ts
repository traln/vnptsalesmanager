import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybanhangComponent } from './quanlybanhang.component';

describe('QuanlybanhangComponent', () => {
  let component: QuanlybanhangComponent;
  let fixture: ComponentFixture<QuanlybanhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlybanhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybanhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
