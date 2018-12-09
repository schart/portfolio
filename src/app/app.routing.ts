import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArticlesComponent} from './articles/articles.component';
import {InfoComponent} from './info/info.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ArticlesComponent
    },
    {
        path: 'about',
        component: InfoComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);