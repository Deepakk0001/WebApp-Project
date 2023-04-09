import { Component } from '@angular/core';
import { WebAppService } from '../web-app.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  constructor (private WebApp:WebAppService) {}

  
ngOnInit() :void{}
 
}
