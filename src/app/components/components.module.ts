import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsComponent } from './components.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ComponentsComponent, AccordionComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [ComponentsComponent, AccordionComponent],
})
export class ComponentsModule {}
