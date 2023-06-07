export default function LoginCard({title, label, children}) {


  return (
    <main>
      <div className="bg-blue-500 m-auto w-1/2 h-40 rounded-lg" >
 
<form action="">
  <h2>{title}</h2>
  {label}
 {children}
</form>
  </div>
    </main>
  )
}