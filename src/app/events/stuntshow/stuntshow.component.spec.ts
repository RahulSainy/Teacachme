import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuntshowComponent } from './stuntshow.component';

describe('StuntshowComponent', () => {
  let component: StuntshowComponent;
  let fixture: ComponentFixture<StuntshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuntshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuntshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
