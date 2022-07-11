export class Priority{
  id: number | undefined;
  title: string | undefined;
  color: string | undefined;


  constructor(id: number | undefined, title: string | undefined, color: string | undefined) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}
