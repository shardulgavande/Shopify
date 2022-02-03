import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  emailId = "";
  password = "";
  public loginuser:any;

  btnDisabled = false;

  constructor(private formbuilder:FormBuilder,
    private router:Router,public userService: UserService,private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({

      emailId:[''],
      password:['']

    });
  }

  

  login(){
    this.userService.getUsers().subscribe(res => {
      const user=res.find((a:any)=> {
        this.loginuser = a;
        console.log(a);
        return a.emailId === this.form.value.emailId && a.password === this.form.value.password
      });


      if(user){
        alert("Login Success");
        //console.log(this.loginuser);
        sessionStorage.setItem('uid',this.loginuser.id);
        sessionStorage.setItem('uname',this.loginuser.name);
        localStorage.setItem('token',"dfdfdtrtdry.drddhfdhdyrdt.drftftfytfy");
        this.form.reset;
        this.router.navigateByUrl('/home');
      }else{
        alert("Invalid credentials");
      }
    },err=>{
      alert("Something went wrong!!");
    })
  }

}
