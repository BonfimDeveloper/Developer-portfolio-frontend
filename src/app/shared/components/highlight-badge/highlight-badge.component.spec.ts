import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBadgeComponent } from './highlight-badge.component';

describe('HighlightBadgeComponent', () => {
  let component: HighlightBadgeComponent;
  let fixture: ComponentFixture<HighlightBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightBadgeComponent]
    });
    fixture = TestBed.createComponent(HighlightBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
