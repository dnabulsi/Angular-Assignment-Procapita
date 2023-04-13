import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDesignComponent } from './components/main-design/main-design.component';
import { AssessmentItemTemplateStateComponent } from './components/main-design/assessment-item-template-state/assessment-item-template-state.component';
import { AssessmentItemTemplateStateOpenComponent } from './components/main-design/assessment-item-template-state-open/assessment-item-template-state-open.component';
import { ButtonBaseDefaultComponent } from './components/main-design/button-base-default/button-base-default.component';
import { ButtonIconBaseDefaultComponent } from './components/main-design/button-icon-base-default/button-icon-base-default.component';
import { ButtonTypePrimarySizeDefaultComponent } from './components/main-design/button-type-primary-size-default/button-type-primary-size-default.component';
import { ButtonTypePrimarySizeDefault2Component } from './components/main-design/button-type-primary-size-default2/button-type-primary-size-default2.component';
import { DropdownSizeDefaultStateDefaultComponent } from './components/main-design/dropdown-size-default-state-default/dropdown-size-default-state-default.component';
import { IconstyleRegularPaddingSquareComponent } from './components/main-design/iconstyle-regular-padding-square/iconstyle-regular-padding-square.component';
import { IconstyleRegularPaddingSquare2Component } from './components/main-design/iconstyle-regular-padding-square2/iconstyle-regular-padding-square2.component';
import { IconstyleSolidPaddingSquareComponent } from './components/main-design/iconstyle-solid-padding-square/iconstyle-solid-padding-square.component';
import { InputSizeDefaultComponent } from './components/main-design/input-size-default/input-size-default.component';
import { LegalEntityDropdownComponent } from './components/main-design/legal-entity-dropdown/legal-entity-dropdown.component';
import { MoreActionsSizeDefaultStatComponent } from './components/main-design/more-actions-size-default-stat/more-actions-size-default-stat.component';
import { SidebarTitleTypeTitleComponent } from './components/main-design/sidebar-title-type-title/sidebar-title-type-title.component';
import { IconstyleRegularPaddingNoneComponent } from './components/main-design/iconstyle-regular-padding-none/iconstyle-regular-padding-none.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDesignComponent,
    AssessmentItemTemplateStateComponent,
    AssessmentItemTemplateStateOpenComponent,
    ButtonBaseDefaultComponent,
    ButtonIconBaseDefaultComponent,
    ButtonTypePrimarySizeDefaultComponent,
    ButtonTypePrimarySizeDefault2Component,
    DropdownSizeDefaultStateDefaultComponent,
    IconstyleRegularPaddingSquareComponent,
    IconstyleRegularPaddingSquare2Component,
    IconstyleSolidPaddingSquareComponent,
    InputSizeDefaultComponent,
    LegalEntityDropdownComponent,
    MoreActionsSizeDefaultStatComponent,
    SidebarTitleTypeTitleComponent,
    IconstyleRegularPaddingNoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
