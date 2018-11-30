import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DocentesComponent } from './docentes/docentes.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './main/header/header.component';
import { SideNavComponent } from './main/side-nav/side-nav.component';
import { AreasComponent } from './areas/areas.component';
import { BaseComponent } from './base/base.component';
import { CursoComponent } from './curso/curso.component';
import { InfraComponent } from './infra/infra.component';
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http';

import {  } from './material-module';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {
  MatSidenavModule,
  MatPaginatorModule, 
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'base', component: BaseComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'docentes', component: DocentesComponent },
  { path: 'infra', component: InfraComponent },

  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DocentesComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    AreasComponent,
    BaseComponent,
    CursoComponent,
    InfraComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatPaginatorModule, 
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    MatSidenavModule,
    MatPaginatorModule, 
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    InfraComponent,
    MatInputModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
