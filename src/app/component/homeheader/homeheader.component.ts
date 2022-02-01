import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

  public totalItem:number=0;

  constructor(private router:Router,private userService:UserService,
    private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })



  }

  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/login');

  }




}
