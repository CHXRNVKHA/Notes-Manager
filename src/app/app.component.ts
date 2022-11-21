import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INote } from './interfaces/note.interface';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notes manager';
  notes$: Observable<INote[]> = of([]);

  constructor(private noteService: NoteService) {

  }

  ngOnInit(): void {
    this.notes$ = this.noteService.getNotes();
  }
}
