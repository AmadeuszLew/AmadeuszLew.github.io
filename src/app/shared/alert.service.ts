import Swal, {SweetAlertIcon} from 'sweetalert2'

export class AlertsService{
    riseAlert(icon:SweetAlertIcon,title:string):void{
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        icon: icon,
        title: title,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      }).fire()
    }
  }
