import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryUsComponent } from './query-us.component';

describe('QueryUsComponent', () => {
  let component: QueryUsComponent;
  let fixture: ComponentFixture<QueryUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
