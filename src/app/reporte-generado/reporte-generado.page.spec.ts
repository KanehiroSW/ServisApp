import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteGeneradoPage } from './reporte-generado.page';

describe('ReporteGeneradoPage', () => {
  let component: ReporteGeneradoPage;
  let fixture: ComponentFixture<ReporteGeneradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteGeneradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
