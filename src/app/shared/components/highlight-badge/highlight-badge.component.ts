import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-highlight-badge',
  templateUrl: './highlight-badge.component.html',
  styleUrls: ['./highlight-badge.component.css'],
})
export class HighlightBadgeComponent implements AfterViewInit {
  @ViewChild('badge', { static: true }) badge!: ElementRef;

  ngAfterViewInit(): void {
    gsap.fromTo(
      this.badge.nativeElement,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }
}
