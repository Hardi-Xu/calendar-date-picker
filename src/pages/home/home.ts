import {Component} from '@angular/core';
import { TypesProvider } from '../../providers/types/types';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AddEventPage } from '../add-event/add-event';
import { EventsProvider } from '../../providers/events/events';
import { EditEventTypePage } from '../edit-event-type/edit-event-type';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  date: any;
  daysInThisWeek: any;
  daysInThisMonth:any;
  monthsInThisWeek: any;
  monthsInThisMonth: any;
  yearsInThisWeek: any;
  yearsInThisMonth: any;

  daysInLastMonth: any;
  daysInNextMonth: any;
  weekNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any; 

  currentDayOfWeek: number;
   nstart : number;
   nstop : number;
  isSelected: any;
  calendarMode: boolean = true;
  currentDay:number;

  weektemp : number = 0;
  monthtemp : number = 0;

  allIdentities:any;
  allTypes:any;

  currentIdentity: any;
  currentType: any;
  allEvents:any;
  events:any;
  events1: any;
  eventsNum:number;

  indexDate:any;//翻页改变当前页的“指引日期”数值
  indexMonth:any;
  indexYear:any;
  selectedDate: any;
  selectedMonth: any;
  selectedYear: any;
  


  constructor(public navCtrl: NavController, public typesProvider: TypesProvider,public eventsProvider:EventsProvider) {}

  ionViewWillEnter() {
    this.date = new Date();
    this.weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth()+1;
    this.currentDate = this.date.getDate();
    this.indexDate=this.currentDate;
    this.indexMonth=this.currentMonth;
    this.indexYear=this.currentYear;
    this.selectedDate=this.indexDate;
    this.selectedMonth=this.indexMonth;
    this.selectedYear=this.indexYear;
    this.currentDay=this.date.getDay();
    this.getDaysOfMonth();
    this.getDaysOfWeek();
    this.getAllTypes();
    this.getEvents();
  }
  getDaysOfWeek() {
    // this.currentDate = this.date.getDate();
    this.currentDayOfWeek = new Date(this.indexYear, this.indexMonth-1, this.indexDate).getDay();
    this.daysInThisWeek = new Array();
    let weekList = new Array();
    // this.monthsInThisWeek = new Array();
    // this.yearsInThisWeek = new Array();
    for (let m = 0; m <= 6; m++) {
      let inputDate = new Date(this.indexYear, this.indexMonth-1, this.indexDate - this.currentDayOfWeek + m );
      weekList.push(inputDate.getDate());
      this.daysInThisWeek.push(new Date(this.indexYear,this.indexMonth-1,weekList[m]).getDate());
    }
  }
  getDaysOfMonth(){
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    var firstDayThisMonth = new Date(this.indexYear, this.indexMonth-1, 1).getDay();// 1号是星期几firstDayThisMonth
    var prevNumOfDays = new Date(this.indexYear, this.indexMonth-1, 0).getDate();//上个月一共有多少天prevNumOfDays
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) { //填充上个月的每一天
      this.daysInLastMonth.push(i);
    }
    var thisNumOfDays = new Date(this.indexYear, this.indexMonth, 0).getDate();//这个月一共有多少天thisNumOfDays
    for (var j = 0; j < thisNumOfDays; j++) { ////填充这个月的每一天
      this.daysInThisMonth.push(j+1);
    }
    var lastDayThisMonth = new Date(this.indexYear, this.indexMonth, 0).getDay(); //这个月最后一天星期几lastDayThisMonth
    for (var k = 0; k < (6-lastDayThisMonth); k++) {                //填充下个月的每一天
      this.daysInNextMonth.push(k+1);
    }
  }
  goToLastWeek() {
     this.indexDate-=7;
     this.getDaysOfWeek();
     let temp = new Date(this.indexYear,this.indexMonth-1,this.indexDate);
    this.indexYear=temp.getFullYear();
    this.indexMonth=temp.getMonth()+1;
    this.indexDate = temp.getDate();
    this.currentYear=this.indexYear;
    this.currentMonth=this.indexMonth;
    this.currentDate=this.indexDate;
  }

  goToNextWeek() {
    this.indexDate+=7;
     this.getDaysOfWeek();
     let temp = new Date(this.indexYear,this.indexMonth-1,this.indexDate);
    this.indexYear=temp.getFullYear();
    this.indexMonth=temp.getMonth()+1;
    this.indexDate = temp.getDate();
    this.currentYear=this.indexYear;
    this.currentMonth=this.indexMonth;
    this.currentDate=this.indexDate;
  }
  goToLastMonth(){
    this.indexMonth--;
    this.getDaysOfMonth();
    let temp = new Date(this.indexYear,this.indexMonth-1,this.indexDate);
    this.indexYear=temp.getFullYear();
    this.indexMonth=temp.getMonth()+1;
    this.indexDate = temp.getDate();
    this.currentYear=this.indexYear;
    this.currentMonth=this.indexMonth;
    this.currentDate=this.indexDate;
  }
  goToNextMonth(){
    this.indexMonth++;
    this.getDaysOfMonth();
    let temp = new Date(this.indexYear,this.indexMonth-1,this.indexDate);
    // console.log(temp);
    this.indexYear=temp.getFullYear();
    this.indexMonth=temp.getMonth()+1;
    this.indexDate = temp.getDate();
    this.currentYear=this.indexYear;
    this.currentMonth=this.indexMonth;
    this.currentDate=this.indexDate;
  }

  selectDate(day) {
    this.currentYear=this.indexYear;
    this.currentMonth=this.indexMonth;
    this.currentDate = day;
    this.indexDate=day;
    this.getEvents();
    console.log("this.indexDate:"+this.indexYear+this.indexMonth+this.indexDate);
    console.log("this.currentDate:"+this.currentYear+this.currentMonth+this.currentDate);
    

    this.selectedDate=this.indexDate;
    this.selectedMonth=this.indexMonth;
    this.selectedYear=this.indexYear;
    
  }
  selectDateW(day) {
    if(day-15>this.indexDate){
      this.indexMonth--;
    }
    if(day+15<this.indexDate){
      this.indexMonth++;
    }
    this.currentYear=this.indexYear;
    this.currentMonth=this.indexMonth;
    this.currentDate = day;
    this.indexDate=day;
    this.getEvents();
    console.log("this.indexDate:"+this.indexYear+this.indexMonth+this.indexDate);
    console.log("this.currentDate:"+this.currentYear+this.currentMonth+this.currentDate);
    console.log(day);
    

    this.selectedDate=this.indexDate;
    this.selectedMonth=this.indexMonth;
    this.selectedYear=this.indexYear;
  }
  changeMode() {
    this.calendarMode = !this.calendarMode;
    if (this.calendarMode==true){
      this.getDaysOfMonth();
    }else{
      this.getDaysOfWeek();
    }
  }

  addEvent() {
    this.navCtrl.push(AddEventPage);
    // console.log("this.indexDate:"+this.indexYear+this.indexMonth+this.indexDate);
    // console.log("this.currentDate:"+this.currentYear+this.currentMonth+this.currentDate);
  }


  getAllTypes(){
    this.allTypes=this.typesProvider.allTypes;
  }

  getEvents(){
    this.allEvents=this.eventsProvider.events;
    this.events=[];
    // console.log("allEvents:"+ this.allEvents[1].name);//all events in provider
    for(var i=0;i<this.allEvents.length;i++){
      if(this.allEvents[i].date[0]===this.currentYear&&this.allEvents[i].date[1]===this.currentMonth&&this.allEvents[i].date[2]===this.currentDate){
        this.events.push(this.allEvents[i]);
      }
    }
    this.eventsNum=this.events.length;
  }
  getInfo(){
    console.log("current:"+this.currentYear+" "+this.currentMonth+" "+this.currentDate);
    console.log("index:"+this.indexYear+" "+this.indexMonth+" "+this.indexDate);
    console.log("selected:"+this.selectedYear+" "+this.selectedMonth+" "+this.selectedDate);
    // console.log(this.events.length);
    console.log("currentDay:"+this.currentDay);
    // console.log(this.allEvents[1].name);
    
  }

  gotoEditEventTypePage(){
    this.navCtrl.push(EditEventTypePage);
  }

  gotoToday(){
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth()+1;
    this.currentDate = this.date.getDate();
    this.indexDate=this.currentDate;
    this.indexMonth=this.currentMonth;
    this.indexYear=this.currentYear;
    this.selectedDate=this.indexDate;
    this.selectedMonth=this.indexMonth;
    this.selectedYear=this.indexYear;
    this.getDaysOfMonth();
    this.getDaysOfWeek();
    this.getAllTypes();
    this.getEvents();
  }
  checkEvent(day){
    this.allEvents=this.eventsProvider.events;
    this.events1=[];
    // console.log("allEvents:"+ this.allEvents[1].name);//all events in provider
    for(var i=0;i<this.allEvents.length;i++){
      if(this.allEvents[i].date[0]===this.currentYear&&this.allEvents[i].date[1]===this.currentMonth&&this.allEvents[i].date[2]===day){
        this.events1.push(this.allEvents[i]);
      }
    }
    if(this.events1.length!=0){return true;}
    else{
      return false;
    }
  }
}
