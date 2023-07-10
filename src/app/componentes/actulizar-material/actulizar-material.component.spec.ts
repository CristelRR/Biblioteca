import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActulizarMaterialComponent } from './actulizar-material.component';

describe('ActulizarMaterialComponent', () => {
  let component: ActulizarMaterialComponent;
  let fixture: ComponentFixture<ActulizarMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActulizarMaterialComponent]
    });
    fixture = TestBed.createComponent(ActulizarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
