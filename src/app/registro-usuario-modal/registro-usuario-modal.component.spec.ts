import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuarioModalComponent } from './registro-usuario-modal.component';

describe('RegistroUsuarioModalComponent', () => {
  let component: RegistroUsuarioModalComponent;
  let fixture: ComponentFixture<RegistroUsuarioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsuarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
