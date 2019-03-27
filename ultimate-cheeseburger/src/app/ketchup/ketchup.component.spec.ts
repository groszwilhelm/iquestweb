import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetchupComponent } from './ketchup.component';

describe('KetchupComponent', () => {
  let component: KetchupComponent;
  let fixture: ComponentFixture<KetchupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetchupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
