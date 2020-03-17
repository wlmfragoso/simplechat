import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ContactSearch'
})
export class ContactSearch implements PipeTransform {

    public transform(value: any, args: string) {
        if (!value){
            return;
        }
        if (!args){
            return value;
        }
        args = args.toLowerCase();
        return value.filter( (item) =>{
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
