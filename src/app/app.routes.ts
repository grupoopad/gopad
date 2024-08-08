import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MembersComponent } from './components/members/members.component';
import { NewsComponent } from './components/news/news.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'publications',
        component: PublicationsComponent
    },
    {
        path:'projects',
        component: ProjectsComponent
    },
    {
        path:'members',
        component: MembersComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
    // {
    //     path:'news',
    //     component: NewsComponent
    // },
    // {
    //     path:'news-page',
    //     component:NewsPageComponent
    // },
];
