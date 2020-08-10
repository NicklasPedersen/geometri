import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { QuadrilateralComponent } from './quadrilateral/quadrilateral.component';
import { ParallelogramComponent } from './parallelogram/parallelogram.component';
import { TrapezoidComponent } from './trapezoid/trapezoid.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    RectangleComponent,
    QuadrilateralComponent,
    ParallelogramComponent,
    TrapezoidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
