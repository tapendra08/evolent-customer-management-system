import { Component,ChangeDetectorRef } from '@angular/core';
import { mydatabase } from '../mydatabase.services';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContact {
 public datalist=mydatabase.myDataList;
 public selectedValue:any;
 public emptyList:any = false;
 public recordFound : boolean=false;
 public noRecordFound:boolean=false;
 public recordUpdated:boolean=false;
 public cid:number;
 public firstName;
 public lastName;
 public emailId;
 public mobileNo;
 public status;

 constructor(private _ChangeDetectorRef:ChangeDetectorRef){}
    


    ngAfterViewChecked(){
      this.emptyList = mydatabase.myDataList.length === 0 ? true : false;
      this._ChangeDetectorRef.detectChanges();
    }
  
   updateMyDetails(id:any){
    let index=this.cid;
    let myCurrObj={
                          "id": index.toString(),
                           "firstName":this.firstName,
                           "lastName":this.lastName,
                           "email":this.emailId,
                           "mobile":this.mobileNo,
                           "status": this.status
                         }
    for(let i=0;i<this.datalist.length;i++){
                if(this.datalist[i].id===index.toString()){
                    this.datalist.splice(i,1,myCurrObj);
                    this.recordUpdated=true;
                    break;
                }
    }
   }
  
   search(){
     let index=this.cid;
     this.recordFound=false;
     if(this.datalist.length>0){
          if(index){
            for(let i=0;i<this.datalist.length;i++){
                if(this.datalist[i].id===index.toString()){
                  this.recordFound=true;
                  this.firstName=this.datalist[i].firstName;
                  this.lastName=this.datalist[i].lastName;
                  this.emailId=this.datalist[i].email;
                  this.mobileNo=this.datalist[i].mobile;
                  this.status=this.datalist[i].status;
                  break;
                }
            }
              this.noRecordFound=this.recordFound ? false : true;
          }
        }
     }


}
