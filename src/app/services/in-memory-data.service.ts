import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INote } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      { 
        id: 12, 
        tags: [], 
        title: 'Todo1', 
        text: 'Todo 1 text', 
        deleteAt: '' 
      },
      { 
        id: 13, 
        tags: ['shop'], 
        title: 'Todo2', 
        text: 'Todo 2 text', 
        deleteAt: '' 
      },
      { 
        id: 14, 
        tags: [ 'shop', 'shop1'], 
        title: 'Todo3', 
        text: 'Todo 3 text', 
        deleteAt: '' 
      },
    ];
    return {notes};
  }

  genId(notes: INote[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}