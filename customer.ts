export class Customer{
    
    constructor(public customerName:string,
        public customerEmailId:string,
        public customerIdentity:string,
        public annualIncome:number,
        public password:string,
        public incomeTaxReturnAttached:boolean,
        public customerAddress?:string ){
    }
}
