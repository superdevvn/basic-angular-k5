import {Person } from './../interface/Person';

export class Student implements Person{
    fullName: string;
    firstName: string;
    lastName: string;
    middleInitial: string;
    constructor(fullName : string, firstName: string, lastName: string, middleInitial: string){
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
    }
}