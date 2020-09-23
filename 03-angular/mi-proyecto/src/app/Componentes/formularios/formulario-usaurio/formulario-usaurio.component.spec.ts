import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsaurioComponent } from './formulario-usaurio.component';

describe('FormularioUsaurioComponent', () => {
  let component: FormularioUsaurioComponent;
  let fixture: ComponentFixture<FormularioUsaurioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioUsaurioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioUsaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
