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

  private stateSource = new BehaviorSubject<boolean>(true);
  private stateClear = this.stateSource.asObservable();

  public constructor() {
    this.notes = [];
  }

  public getNotes(): Observable<INote[]> {
    this.getFromLocalStorage();
    return of(this.notes);
  }

  public setFormNote(note: INote): void {
    this.noteSource.next(note);
  }

  public getSelectedNote(): Observable<INote> {
    return this.selectedNote;
  }

  public getStateClear(): Observable<boolean> {
    return this.stateClear;
  }

  public addNote(note: INote): void {
    this.notes.unshift(note);
    this.addToLocalStorage(this.notes);
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

  public clearState() {
    this.stateSource.next(true);
  }

  private addToLocalStorage(notes: INote[]): void {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  private getFromLocalStorage(): void {
    if (localStorage.getItem('notes') === null) {
      this.notes = [];
    } else {
      const Notes = JSON.parse(localStorage.getItem('notes'));
      Notes.forEach((note: { id: string; text: string; date: any }) =>
        this.notes.push(new Note(note.id, note.text, note.date))
      );
    }
  }
}
