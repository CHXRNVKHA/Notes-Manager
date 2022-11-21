import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { INote } from "../interfaces/note.interface";

@Injectable({
    providedIn: 'root'
})

export class NoteService {
    private notesUrl: string = 'api/notes';

    constructor(private http: HttpClient) {
        
    }

    public getNotes(): Observable<INote[]> {
       return this.http.get<INote[]>(this.notesUrl);
    }
}