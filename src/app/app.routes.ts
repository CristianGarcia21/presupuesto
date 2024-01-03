import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { IngresarPresupuestoComponent } from './componets/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './componets/gastos/gastos.component';

 export const routes: Routes = [
    {path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
    {path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
    {path: 'gastos', component: GastosComponent},
    {path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
