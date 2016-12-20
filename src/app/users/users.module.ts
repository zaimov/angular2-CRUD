import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { HttpModule }                       from '@angular/http';

import { UsersComponent }                   from './users.component';
import { UserFormComponent }                from './user-form.component';

import { UserService }                      from './user.service';
import { UserFormGuard }                    from './user-form.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        UserFormComponent, 
        UsersComponent
    ],
    providers: [
        UserService,
        UserFormGuard
    ]
})
export class UsersModule { 
}