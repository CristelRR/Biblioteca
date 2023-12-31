import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMaterialComponent } from './actualizar-material.component';

describe('ActualizarMaterialComponent', () => {
  let component: ActualizarMaterialComponent;
  let fixture: ComponentFixture<ActualizarMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarMaterialComponent]
    });
    fixture = TestBed.createComponent(ActualizarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
