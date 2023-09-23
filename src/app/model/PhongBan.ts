export class PhongBan{
  private _id:number;
  private _TenPB:string;

  constructor(id: number, TenPB: string) {
    this._id = id;
    this._TenPB = TenPB;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get TenPB(): string {
    return this._TenPB;
  }

  set TenPB(value: string) {
    this._TenPB = value;
  }
}
