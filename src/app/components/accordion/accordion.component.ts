import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  accordionButton() {
    document.getElementById('collapse')?.classList.toggle('show');
  }
  accordionButtonTwo() {
    document.getElementById('collapseTwo')?.classList.toggle('show');
  }
  accordionButtonThree() {
    document.getElementById('collapseThree')?.classList.toggle('show');
  }
  accordionButtonFour() {
    document.getElementById('collapseFour')?.classList.toggle('show');
  }
}
