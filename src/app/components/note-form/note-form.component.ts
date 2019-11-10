import { Component, OnInit } from '@angular/core';
import { INote } from '../../models/note';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  protected id: string;
  protected text: string;
  protected date: any;

  protected isNew = true;

  public constructor(private noteService: NoteService) {}

  public ngOnInit() {
    this.noteService.getSelectedNote().subscribe(note => {
      if (note.id !== null) {
        // if any of the rendered notes clicked then there is no new note
        this.isNew = false;
        this.id = note.id;
        this.text = note.text;
        this.date = note.date;
      }
    });
  }

  private generateId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // tslint:disable-next-line:no-bitwise
      const r = (Math.random() * 16) | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  protected onSubmit(): void {
    console.log(this.generateId());
    // Check if new note
    if (this.isNew) {
      // new note
      this.id = this.generateId();
      const note = new Note(this.id, this.text, this.date);
      // Add note
      this.noteService.addNote(note);
    } else {
      // Create note to be updated
      const updateNote = new Note(this.id, this.text, new Date());
      this.noteService.updateNote(updateNote);
    }
  }
}
