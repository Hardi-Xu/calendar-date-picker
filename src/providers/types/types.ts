import { Injectable } from '@angular/core';

@Injectable()
export class TypesProvider {
  allTypes = [{
    "id": "必须做",
    "show": "显示"
  }, {
    "id": "提醒",
    "show": "不显示"
  }, {
    "id": "最新",
    "show": "显示"
  }, {
    "id": "完成",
    "show": "显示"
  }, {
    "id": "归档",
    "show": "显示"
  }, {
    "id": "其他",
    "show": "显示"
  }];
  constructor() {
  }
}
