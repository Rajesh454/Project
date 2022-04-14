import { Collateral } from "./collateral";

export interface ResponseLoan{
    loanId?:string;
	loanType?:string;
	loanAmount?:number;
	interestRate?:number;
	period?:number;
	
	employeeId?:string;
	collaterals?:Collateral[];
	approved?:boolean;
	remarks?:string;
}
