import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CreacionComponent } from './creacion/creacion.component';
import { EdicionComponent } from './edicion/edicion.component';

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
    },
    {
        path:'creacion',
        component: CreacionComponent
    },
    {
        path: 'edicion/:id',
        component: EdicionComponent
    
    }
   
 




];
