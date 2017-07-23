import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { effects, store, instrumentation } from './store';
import { SharedModule } from './shared/shared.module';
import {PaperService} from "./papers/papers.service";
import { PaperDetailComponent } from './paper-detail/paper-detail.component';
import {TrainService} from "./trains/train.service";
import {TrainCompositionService} from "./trains/traincomposition.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    store,
    effects,
    routing,
    instrumentation
  ],
  providers: [

    PaperService,
    TrainService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
