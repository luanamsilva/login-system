export default function LoginCard({title, label, children}) {


  return (
  
      <div className="bg-blue-500 m-auto w-1/2 rounded flex items-center justify-center" >
 
<form className='flex flex-col gap-4'>
  <h2>{title}</h2>
  <div className='flex flex-col gap-2'>
 {children}
   </div>
</form>
  </div>
  
  )
}