import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
