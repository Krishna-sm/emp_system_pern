import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

interface SweetAlertProps {
            title:string
            text:string
            icon:'warning'| 'error'| 'success'| 'info' | 'question'
}
export const SweetAlert = (props:SweetAlertProps) => {
    MySwal.fire({
        // confirmButtonText:'done',
        showConfirmButton:false, 
        showCloseButton:true, 
        confirmButtonColor:'#1e293b',
        color:'#e0e0e0',
        title:props.title,
        text:props.text,
        icon:props.icon,
        background:'#0f172a',
        
    })
}
 