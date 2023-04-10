import { Component } from '@angular/core';
import { WebAppService } from '../web-app.service';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  alert:boolean=false
  constructor (private WebApp: WebAppService , private router: ActivatedRoute , ) {}
  updateResto= new FormGroup({
    name : new FormControl(''),
    amount : new FormControl(''),

    // email : new FormControl(''),
    // address :new FormControl('')
  })
ngOnInit() : void{
  // console.warn(this.router.snapshot.params['id'])
  this.WebApp.getUpdateById(this.router.snapshot.params['id']).subscribe((result:any)=>{
console.log(result)
this.updateResto= new FormGroup({
  name : new FormControl(result['name']),
  amount : new FormControl(result['amount']),

  // email : new FormControl(result['email']),
  // address :new FormControl(result['address'])
})
  })
 }
 updateData(){
// console.log(this.updateResto.value);
this.WebApp.updateWebData(this.router.snapshot.params['id'],this.updateResto.value).subscribe((result)=>{
console.log(result)
this.alert=true


})
 }
 closeAlert(){
  this.alert=false
 }
 

}

