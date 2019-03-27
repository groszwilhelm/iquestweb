import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBreadComponent } from './top-bread.component';

describe('TopBreadComponent', () => {
  let component: TopBreadComponent;
  let fixture: ComponentFixture<TopBreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
