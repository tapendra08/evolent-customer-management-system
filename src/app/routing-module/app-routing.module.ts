import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DefaultLoginComponent } from '../default-login-component/default.component';
import { ContactAllList } from '../contact-list/contact-list.component';
import { AddNewContact } from '../add-contact/add-contact.component';
import { DeleteContact } from '../delete-contact/delete-contact.component';
import {EditContact } from '../edit-contact/edit-contact.component';
import { PageNotFound } from '../notfound-component/page-notfound.component';
import { AuthGaurdService } from './auth-guard.service';


const routes : Routes =[{path : '', redirectTo : "/defaultlogin", pathMatch : 'full' },
               {path : 'defaultlogin' , component : DefaultLoginComponent},
               {path : 'listcontact' , component : ContactAllList,canActivate:[AuthGaurdService]},
               {path : 'addcontact' , component : AddNewContact,canActivate:[AuthGaurdService]},
               {path : 'editcontact' , component : EditContact,canActivate:[AuthGaurdService]},
               {path : 'deletecontact' , component : DeleteContact,canActivate:[AuthGaurdService]},
               {path : '**' , component : PageNotFound}]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}

export const routingComponent=[DefaultLoginComponent,ContactAllList,AddNewContact,EditContact,DeleteContact,PageNotFound];