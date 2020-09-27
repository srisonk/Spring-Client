import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { UpdateMachineComponent } from './update-machine/update-machine.component';


const routes: Routes = [
  { path: '', redirectTo: 'machine', pathMatch: 'full' },
  { path: 'machine', component: MachineListComponent },
  { path: 'add', component: CreateMachineComponent },
  { path: 'update/:id', component: UpdateMachineComponent },
  { path: 'details/:id', component: MachineDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
