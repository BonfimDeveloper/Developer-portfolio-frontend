import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaAtivaComponent } from './rota-ativa.component';

describe('RotaAtivaComponent', () => {
  let component: RotaAtivaComponent;
  let fixture: ComponentFixture<RotaAtivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotaAtivaComponent]
    });
    fixture = TestBed.createComponent(RotaAtivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
