import { Component,OnInit} from '@angular/core';
import{ MatToolbar,MatToolbarRow} from '@angular/material';
  import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showFiller = false;
  ngOnInit(): void {}
  
  title = 'FRONTEND';
}
