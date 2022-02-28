import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drugstore';

  list$: Observable<Drug[]> = this.drugService.getAll();

  console = console;

  constructor(private drugService: DrugService) {}
}
