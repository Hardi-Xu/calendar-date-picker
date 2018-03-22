import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TypesProvider } from '../../providers/types/types';
//import { TypeProvider } from '@angular/core/src/di/provider';


//@IonicPage()
@Component({
  selector: 'page-add-type',
  templateUrl: 'add-type.html',
})
export class AddTypePage {

  types: string[];
  allTypes: any;

  constructor(public navCtrl: NavController, 
    // public navParams: NavParams, 
    private typesProvider: TypesProvider) {

  }

  ionViewDidLoad() {
    // this.types = this.navParams.get('types');
    // console.log(this.types);
    this.getAllTypes();
    console.log(this.allTypes);
  }


  goBack() {
    this.navCtrl.pop();
  }
  finishID() {
    this.navCtrl.pop();
  }
  getAllTypes() {
    this.allTypes = this.typesProvider.allTypes;
  }

}
