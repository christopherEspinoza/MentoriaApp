import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmationComponent } from './popup-confirmation.component';

describe('PopupConfirmationComponent', () => {
  let component: PopupConfirmationComponent;
  let fixture: ComponentFixture<PopupConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupConfirmationComponent]
    });
    fixture = TestBed.createComponent(PopupConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
