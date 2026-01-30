import { Routes } from '@angular/router';
import { DollsComponent } from './dolls/dolls.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { Age1Component } from './age1/age1.component';
import { Age2Component } from './age2/age2.component';
import { Age3Component } from './age3/age3.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';

export const routes: Routes = [
    {'path':'', component: NouveautesComponent},

    {'path': 'dolls', component: DollsComponent},
    {'path':'vehicules', component: VehiculesComponent},
    {'path':'puzzles', component: PuzzlesComponent},

    {'path':'age1', component: Age1Component},
    {'path':'age2', component: Age2Component},
    {'path':'age3', component: Age3Component},
    
    {'path':'homme', component: MaleComponent},
    {'path':'femme', component: FemaleComponent},

    {'path':'Admin', component: AdminPageComponent},
    {'path':'ADD', component: AjouterComponent},
    {'path':'Modifier', component: ModifierComponent},





];
