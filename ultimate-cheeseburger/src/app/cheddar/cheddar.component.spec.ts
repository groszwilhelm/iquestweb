import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheddarComponent } from './cheddar.component';

describe('CheddarComponent', () => {
  let component: CheddarComponent;
  let fixture: ComponentFixture<CheddarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheddarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheddarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
