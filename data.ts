import { Customer } from "./customer";
import { User } from "./user";

export let identity:string[]=[
    "Passport", "Driving license","Aadhar Card"];
export let loanTypes:string[]=[
    "Home","Vehicle","Education","Marriage","Hospitalization"];

export let customers:Customer[]=[
        new Customer('Shalini','shalini@gmail.com',identity[0],3874323.332,'shalini',true,'Mumbai'),
        new Customer('Kshitij','kshitij@gmail.com',identity[1],121212121.332,'shalini',true,'Delhi'),
        new Customer('Rohini','rohini@gmail.com',identity[0],3434343434.332,'shalini',false,'Pune'),
        new Customer('Tej','tej@gmail.com',identity[2],6766767.332,'shalini',true,'Chennai')
    ];

export let users:User[]=[
    new User('kshitij@gmail.com','kshitij'),
    new User('shalini@gmail.com','shalini'),
    new User('rohini@gmail.com','rohini'),
    new User('tej@gmail.com','tej'),
];
