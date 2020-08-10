import { Component, OnInit } from '@angular/core';
import { QuadrilateralComponent } from '../quadrilateral/quadrilateral.component';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent extends QuadrilateralComponent {
  side_width: number;
  side_height: number;
  
  getPerimeter(): number {
    return 2 * this.side_height + 2 * this.side_width;
  }
  getArea(): number {
    console.log(this.side_height);
    return this.side_width * this.side_height;
  }
}