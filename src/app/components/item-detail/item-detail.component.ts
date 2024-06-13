import { Component } from '@angular/core';
import { GetApiDataServiceService } from '../../services/get-api-data-service.service';
import { CatDTO } from '../../shared/models/cat.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [RouterModule, MatSliderModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  cat: CatDTO = { id: '', url: '', width: 0, height: 0 };
  panelOpenState: boolean = false;

  constructor(private getData: GetApiDataServiceService, private activRoute: ActivatedRoute) {
    const identifier = this.activRoute.snapshot.paramMap.get('id');
    if (identifier !== null) {
      this.getData.getCatById(identifier).subscribe((cat) => {
        this.cat = cat;
      })
    }
  }
}
