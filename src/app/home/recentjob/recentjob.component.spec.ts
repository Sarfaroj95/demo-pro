import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentjobComponent } from './recentjob.component';

describe('RecentjobComponent', () => {
  let component: RecentjobComponent;
  let fixture: ComponentFixture<RecentjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
