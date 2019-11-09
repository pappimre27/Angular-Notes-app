import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NotesComponent } from './components/notes/notes.component';

import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoteFormComponent,
    NotesComponent
  ],
  imports: [BrowserModule],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
