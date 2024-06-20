import Button from './Button'
import img from '../assets/Illustration-3.png'
import Details from './Details'
function DesignSec() {
  return (
    <div className='designSec p-4'>
    <div className='container'>
    <div className='row'>
    <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
        <img className='d-none d-md-block' width="100%" style={{objectFit:"contain"}} src={img} alt='img'/>
    </div>
    <div className='col-12 col-md-6'>
    <Details Mode="dark">
        <p>Free resume design templates</p>
        <p>
        By following these design tips,
         you can create a professional and effective resume that will help you stand out to recruiters and hiring managers.
         </p>
         <Button type="secondary dark">Create an Account</Button>
     </Details>
  </div>

</div>
</div>
    </div>
  )
}

export default DesignSec
