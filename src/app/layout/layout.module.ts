import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [FooterComponent, HeaderComponent, LayoutComponent],
})
export class LayoutModule {}
