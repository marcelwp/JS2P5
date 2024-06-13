import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cat/:id', component: ItemDetailComponent },
    { path: '**', component: HomeComponent },
];
