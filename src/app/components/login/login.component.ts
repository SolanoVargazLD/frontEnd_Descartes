import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(private formLogin: FormBuilder, private _snackBar: MatSnackBar, private _router: Router){
    this.form = this.formLogin.group({
      user:['', Validators.required],
      password:['', Validators.required],
    }
    );
  }

  ngOnInit():void{}

  public accessLogin(){
    const userLogin = this.form.value.user;
    const passwordLogin = this.form.value.password;

    if(userLogin == "Descartes" && passwordLogin == "d"){
      //! Redireccionar al Dasboard
      this.fakeLoading();
    }else{
      //!Direccionar al Login
      this.errorSnackBar();
      this.form.reset();
    }
  }

  public errorSnackBar() {
    this._snackBar.open('Usuario o Contraseña invalidos', 'Entendido', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  public fakeLoading(){
    this.loading = true;
    setTimeout(() =>{
      //!Redireccionamos al dashboard
      this._router.navigate(['dashboard']);
    }, 1500);
  }

  salir(){
    window.location.href = 'https://udescartesresidenciaitste.000webhostapp.com/';
  }
}
