export class User {
    _id:string;
    fullName:string;
    email:string;
    password:string;
    constructor(_id:string, fullName:string,email:string, passsword:string){
        this._id=_id,
        this.fullName=fullName,
        this.email=email,
        this.password=passsword
    };
}
