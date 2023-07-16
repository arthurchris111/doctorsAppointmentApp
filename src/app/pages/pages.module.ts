import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, BlogComponent],
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
})
export class PagesModule {}
