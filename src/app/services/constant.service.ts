import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  public coworkers = [
    {
      name: 'Astrid Milena Huerfano Copete',
      msg: ''
    },
    {
      name: 'Edwin Alexander Olmos Valero',
      msg: 'Jefecito muchas gracias por todo en general, por ser un gran compañero y amigo, ayudandome y proporcionandome buenos consejos que me ayudaron, '
    },
    {
      name: 'Yulieth Carolina Ardila Fandiño',
      msg: 'Carito'
    },
    {
      name: 'Fabian Augusto Garzon Uscateguie',
      msg: 'Carito'
    },
    {
      name: 'Rafael Antonio Sifontes Chacon',
      msg: 'Carito'
    },
    {
      name: 'William Stiven Caicedo Carballido',
      msg: 'Carito'
    },
    {
      name: 'Guillermo Enrique Sandoval Ortega',
      msg: 'Carito'
    },
    {
      name: 'Wilber Eduardo Fuentes Camacho',
      msg: 'Carito'
    },
    {
      name: 'Angela Tatiana Rojas Rios',
      msg: 'Carito'
    },
  ]

  public social_networks = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/juan-jose-quintero-reatiga-65258a139', title: 'Perfil de LinkedIn'},
    { name: 'whatsapp-square', url: 'https://wa.me/573124107245', title: 'WhatsApp Personal - Principal'},
    { name: 'whatsapp-square', url: 'https://wa.me/573123513362', title: 'WhatsApp Personal - Secundario'},
  ]

}
