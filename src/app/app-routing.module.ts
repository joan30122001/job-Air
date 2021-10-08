import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ElementComponent } from './pages/element/element.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'job-listing',
    component: JobListingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailComponent
  },
  {
    path: 'job-details',
    component: JobDetailComponent
  },
  {
    path: 'element',
    component: ElementComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
