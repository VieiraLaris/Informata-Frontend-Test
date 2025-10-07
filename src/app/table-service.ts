import { computed, inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Game, ZeldaApiResponse } from './interface/api-interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  restApi = computed(() => `${environment.API_URL}/games`);

  private http = inject(HttpClient);

  private games$: Observable<Game[]> = this.getGames();

  public product = toSignal(this.games$, {
    initialValue: [],
  });

  getGames(): Observable<Game[]>{
    return this.http.get<ZeldaApiResponse>(this.restApi()).pipe(
      map(response => response.data)
    );
  }

  
}
