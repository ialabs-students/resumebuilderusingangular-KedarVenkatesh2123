import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkyComponent } from './venky.component';

describe('VenkyComponent', () => {
  let component: VenkyComponent;
  let fixture: ComponentFixture<VenkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
