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
  protected selectedNote: INote;
  protected loaded = false;

  public constructor(private noteService: NoteService) {}

  public ngOnInit() {
    this.noteService.getStateClear().subscribe(clear => {
      if (clear) {
        this.selectedNote = { id: '', text: '', date: '' };
      }
    });
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      this.loaded = true;
    });
  }

  protected onSelect(note: INote): void {
    this.noteService.setFormNote(note);
    this.selectedNote = note;
  }

  protected onDelete(note: INote): void {
    if (confirm('Are you sure?')) {
      this.noteService.deleteNote(note.id);
    }
  }
}
