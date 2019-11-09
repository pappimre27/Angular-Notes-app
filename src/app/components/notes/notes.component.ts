import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public notes: Note[];

  public constructor(private noteService: NoteService) {}

  public ngOnInit() {
    this.notes = this.noteService.getNotes();
  }
}
