import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbitreComponent } from './arbitre/arbitre.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ArbitreService } from './services/arbitre.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EquipeComponent } from './equipe/equipe.component';
import { MatchComponent } from './match/match.component';
import { AllUsersComponent } from './users/allusers.component';
import { PoolComponent } from './pool/pool.component';
import { ButComponent } from './but/but.component';
import { RencontreComponent } from './rencontre/rencontre.component';
import { ClassementComponent } from './classement/classement.component';
import { HomeComponent } from './home/home.component';
import { PoolClassementComponent } from './pool-classement/pool-classement.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
//import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './services/authintercptor.service';
import { AuthInterceptor1 } from './services/authintercptor1.service';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import { FiltreEquipeComponent } from './filtre-equipe/filtre-equipe.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AllUsersComponent,
    LoginComponent,
    ArbitreComponent,
    EquipeComponent,
    MatchComponent,
    PoolComponent,
    ButComponent,
    RencontreComponent,
    ClassementComponent,
    HomeComponent,
    PoolClassementComponent,
    FiltreEquipeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule, FormsModule,  
      HttpClientModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,

      MatCheckboxModule,
      MatButtonModule,
      MatInputModule,
      MatAutocompleteModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatMenuModule,
    
      MatBadgeModule,
      MatToolbarModule,
    
      MatGridListModule,
      MatCardModule,
      MatStepperModule,
      MatTabsModule,
      MatExpansionModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatDialogModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      ToastNoAnimationModule,
      ToastrModule.forRoot({
        timeOut: 1000,
        progressBar:true,
        progressAnimation: 'increasing',
        preventDuplicates:true
  
      })
     
     ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
