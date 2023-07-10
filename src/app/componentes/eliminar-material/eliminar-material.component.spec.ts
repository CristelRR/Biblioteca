import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMaterialComponent } from './eliminar-material.component';

describe('EliminarMaterialComponent', () => {
  let component: EliminarMaterialComponent;
  let fixture: ComponentFixture<EliminarMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarMaterialComponent]
    });
    fixture = TestBed.createComponent(EliminarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
