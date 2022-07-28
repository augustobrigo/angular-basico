import {Component} from "@angular/core"
@Component({
    selector:'app-contador',
    template:`
        <h1>{{titulo}}</h1>
        <span>La base es <strong>{{base}}</strong></span>
        <button (click)="acumular(base);">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);">-{{base}}</button>   
    `
    
})
export class ContadorComponent{
    public titulo:string = 'Cambio de título';
    public numero:number=10;
    public base:number=5;
    sumar(){
  this.numero+=1;
    }
    restar(){
  this.numero-=1;
    }
    acumular(valor:number){
  this.numero+=valor;
    }
}