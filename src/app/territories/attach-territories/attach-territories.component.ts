import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatesService} from '@core/services/states.service';
import {CountiesService} from '@core/services/counties.service';
import {MatSelectChange} from '@angular/material/select';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-attach-territories',
  templateUrl: './attach-territories.component.html',
  styleUrls: ['./attach-territories.component.scss']
})
export class AttachTerritoriesComponent implements OnInit {

  attachTerritoryForm: FormGroup;
  states;
  counties;
  selectedState: string;
  selectedCounties = [];

  constructor(
    private fb: FormBuilder,
    private statesService: StatesService,
    private countiesService: CountiesService
  ) {
    this.attachTerritoryForm = fb.group({
      states: ['', Validators.required],
      counties: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.statesService.get().subscribe(dt => {
      this.states = dt;
    });

    // this.countiesService.get().subscribe(dt => {
    //   this.counties = dt;
    // });
  }

  changeState(e: MatSelectChange) {
    this.selectedState = e.value;

    this.countiesService.getByState(this.selectedState).subscribe(dt => {
      this.counties = dt;
      // console.log(this.counties)
    });

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event)
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
