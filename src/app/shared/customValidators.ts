import {AbstractControl} from '@angular/forms';

export class CustomValidators {
    static emailValidation(control: AbstractControl) {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid = regEx.test(control.value);
        return valid ? null : { email: true };
    }

    static alphaNumeric(control: AbstractControl)  {
        const regEx = /^[a-zA-Z0-9\-_]{1,10}$/;
        const valid = regEx.test(control.value);
        return valid ? null : { username: true };
    }
}