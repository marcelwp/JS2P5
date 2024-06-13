import { Component, Input } from '@angular/core';
import { CatDTO } from '../../models/cat.model';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'items-grid',
  standalone: true,
  imports: [MatCardModule, NgFor, RouterLink],
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.css'
})
export class ItemsGridComponent {
  @Input() cats: CatDTO[] = [];
}
