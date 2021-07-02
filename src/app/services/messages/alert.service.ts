import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  infoLoading(Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      allowOutsideClick: false,
      text: Message,
      icon: 'info',
    });
    // Efecto de Cargando
    Swal.showLoading(); 
  }

  errorMessage(title: string, Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      title,
      text: Message,
      icon: 'error',
    });
  }

  warnMessage(title: string, Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      title,
      text: Message,
      icon: 'warning',
    });
  }

  customMessage(title: string) {
    Swal.fire({
      title,
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }

  mixinSuccesMessage(Message: string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: Message
    })
  }

  successMessage(Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      title: 'Accion Exitosa',
      text: Message,
      icon: 'success',
    });
  }

  closeLoading(){
    Swal.close();
  }
}
