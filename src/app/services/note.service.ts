import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { INote, Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: INote[];

  private noteSource = new BehaviorSubject<INote>({
    id: null,
    text: null,
    date: null
  });

  private selectedNote = this.noteSource.asObservable();

  public constructor() {
    this.notes = [
      new Note('1', 'lorem ipsum', new Date('2019/11/11 12:50:20')),
      new Note('2', 'lorem ipsum2', new Date('2019/11/11 12:50:20')),
      new Note('3', 'lorem ipsum3', new Date('2019/11/11 12:50:20'))
    ];
  }

  public getNotes(): Observable<INote[]> {
    return of(this.notes);
  }

  public setFormNote(note: INote): void {
    this.noteSource.next(note);
  }

  public getSelectedNote(): Observable<INote> {
    return this.selectedNote;
  }

  public addNote(note: INote): void {
    this.notes.unshift(note);
  }

  public updateNote(updatedNote: INote): void {
    this.notes.forEach((cur, index) => {
      if (cur.id === updatedNote.id) {
        this.notes.splice(index, 1);
        this.notes.unshift(updatedNote);
      }
    });
  }

  public deleteNote(id: string): void {
    this.notes.forEach((cur, index) => {
      if (cur.id === id) {
        this.notes.splice(index, 1);
      }
    });
  }
}
