import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { WebAppService } from '../web-app.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {
  addWebApp= new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(''),
    // email: new FormControl(''),
    // address: new FormControl(''),
  })
  alert :boolean=false
 constructor(private WebApp : WebAppService , private router :Router){}

  ngOnInit() : void{}
  collection(){
    this.WebApp.saveWebApp(this.addWebApp.value).subscribe((result)=>{
      this.alert=true
    })
    this.addWebApp.reset({})
    
    
  }
  
  closeAlert(){
    this.alert=false
    this.router.navigate(['list'])
  }

}
