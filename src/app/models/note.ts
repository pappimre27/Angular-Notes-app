export interface INote {
  id: string;
  text: string;
  date: any;
}

export class Note implements INote {
  // tslint:disable-next-line:variable-name
  public id: string;
  // tslint:disable-next-line:variable-name
  public text: string;
  // tslint:disable-next-line:variable-name
  public date: any;

  public constructor(id: string, text: string, date: any) {
    this.id = id;
    this.text = text;
    this.date = date;
  }

  // public get id(): string {
  //   return this._id;
  // }

  // public set id(value: string) {
  //   this._id = value;
  // }

  // public get text(): string {
  //   return this._text;
  // }

  // public set text(value: string) {
  //   this._text = value;
  // }

  // public get date(): any {
  //   return this._date;
  // }

  // public set date(value: any) {
  //   this._date = value;
  // }
}
