import { RouterModule } from '@angular/router';

import { UsersComponent } from "./users.component";
import { UserFormComponent } from "./user-form.component";
import { UserFormGuard } from "./user-form.guard";

export const usersRouting = RouterModule.forChild([
    {path: 'users/:id', component: UserFormComponent, canDeactivate: [UserFormGuard]},
    {path: 'users/new', component: UserFormComponent, canDeactivate: [UserFormGuard]},
	{path: 'users', component: UsersComponent}
]);