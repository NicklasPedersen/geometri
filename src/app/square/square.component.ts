import { Component, OnInit, Input } from '@angular/core';
import { QuadrilateralComponent } from '../quadrilateral/quadrilateral.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent extends QuadrilateralComponent {
  side_length: number;
  getArea(): number {
    return this.side_length * this.side_length;
  }
  getPerimeter(): number {
    return this.side_length * 4;
  }
}
