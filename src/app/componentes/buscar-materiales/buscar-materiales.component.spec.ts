import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMaterialesComponent } from './buscar-materiales.component';

describe('BuscarMaterialesComponent', () => {
  let component: BuscarMaterialesComponent;
  let fixture: ComponentFixture<BuscarMaterialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarMaterialesComponent]
    });
    fixture = TestBed.createComponent(BuscarMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
