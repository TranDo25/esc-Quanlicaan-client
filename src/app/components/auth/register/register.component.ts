import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {RegisterModel} from "../../../model/RegisterModel";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  registerForm!: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router) {

  }
  hide = true;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      FullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    })
  }
  onRegister(){
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
  private processRegister(data:any){
    this.authService.register(data).subscribe({
      next:(res)=>{
        this.router.navigate(['login']);
        alert('đăng ký thành công');
      },
      error:(err)=>{
        alert('đăng ký không thành công');
        console.log(err);
      }
    })
  }
}
