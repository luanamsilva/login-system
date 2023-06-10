export default function Button({children, ...props}) {
  return (
    <main>
      <div >
     
<button  className="bg-orange-400 hover:bg-orange-500 text-gray-600 rounded-lg px-4" {...props}>{children}</button>
  </div>
    </main>
  )
}