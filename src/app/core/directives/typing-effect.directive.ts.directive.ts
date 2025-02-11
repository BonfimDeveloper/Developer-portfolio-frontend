import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
})
export class TypingEffectDirective implements AfterViewInit {
  @Input('appTypingEffect') text: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (!this.text) {
      this.text = this.el.nativeElement.innerText;
    }
    this.el.nativeElement.innerText = ''; // Limpa o texto antes de começar
    this.typeText(this.text, 0);
  }

  private typeText(text: string, index: number): void {
    if (index < text.length) {
      this.el.nativeElement.innerText += text[index];
      setTimeout(() => this.typeText(text, index + 1), 2); // Velocidade do efeito
    }
  }
}
