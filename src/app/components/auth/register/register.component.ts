import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {PasswordMatchValidator} from "../../../core/validate/confirm-password";
import {passwordMatch} from "../../../core/validate/password-match";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  hide = true;


  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        FullName: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z0-9À-ỹ ]+$')


        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)


        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
        confirm_password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),

        ])

      }, [passwordMatch("password", "confirm_password")]
    );
  }

  onRegister() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const fullName = this.registerForm.value.FullName;


      debugger;

      this.processRegister({
        "fullname": fullName,
        "username": email,
        "password": password
      });
    }

  }

  private processRegister(data: any) {
    this.authService.register(data).subscribe({
      next: (res) => {
        this.router.navigate(['login']);
        alert('đăng ký thành công');
      },
      error: (err) => {
        alert('đăng ký không thành công');
        console.log(err);
      }
    })
  }
}
