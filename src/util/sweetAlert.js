import Swal from 'sweetalert2'

export function Alert(title,text,type,showConfirmButton=true,timer=2000){
    Swal.fire({
        title: title,
        text: text,
        type: type,
        showConfirmButton: showConfirmButton,
        timer: timer
      })
}
