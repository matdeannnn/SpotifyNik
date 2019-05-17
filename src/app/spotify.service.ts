import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQCz0us64i06NHDJX5hwZW4OYquEmJJhUXrBXCsy6L9f6pWCvN6EmJKBlsY2WOnUwzWzyaOqnj494vHtLIdnDKxy_ZXTsw5O9PMieGQdtw1mUWtRKbpwEHnNpKIzA9s5iVlxaIogNmBCPbhdjzw-SO118mlXZYel9A');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=5' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}

