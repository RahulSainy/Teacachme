import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoexpoComponent } from './autoexpo.component';

describe('AutoexpoComponent', () => {
  let component: AutoexpoComponent;
  let fixture: ComponentFixture<AutoexpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoexpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoexpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
