// import { HttpClient } from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {
  events = [{
    "name": "227市场",
    "description": "定价依据和客户判定",
    "date": [2018,2,9],
    "types": ["必须做", "提醒"]
  },{
    "name": "新软件",
    "description": "定价依据和客户判定",
    "date": [2018,2,9],
    "types": ["必须做"]
  },{
    "name": "有关消防资格考试",
    "description": "考试纲要 考试时间 考试地点",
    "date": [2018,2,9],
    "types": ["必须做", "提醒"]
  },{
    "name": "总裁办招新",
    "description": "招一些助手",
    "date": [2018,2,10],
    "types": ["必须做", "提醒"]
  },{
    "name": "有关消防资格考试",
    "description": "考试纲要 考试时间 考试地点",
    "date": [2018,2,10],
    "types": ["必须做", "提醒"]
  },{
    "name": "有关消防资格考试",
    "description": "考试纲要 考试时间 考试地点",
    "date": [2018,2,11],
    "types": ["必须做", "提醒"]
  },{
    "name": "有关消防资格考试",
    "description": "考试纲要 考试时间 考试地点",
    "date": [2018,2,22],
    "types": ["必须做", "提醒"]
  },{
    "name": "227市场",
    "description": "定价依据和客户判定",
    "date": [2018,3,9],
    "types": ["必须做", "提醒"]
  }];
  constructor() {
    console.log('Hello EventsProvider Provider');
  }

}
