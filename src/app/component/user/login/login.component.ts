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
  //user1: any;

  constructor(private formbuilder:FormBuilder,
    private router:Router,public userService: UserService,private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({

      emailId:[''],
      password:['']

    });
  }

  login() {
    //this.userService.getUsers().subscribe(res => {
     // const users = res.find((a:any)=>{
       // this.loginuser= a;
       // console.log(a);

      //});
      // const user1=res.find((a:any)=> {
      //   this.loginuser = a;
      //  console.log(a);

      // return a.emailId === this.form.value.emailId && a.password === this.form.value.password


    console.log("Inside Login");

    const user=this.userService.login(this.form.value).subscribe(res => {
      // const user=res.find((a:any)=> {
      //   this.loginuser = a;
      //   console.log(a);
      //   return a.emailId === this.form.value.emailId && a.password === this.form.value.password
      // });

      this.loginuser=res;
     // console.log(this.user1);
      console.log("User",this.loginuser);
      if(user!=null){
        alert("Login Success");
        console.log("User",this.loginuser);

        // console.log(this.loginuser);
        sessionStorage.setItem('uid',this.loginuser.uid);
         sessionStorage.setItem('uname',this.loginuser.uname);
         sessionStorage.setItem('emailid',this.loginuser.emailid);
         console.log("email",this.loginuser.emailid);
        localStorage.setItem('token',"dfdfdtrtdry.drddhfdhdyrdt.drftftfytfy");
        // console.log("User",user);
        this.form.reset;
        this.router.navigateByUrl('/home');
      } else{
        alert("Invalid credentials");
      }
    },err=>{
      alert("Invalid Credentials!!");
    })
  }

 }
