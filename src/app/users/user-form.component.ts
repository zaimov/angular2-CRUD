import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/customValidators';
import { Router, CanDeactivate } from '@angular/router';
import { ComponentCanDeactivate } from './user-form.guard';
import { Observable } from 'rxjs/Rx';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements ComponentCanDeactivate, OnInit {

  form: FormGroup;
  title: string;
  user: User = new User('', '', '');

  constructor( formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router ) {
      this.form = formBuilder.group({
        'name': ['', Validators.compose([
          Validators.required,
          Validators.minLength(3), 
          Validators.maxLength(10)])],
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
    
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.form.dirty) {
      return confirm("Are you shure you want to leave? All your data will be lost.");
    }
    return true;
  }

  onSubmit() {
    const user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.username,
      this.form.value.address
    );
    this.userService.addUser(user)
      .subscribe(data => console.log(data));
    this.form.reset();
    this.router.navigate(['Users']);
  }

}
