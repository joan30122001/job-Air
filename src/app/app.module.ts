import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { ElementComponent } from './pages/element/element.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PreloaderComponent,
    JobListingComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    JobDetailComponent,
    ElementComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
