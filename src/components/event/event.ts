import { Component } from '@angular/core';
import { EventsProvider } from '../../providers/events/events';

/**
 * Generated class for the EventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event',
  templateUrl: 'event.html'
})
export class EventComponent {

  text: string;

  constructor(public evntsProvider:EventsProvider) {
  }

}
