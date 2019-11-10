import { Component, OnInit } from '@angular/core';
import { INote, Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public notes: INote[];
  public selectedNote: INote;
  public loaded = false;

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

  public onSelect(note: INote): void {
    this.noteService.setFormNote(note);
    this.selectedNote = note;
  }

  public onDelete(note: INote): void {
    if (confirm('Are you sure?')) {
      this.noteService.deleteNote(note.id);
    }
  }
}
