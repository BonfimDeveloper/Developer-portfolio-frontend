import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaComponent } from './assinatura.component';

describe('AssinaturaComponent', () => {
  let component: AssinaturaComponent;
  let fixture: ComponentFixture<AssinaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssinaturaComponent]
    });
    fixture = TestBed.createComponent(AssinaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
