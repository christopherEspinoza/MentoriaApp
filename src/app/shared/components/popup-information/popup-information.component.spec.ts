import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInformationComponent } from './popup-information.component';

describe('PopupInformationComponent', () => {
  let component: PopupInformationComponent;
  let fixture: ComponentFixture<PopupInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupInformationComponent]
    });
    fixture = TestBed.createComponent(PopupInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
