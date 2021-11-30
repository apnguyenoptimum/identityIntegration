import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesIconComponent } from './components/deliverables-icon/deliverables-icon.component';
import { ExplodedIconComponent } from './components/exploded-icon/exploded-icon.component';
import { SpfIconComponent } from './components/spf-icon/spf-icon.component';
import { MapIconComponent } from './components/map-icon/map-icon.component';
import { TrafficIconComponent } from './components/traffic-icon/traffic-icon.component';
import { IconComponent } from './icon/icon.component';
import { SignoutComponent } from './components/signout/signout.component';
import { DfLogoComponent } from './components/df-logo/df-logo.component';
import { DfMiniLogoComponent } from './components/df-mini-logo/df-mini-logo.component';
import { DfMedLogoComponent } from './components/df-med-logo/df-med-logo.component';
import { DfLogoResetComponent } from './components/df-logo-reset/df-logo-reset.component';
import { TestCompanyComponent } from './components/test-company/test-company.component';
import { AdminIconComponent } from './components/admin-icon/admin-icon.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { UpIconComponent } from './components/up-icon/up-icon.component';
import { DownIconComponent } from './components/down-icon/down-icon.component';
import { RedUpIconComponent } from './components/red-up-icon/red-up-icon.component';



@NgModule({
  declarations: [
    DeliverablesIconComponent,
    ExplodedIconComponent,
    SpfIconComponent,
    MapIconComponent,
    TrafficIconComponent,
    IconComponent,
    SignoutComponent,
    DfLogoComponent,
    DfMiniLogoComponent,
    DfMedLogoComponent,
    DfLogoResetComponent,
    TestCompanyComponent,
    AdminIconComponent,
    HeaderLogoComponent,
    UpIconComponent,
    DownIconComponent,
    RedUpIconComponent
  ],
  exports: [
    DeliverablesIconComponent,
    ExplodedIconComponent,
    SpfIconComponent,
    MapIconComponent,
    TrafficIconComponent,
    IconComponent,
    SignoutComponent,
    DfLogoComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class IconsModule { }
