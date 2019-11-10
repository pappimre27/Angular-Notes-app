import { Component, OnInit } from '@angular/core';
import { INote, Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  protected notes: INote[];

  public constructor(private noteService: NoteService) {}

  public ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  protected onSelect(note: INote): void {
    this.noteService.setFormNote(note);
  }

  protected onDelete(note: INote): void {
    if (confirm('Are you sure?')) {
      this.noteService.deleteNote(note.id);
    }
  }
}
