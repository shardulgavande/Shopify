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
  public uname: any;
  public uid:any;

  constructor(private router:Router,private userService:UserService,
    private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })


    this.uname = sessionStorage.getItem('uname');
    this.uid = sessionStorage.getItem('uid');
  }

  // search(event:any){
  //   this.searchTerm =(event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  // }

  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/product');

  }




}
