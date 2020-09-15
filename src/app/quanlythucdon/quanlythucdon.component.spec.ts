import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythucdonComponent } from './quanlythucdon.component';

describe('QuanlythucdonComponent', () => {
  let component: QuanlythucdonComponent;
  let fixture: ComponentFixture<QuanlythucdonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlythucdonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythucdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
