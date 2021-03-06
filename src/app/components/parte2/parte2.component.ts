import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {
  registered = false;
  submitted = false;
  client_id: string;
  fechaactual:string;
   ClienteModel;
  ID: string;
  Usuario: string;
  Contrasena: string;
  Nombre : string;
  Apellidos : string;
  Correo_Electronico : string;
  Edad : string;
  Estatura : string;
  Peso : string;
  IMC : string;
  GEB : string;
  ETA : string;
  list: any;
  dat : any;
  constructor( private servclient: ClientserviceService, private http: HttpClient, private routes: Router )
  {
   
  }

  ngOnInit() {
    
  }
  
  save() {
      var nday = new Date().getDate()
      var month = new Date().getMonth();
      var año = new Date().getFullYear();
      this.fechaactual =  nday + '-' + [month+1]+ '-'+ año; 
          
     const data = {
      id: this.ID,
      User: this.Usuario,
      pass: this.Contrasena,
      nombre: this.Nombre,
      apellido: this.Apellidos,
      correo: this.Correo_Electronico,
      edad: this.Edad,
      estatura: this.Estatura,
      peso: this.Peso,
      IMC: this.IMC,
      geb: this.GEB,
      eta: this.ETA,
      fecha_new: this.fechaactual,
      fecha_actu: this.fechaactual
    }; 
    console.log(data)

     this.servclient.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }); 
  }

  new() {
    this.submitted = false;
  
  }
  getdata(){
    
  }



}
 
 