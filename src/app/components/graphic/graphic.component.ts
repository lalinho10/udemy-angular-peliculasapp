import { Component, Input, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: []
})

export class GraphicComponent implements AfterContentChecked {
  @Input() vote_average: any;

  grade_stroke = {
    good: { background: '#9DFDB3', foreground: '#1E7E34' },
    medium: { background: '#FFFF7F', foreground: '#E0A900' },
    bad: { background: '#FFBCCC', foreground: '#C82333' }
  };

  percentage: number;
  graph_dashArray: string;
  selected_stroke: any = {};

  constructor() {}

  ngAfterContentChecked() {
    this.percentage = this.vote_average / 10;
    this.graph_dashArray = `${this.vote_average * 20},200`;

    let grade: string;

    if ( this.vote_average <= 10 && this.vote_average >= 8 ) {
      grade = 'good';
    } else if ( this.vote_average < 8 && this.vote_average >= 6 ) {
      grade = 'medium';
    } else if ( this.vote_average < 6 && this.vote_average >= 0 ) {
      grade = 'bad';
    }

    this.selected_stroke = this.grade_stroke[ grade ];
  }
}
