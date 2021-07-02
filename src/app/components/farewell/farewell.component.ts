import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantService } from 'src/app/services/constant.service';
import { AlertService } from 'src/app/services/messages/alert.service';

@Component({
  selector: 'app-farewell',
  templateUrl: './farewell.component.html'
})
export class FarewellComponent implements OnInit {

  public forms: FormGroup;
  public socialNetworks;

  constructor(
    private formBuilder: FormBuilder,
    private constant: ConstantService,
    private message: AlertService
  ) { }

  ngOnInit(): void {
    this.createForms();
    this.socialNetworks = this.constant.social_networks;
  }
  
  get nameValid(){
    let validatorField = this.forms.get('name');
    return validatorField.invalid && validatorField.touched;
  }

  createForms(){
    this.forms = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public openURL(url: string) {
    window.open(url, "_blank")
  }

  public searchName() {
    if (this.forms.invalid) {
      return Object.values( this.forms.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
      //console.log(this.forms.value.name)
      let similitud = {}
      let similitudMsg = {}
      this.constant.coworkers.forEach( item => {
        let allNames: any[] = this.forms.value.name.split(" ");
        allNames.forEach( nameInto => {
          if (nameInto) {
            if (item.name.toLowerCase().indexOf(nameInto.toLowerCase()) != -1) {
              if (similitud[item.name.toLowerCase()] !== undefined) {
                similitud[item.name.toLowerCase()] += 1
                similitudMsg[item.name.toLowerCase()] = item.msg
              } else {
                similitud[item.name.toLowerCase()] = 1
                similitudMsg[item.name.toLowerCase()] = item.msg
              }
            }
          }
        });
      });
      let keys = Object.keys(similitud);
      let result = []
      keys.forEach( item => {
        if (Object.keys(result).length === 0) {
          result.push(item);
          result.push(similitud[item])
        } else {
          if (result[0] != item) {
            if (result[1] < similitud[item]) {
              result = []
              result.push(item);
              result.push(similitud[item])
            } else if (result[1] == similitud[item]) {
              result.push(item);
              result.push(similitud[item])
            }
          }
        }
      })
      if (result.length >= 4) {
        this.message.warnMessage('Varias Coincidencias', 'Por Favor Proporcionar Nombres y Apellidos para Mayor Similitud.')
      } else if (result.length == 0) {
        this.message.errorMessage('No se Encontraron Datos', 'La Informacion Ingresada no Coincide con la Base de Datos.')
      } else if (result.length == 2) {
        this.message.mixinSuccesMessage('Un Gran Compañero Encontrado!!!')
        this.message.customMessage(similitudMsg[result[0]])
      }
    }
  }

}
