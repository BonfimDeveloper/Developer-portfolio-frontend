import { Component } from '@angular/core';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css'],
})
export class SoftskillsComponent {
  public isHovered: boolean = false;
  idea1: string = 'assets/images/idea.png';
  idea2: string = 'assets/images/idea2.png';
}
