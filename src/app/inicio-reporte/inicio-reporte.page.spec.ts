import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioReportePage } from './inicio-reporte.page';

describe('InicioReportePage', () => {
  let component: InicioReportePage;
  let fixture: ComponentFixture<InicioReportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
