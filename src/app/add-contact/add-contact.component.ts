import { Component , ChangeDetectorRef} from '@angular/core';
import { mydatabase } from '../mydatabase.services';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddNewContact {
constructor(private _ChangeDetectorRef : ChangeDetectorRef){}
  public datalist=mydatabase.myDataList;
  public firstName: any = "";
  public lastName: any = "";
  public emailId: any = "";
  public mobileNo: any = "";
  public status: any = "";
  public emptyList:boolean=false;
  public contactAdded:boolean=false;

   ngAfterViewChecked(){
      this.emptyList = mydatabase.myDataList.length === 0 ? true : false;
      this._ChangeDetectorRef.detectChanges();
    } 

  saveDetails(){
    
    let myCurrObj={
      "id": (this.datalist.length + 1).toString(),
      "firstName":this.firstName,
      "lastName":this.lastName,
      "email":this.emailId,
      "mobile":this.mobileNo,
      "status": "Active"
    }
    console.log(myCurrObj.toString())
    mydatabase.myDataList.push(myCurrObj);
    this.contactAdded=true;
  }


}
