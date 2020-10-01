import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
/* CIENTE HTTP */
import { HttpClientModule } from '@angular/common/http';
/* IMPORTAR COMPONENTES */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// IMPORTAR RUTAS
import { ROUTES } from './app.routes';
// IMPORTAR SERVICIOS
import { SpotifyService } from './services/spotify.service';
// IMPORTAR PIPES
import { NoimagesPipe } from './pipes/noimages.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistaComponent,
        NavbarComponent,
        NoimagesPipe,
        DomseguroPipe,
        TarjetasComponent,
        LoadingComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
