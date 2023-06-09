import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentItemTemplateStateComponent } from './components/assessment-item-template-state/assessment-item-template-state.component';
import { ButtonBaseDefaultComponent } from './components/button-base-default/button-base-default.component';
import { ButtonTypePrimarySizeDefaultComponent } from './components/button-type-primary-size-default/button-type-primary-size-default.component';
import { ButtonTypePrimarySizeDefault2Component } from './components/button-type-primary-size-default2/button-type-primary-size-default2.component';
import { DropdownSizeDefaultStateDefaultComponent } from './components/dropdown-size-default-state-default/dropdown-size-default-state-default.component';
import { IconstyleRegularPaddingSquare2Component } from './components/iconstyle-regular-padding-square2/iconstyle-regular-padding-square2.component';
import { InputSizeDefaultComponent } from './components/input-size-default/input-size-default.component';
import { LegalEntityDropdownComponent } from './components/legal-entity-dropdown/legal-entity-dropdown.component';
import { MoreActionsSizeDefaultStatComponent } from './components/more-actions-size-default-stat/more-actions-size-default-stat.component';
import { IconstyleRegularPaddingNoneComponent } from './components/iconstyle-regular-padding-none/iconstyle-regular-padding-none.component';
import { ButtonIconBaseDefaultComponent } from './components/button-icon-base-default/button-icon-base-default.component';
import { IconstyleRegularPaddingSquareComponent } from './components/iconstyle-regular-padding-square/iconstyle-regular-padding-square.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentItemTemplateStateComponent,
    ButtonBaseDefaultComponent,
    ButtonTypePrimarySizeDefaultComponent,
    ButtonTypePrimarySizeDefault2Component,
    DropdownSizeDefaultStateDefaultComponent,
    IconstyleRegularPaddingSquare2Component,
    InputSizeDefaultComponent,
    LegalEntityDropdownComponent,
    MoreActionsSizeDefaultStatComponent,
    IconstyleRegularPaddingNoneComponent,
    ButtonIconBaseDefaultComponent,
    IconstyleRegularPaddingSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
