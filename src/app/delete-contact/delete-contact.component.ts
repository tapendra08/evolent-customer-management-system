import { Component,ChangeDetectorRef } from '@angular/core';
import { mydatabase } from '../mydatabase.services';

@Component({
  selector: 'delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContact {
 public datalist=mydatabase.myDataList;
 public selectedValue:any;
 public emptyList:any = false;

 constructor(private _ChangeDetectorRef:ChangeDetectorRef){}
    

  deleteDetails(value: any): void{
        this.selectedValue = value;
    }
  
    ngAfterViewChecked(){
      this.emptyList = mydatabase.myDataList.length === 0 ? true : false;
      this._ChangeDetectorRef.detectChanges();
    }
  
    deletePermanently(): void{
      this.datalist = mydatabase.myDataList = mydatabase.myDataList.filter((data:any) => data.email !== this.selectedValue);
      this.emptyList = mydatabase.myDataList.length === 0 ? true : false;
      this._ChangeDetectorRef.detectChanges();
    }
}
