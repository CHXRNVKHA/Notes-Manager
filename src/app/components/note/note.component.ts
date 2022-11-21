import { Component, Input } from "@angular/core";
import { INote } from "src/app/interfaces/note.interface";

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})

export class NoteComponent {
   @Input() note: INote;
}