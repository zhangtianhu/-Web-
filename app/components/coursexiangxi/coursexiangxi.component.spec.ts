import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursexiangxiComponent } from './coursexiangxi.component';

describe('CoursexiangxiComponent', () => {
  let component: CoursexiangxiComponent;
  let fixture: ComponentFixture<CoursexiangxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursexiangxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursexiangxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
