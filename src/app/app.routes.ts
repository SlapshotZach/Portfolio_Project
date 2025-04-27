import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about_me', component: AboutPageComponent },
    { path: 'experience', component: ExperiencePageComponent },
    { path: 'projects', component: ProjectsPageComponent },
    { path: '**', component: HomePageComponent },
];
