import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrilateral',
  templateUrl: './quadrilateral.component.html',
  styleUrls: ['./quadrilateral.component.css']
})
export abstract class QuadrilateralComponent {
  abstract getPerimeter(): number;
  abstract getArea(): number;
}
