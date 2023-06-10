export default function LoginCard({title, label, children}) {


  return (
  
      <div className="min-h-screen flex items-center justify-center rounded" >
 
<form className='flex flex-col items-center gap-4 bg-blue-500 rounded-lg p-6 sm:w-1/2 md:w-1/3 lg:w-1/4'>
  <h2 className="text-gray-100">{title}</h2>
  {children}
 
  
</form>
  </div>
  
  )
}