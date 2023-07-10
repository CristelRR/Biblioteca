import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaterialComponent } from './registrar-material.component';

describe('RegistrarMaterialComponent', () => {
  let component: RegistrarMaterialComponent;
  let fixture: ComponentFixture<RegistrarMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarMaterialComponent]
    });
    fixture = TestBed.createComponent(RegistrarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
