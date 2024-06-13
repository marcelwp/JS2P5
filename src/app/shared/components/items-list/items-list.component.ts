import { Component, Input } from '@angular/core';
import { CatDTO } from '../../models/cat.model';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'items-list',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  @Input() cats: CatDTO[] = [];
}
