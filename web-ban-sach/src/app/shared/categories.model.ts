export class Category{
    public _id: string;
    public name: string;
    public cateID: string;

    constructor(_id: string,cateID: string, name: string){
        this._id = _id;
        this.name = name;
        this.cateID = cateID;
    }
}


