import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
})
export class TypingEffectDirective {
  @Input('appTypingEffect') text: string = '';

  constructor(private el: ElementRef) {}

  /** Método para iniciar o efeito manualmente */
  startTypingEffect(): void {
    if (!this.text) {
      this.text = this.el.nativeElement.innerText;
    }
    this.el.nativeElement.innerText = ''; // Limpa o texto antes de começar
    this.typeText(this.text, 0);
  }

  private typeText(text: string, index: number): void {
    if (index < text.length) {
      this.el.nativeElement.innerText += text[index];
      setTimeout(() => this.typeText(text, index + 1), 20); // Velocidade do efeito
    }
  }
}
