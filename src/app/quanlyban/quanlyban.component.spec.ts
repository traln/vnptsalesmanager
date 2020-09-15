import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybanComponent } from './quanlyban.component';

describe('QuanlybanComponent', () => {
  let component: QuanlybanComponent;
  let fixture: ComponentFixture<QuanlybanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlybanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
