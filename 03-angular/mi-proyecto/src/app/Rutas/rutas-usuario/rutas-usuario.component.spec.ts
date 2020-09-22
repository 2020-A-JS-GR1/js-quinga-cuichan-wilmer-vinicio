import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasUsuarioComponent } from './rutas-usuario.component';

describe('RutasUsuarioComponent', () => {
  let component: RutasUsuarioComponent;
  let fixture: ComponentFixture<RutasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
