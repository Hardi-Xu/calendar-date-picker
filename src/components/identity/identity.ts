import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AddIdentityPage } from '../../pages/add-identity/add-identity';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';


@Component({
  template: `
  <ion-list class="identList">
    <div *ngFor="let ident of identList" text-center>
      <button ion-button small outline  color="dark" (click)="selectIdentity(ident)">
        <span class="currentIdentity" *ngIf="currentIdentity === ident; else otherIdentity">{{ident}}</span>
        <ng-template #otherIdentity class="otherIdentity">{{ident}}</ng-template>
      </button>
      </div>
    </ion-list>
  `
  
})
export class PopoverPage {
  identList:any;
  currentIdentity:any;
  constructor(public viewCtrl: ViewController,public params: NavParams) {}
  ngOnInit(){
    this.identList = this.params.data.identlist;
    this.currentIdentity = this.params.data.currentIdentity;
    console.log(this.identList);
    
  }
  selectIdentity(ident){
    this.currentIdentity = ident;
  }
  close() {
    this.viewCtrl.dismiss();
  }
}


@Component({
  selector: 'identity',
  templateUrl: 'identity.html'
})
export class IdentityComponent {

  text: string;
  identities: string[]= ["交办人", "经办人", "证人", "外围人", "客户", "供应商","领导"];//假设新建的字都是2.3个字的字段
  identbar: string[]=[];
  identlist:string[]=[];
  currentIdentity: any;
  barItemLength:any;//identbar上的项目所占px总和
  showIdentityMode:boolean = false;
  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {
  }
  ngOnInit(){
    this.getIdentbar();
  }
  getIdentbar(){
    for(var i=0,j=0,barItemLength=120;i<this.identities.length;i++,j++){
        if(this.identities[i].length==2){
          barItemLength+=51.39;
        }
        if(this.identities[i].length==3){
          barItemLength+=64.39;
        }
        if(barItemLength<document.body.clientWidth){
          this.identbar[i]=this.identities[i];
          j=-1;
        }else {
          this.identlist[j]=this.identities[i];
        };
       }
  }

  showIdentityList(){
    this.showIdentityMode=!this.showIdentityMode;
  }
  addIdentity(){
    this.navCtrl.push(AddIdentityPage);
  }
  selectIdentity(ident){
    this.currentIdentity = ident;
  }
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPage,{
      identlist: this.identlist,
      currentIdentity: this.currentIdentity
    },);
    popover.present({
      ev: ev
    });
  }


}
