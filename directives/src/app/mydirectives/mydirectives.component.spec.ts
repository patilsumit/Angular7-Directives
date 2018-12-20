import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydirectivesComponent } from './mydirectives.component';

describe('MydirectivesComponent', () => {
  let component: MydirectivesComponent;
  let fixture: ComponentFixture<MydirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
