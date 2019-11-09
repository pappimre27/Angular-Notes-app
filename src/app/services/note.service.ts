import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[];

  private noteSource = new BehaviorSubject<Note>({
    id: null,
    text: null,
    date: null
  });

  private selectedNote = this.noteSource.asObservable();

  public constructor() {
    this.notes = [
      { id: '1', text: 'lorem ipsum', date: new Date('2019/11/11 12:50:20') },
      { id: '2', text: 'lorem ipsum2', date: new Date('2018/11/11 12:10:25') },
      { id: '3', text: 'lorem ipsum3', date: new Date('2017/04/11 07:10:33') }
    ];
  }

  public getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  public setFormNote(note: Note): void {
    this.noteSource.next(note);
  }

  public getSelectedNote(): Observable<Note> {
    return this.selectedNote;
  }
}
