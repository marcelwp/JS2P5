import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemsGridComponent } from '../../shared/components/items-grid/items-grid.component';
import { ItemsListComponent } from '../../shared/components/items-list/items-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CatDTO } from '../../shared/models/cat.model';
import { GetApiDataServiceService } from '../../services/get-api-data-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, ItemsGridComponent, ItemsListComponent, MatIconModule, MatListModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public loadingAPI = true;
  cats: CatDTO[] = [];

  showList: boolean = true;
  showGrid: boolean = false;

  constructor(private getData: GetApiDataServiceService) {
    this.getData
      .getNumberOfCats()
      .subscribe((catData) => {
        this.loadingAPI = false;
        this.cats = catData;
      });
  }

  clickShowList(): void {
    this.showList = true;
    this.showGrid = false;
  }

  clickShowGrid(): void {
    this.showList = false;
    this.showGrid = true;
  }
}
