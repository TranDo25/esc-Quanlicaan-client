import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function PasswordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    debugger;
    if (control?.value !== matchingControl?.value) {
      return {passwordMismatch: true};
    } else {
      return null;
    }
  };
}
