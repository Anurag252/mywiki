import { Component, OnInit ,EventEmitter,Output, Input} from '@angular/core';
import { FetchCsharpService } from '../fetch-csharp.service';
import { Observable } from 'Rxjs';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css'],
  providers:[FetchCsharpService]
})
export class NavComponentComponent implements OnInit {
 isClicked : boolean = false;
 public lastClickedElement : any ;
 @Output() sendData = new EventEmitter();
 data : any;
 @Input() newQuestion : string = "";


 @Input() set newAnswer (value : string)
 {
  this.fetchService.postData(value ,this.newQuestion);
 }
  constructor( public fetchService : FetchCsharpService ) { 
    
  }

  ngOnInit() {
  }

  highLight(event)
  { if(this.lastClickedElement != null)
    {
      this.lastClickedElement.style.color = "blue";
    }
    var target = event.target || event.srcElement || event.currentTarget;
    this.lastClickedElement = target;
    target.style.color = "yellow";  


    this.fetchService.getDataFromCsharpSerive().subscribe(
     data => 
     {
      this.assignToData(data);
     }
   );
   
    
  }

  assignToData(data : any)
  {
    this.data = data;
    console.log(data);
    this.sendData.emit(this.data);
  }

}
