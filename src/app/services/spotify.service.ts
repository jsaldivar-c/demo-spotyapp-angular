import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// Con este decorador importamos el servicio sin que tengamos que registrarlo en el app.module.ts
@Injectable({
    providedIn: 'root',
})
export class SpotifyService {
    constructor(private http: HttpClient) {}

    /* Query que sera utilizado en los metodos siguientes del cual se obtiene un
     URL generica y el token de acceso a Spotify.*/

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            Authorization:
                'Bearer BQDe4ilp7I4WUrMBqhsCsT8PMMoQj8QJOrCHx4UOxE-tLZ2Ki8m0u01JCAAfnyjAiVBR3uwqR8t0k8hzgOM',
        });
        return this.http.get(url, { headers });
    }

    /* Obtener nuevos lanzamientos */
    getNewReleases() {
        return this.getQuery('browse/new-releases').pipe(
            map((data: any) => data.albums.items)
        );
    }

    /* Busqueda de artistas */
    getArtistas(termino: string) {
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
            map((data: any) => data.artists.items)
        );
    }

    /* Ir a la informaciòn del artista */
    getArtista(id: string) {
        return this.getQuery(`artists/${id}`);
    }

    /* Obtener las canciones mas populares del artista */
    getTopTracks(id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
            map((data: any) => data.tracks)
        );
    }
}
