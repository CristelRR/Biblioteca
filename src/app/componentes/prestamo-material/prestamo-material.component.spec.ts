import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoMaterialComponent } from './prestamo-material.component';

describe('PrestamoMaterialComponent', () => {
  let component: PrestamoMaterialComponent;
  let fixture: ComponentFixture<PrestamoMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoMaterialComponent]
    });
    fixture = TestBed.createComponent(PrestamoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
