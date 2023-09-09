import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule } from '@angular/material/grid-list';
import { BannerComponent } from './banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        LandingComponent,
        IndexComponent,
        BannerComponent,
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        SharedModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
    ]
})
export class LandingModule { }
