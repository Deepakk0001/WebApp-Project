import { Component } from '@angular/core';
import { WebAppService } from '../web-app.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
  
  constructor (private WebApp:WebAppService) {}
  collection:any = {}
ngOnInit() :void{
  this.WebApp.getList().subscribe((result)=>{
    console.log(result)
    this.collection=result
  })
}
addToCart(){
  
}

}
