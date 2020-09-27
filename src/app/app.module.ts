import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMachineComponent } from './update-machine/update-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMachineComponent,
    MachineDetailsComponent,
    MachineListComponent,
    UpdateMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
