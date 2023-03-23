import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OggettoVeicoloComponent } from './oggetto-veicolo.component';

describe('OggettoVeicoloComponent', () => {
  let component: OggettoVeicoloComponent;
  let fixture: ComponentFixture<OggettoVeicoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OggettoVeicoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OggettoVeicoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
