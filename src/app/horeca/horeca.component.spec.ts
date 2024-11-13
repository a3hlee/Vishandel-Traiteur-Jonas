import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorecaComponent } from './horeca.component';

describe('HorecaComponent', () => {
  let component: HorecaComponent;
  let fixture: ComponentFixture<HorecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorecaComponent]
    });
    fixture = TestBed.createComponent(HorecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
