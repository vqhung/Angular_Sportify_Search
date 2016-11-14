import { Component } from '@angular/core';
import {SearchService} from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [SearchService]
})
export class AppComponent { }
