import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ConsultaComponent } from './consulta/consulta.component';

export const routes: Routes = [
    {
        path:'inicio',
        component: InicioComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'consulta',
        component: ConsultaComponent
    }




];
