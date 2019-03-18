import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardDeck } from './card.model';

@Injectable()
export class CardService {
  private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
  private readonly API_KEY = '6d7ed421e5msha08854d6ca16882p155af0jsnf41cda9bfe7c';
  private readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock',
    'Hunter', 'Paladin'];

  constructor(private http: HttpClient) {

  }
  public getAllCardDecks(): Observable<CardDeck[]> {
    const headers = new HttpHeaders({'X-RapidAPI-Key': this.API_KEY});
    // debugger:
    return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers});
  }
}
