export class Book{
    public _id: string
    public name: string;
    public productID: string;
    public price: number;
    public description: string;
    public imgPath: string;
    public cateID: string;

    constructor(_id: string, name: string, productID: string, price: number, description: string, imgPath: string, cateID: string){
        this._id = _id;
        this.name = name;
        this.productID = productID;
        this.price = price;
        this.description = description;
        this.imgPath = imgPath;
        this.cateID = cateID;
    }
}