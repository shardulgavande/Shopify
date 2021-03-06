import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { LoginComponent } from '../../user/login/login.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form!: FormGroup;

  emailId = "";
  password = "";

  btnDisabled = false;

  constructor(private formbuilder:FormBuilder,private http: HttpClient,
    private router:Router,public adminService: AdminService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({

      emailId:[''],
      password:['']

    });

    // login(){
    //   this.userService.getUsers().subscribe(res => {
    //     const user=res.find((a:any)=> {
    //       return a.emailId === this.form.value.emailId && a.password === this.form.value.password
    //     });
  }
  login(){
   const user= this.adminService.login(this.form.value).subscribe(res => {
      // const user=res.find((a:any)=> {
      //   return a.emailId === this.form.value.emailId && a.password === this.form.value.password
      // });

      if(user!=null){
        alert("Login Success");
        localStorage.setItem('token',"dfdfdtrtdry.drddhfdhdyrdt.drftftfytfy");
        this.form.reset;
        this.router.navigateByUrl('/dashboard');
      }else{
        alert("Invalid credentials");
      }
    },err=>{
      alert("Invalid Credentials!!");
    })
  }
}
