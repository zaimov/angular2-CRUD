import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/customValidators';
import { Router, ActivatedRoute, CanDeactivate } from '@angular/router';
import { ComponentCanDeactivate } from './user-form.guard';
import { Observable } from 'rxjs/Rx';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements ComponentCanDeactivate, OnInit {

  form: FormGroup;
  title: string;
  user: User = new User(null,'', '', '');

  constructor( formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router,
    private acitvatedRoute: ActivatedRoute
    ) {
      this.form = formBuilder.group({
        'id': ['', null],
        'name': ['', Validators.compose([
          Validators.required,
          Validators.minLength(3), 
          Validators.maxLength(30)])],
        'email': ['', Validators.compose([
          Validators.required,
          CustomValidators.emailValidation
        ])],
        'username': ['', Validators.compose([
          Validators.required,
          CustomValidators.alphaNumeric
        ])],
        'address': formBuilder.group({
          street: [],
          suite: [],
          city: [],
          zipcode: [],
        })
      });
   }

  ngOnInit() {
    let id = this.acitvatedRoute.params.subscribe(params => {
      let id = +params['id'];
      this.title = id ? "Edit User" : "New User";

      if(!id) {
        return;
      }

      this.userService.getUser(id)
        .subscribe(
          user => {
            this.user.id = user.id;
            this.user.name = user.name;
            this.user.email = user.email;
            this.user.username = user.username;
            this.user.address.street = user.address.street;
            this.user.address.suite = user.address.suite;
            this.user.address.city = user.address.city;
            this.user.address.zipcode = user.address.zipcode;
          },
          response => {
            if (response.status = 404) {
              this.router.navigate(['Not Found']);
            }
          }
        )
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.form.dirty) {
      return confirm("Are you shure you want to leave? All your data will be lost.");
    }
    return true;
  }

  onSubmit() {
    let result;
    const user = new User(
      this.user.id ? this.user.id : null,
      this.form.value.name,
      this.form.value.email,
      this.form.value.username,
      this.form.value.address
    );
    
    if(this.user.id) {
      
      result = this.userService.updateUser(user);
    } else {
       result = this.userService.addUser(user);
    }
    
    result.subscribe(data => console.log(data));
    this.form.reset();
    this.router.navigate(['users']);
  }

}
