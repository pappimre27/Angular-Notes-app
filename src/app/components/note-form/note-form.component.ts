import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  public id: string;
  public text: string;
  public date: any;

  public constructor(private noteService: NoteService) {}

  public ngOnInit() {
    this.noteService.getSelectedNote().subscribe(note => {
      if (note.id !== null) {
        this.id = note.id;
        this.text = note.text;
        this.date = note.date;
      }
    });
  }
}
