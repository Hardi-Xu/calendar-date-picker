import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AddTypePage } from '../../pages/add-type/add-type';
//import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'types',
  templateUrl: 'types.html'
})
export class TypesComponent {

  text: string;
  types: string[]=["必须做", "提醒", "最新", "完成", "归档", "其他"];//假设新建的字都是2.3个字的字段
  typebar: string[]=[];
  typelist:string[]=[];
  currentType: any;
  barItemLength:any;//identbar上的项目所占px总和
  showTypeMode:boolean = false;

  constructor(public navCtrl: NavController) {
  }
  ngOnInit(){
    this.getTypebar();
  }
  getTypebar(){
    for(var i=0,j=0,barItemLength=120;i<this.types.length;i++,j++){
        if(this.types[i].length==2){
          barItemLength+=51.39;
        }
        if(this.types[i].length==3){
          barItemLength+=64.39;
        }
        if(barItemLength<document.body.clientWidth){
          this.typebar[i]=this.types[i];
          j=-1;
        }else {
          this.typelist[j]=this.types[i];
        };
       }
  }

  showTypeList(){
    this.showTypeMode=!this.showTypeMode;
  }
  addType(types){
    this.navCtrl.push(AddTypePage,{'types':this.types});
    console.log(this.types);
  }
  selectType(ident){
    this.currentType = ident;
  }

}
