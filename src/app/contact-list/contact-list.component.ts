import { Component,ChangeDetectorRef } from '@angular/core';
import { mydatabase } from '../mydatabase.services';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactAllList {
 public datalist=mydatabase.myDataList;
 public emptyList:boolean=false;

 constructor(private _ChangeDetectorRef:ChangeDetectorRef){}

 ngAfterViewChecked(){
      this.emptyList = mydatabase.myDataList.length === 0 ? true : false;
      this._ChangeDetectorRef.detectChanges();
    }
}
