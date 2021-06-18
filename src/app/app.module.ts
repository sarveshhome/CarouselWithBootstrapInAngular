import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImgcarouselComponent } from './imgcarousel/imgcarousel.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, HelloComponent, ImgcarouselComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
