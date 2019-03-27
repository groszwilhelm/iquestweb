import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBreadComponent } from './bottom-bread.component';

describe('BottomBreadComponent', () => {
  let component: BottomBreadComponent;
  let fixture: ComponentFixture<BottomBreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
