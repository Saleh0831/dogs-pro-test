import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { HouseComponent } from './about/house/house.component';
import { ParentAlbumComponent } from './galary/parent-album/parent-album.component';
import { BlogerComponent } from './blog/bloger/bloger.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: HouseComponent },
  { path: 'galary', component: ParentAlbumComponent },
  { path: 'blog', component: BlogerComponent },
  { path: 'search' ,  loadChildren: () => import('./pages-all/pages-all.module').then(m => m.PagesAllModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
