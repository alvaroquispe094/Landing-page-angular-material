import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
        LandingComponent,
        IndexComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        SharedModule,
        MatGridListModule,
    ]
})
export class LandingModule { }
