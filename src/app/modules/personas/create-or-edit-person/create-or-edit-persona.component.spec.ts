import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditPersonaComponent } from './create-or-edit-persona.component';

describe('CreateOrEditPersonaComponent', () => {
  let component: CreateOrEditPersonaComponent;
  let fixture: ComponentFixture<CreateOrEditPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrEditPersonaComponent]
    });
    fixture = TestBed.createComponent(CreateOrEditPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
