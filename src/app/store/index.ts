import { combineReducers, ActionReducer, Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { IPaper, paperReducer } from './paper/paper.reducer';
import {  trainReducer } from './train/train.reducer';
import { CommonModule } from '@angular/common';
import {PaperEffects} from "./paper/paper.effects";
import {selectedPaperReducer} from "./paper/selectedpaper.reducer";
import {Train} from "../trains/train.model";
import {TrainEffects} from "./train/train.effects";
import {TrainDisplay} from "../trains/traindisplay.model";
import {trainDisplayReducer} from "./traindisplay/traindisplay.reducer";

// all new reducers should be define here
export interface IAppState {
  paper:IPaper[];
  selectedPaper:IPaper;
  train:Train[];
  trainDisplay:TrainDisplay[];
}

// all new reducers should be define here
const reducers = {
  paper:paperReducer,
  selectedPaper:selectedPaperReducer,
  train:trainReducer,
  trainDisplay:trainDisplayReducer
};

const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);
const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: IAppState, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

@NgModule()
export class DummyModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule
    };
  }
}

export const store: ModuleWithProviders = StoreModule.provideStore(reducer);
export const instrumentation: ModuleWithProviders =
  (!environment.production) ? StoreDevtoolsModule.instrumentOnlyWithExtension() : DummyModule.forRoot();

export const effects: ModuleWithProviders[] = [
    EffectsModule.run(PaperEffects),
    EffectsModule.run(TrainEffects)

];
