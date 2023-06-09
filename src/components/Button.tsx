export default function Button({children, ...props}) {
  return (
    <main>
      <div className="bg-white border-gray-300 rounded-lg mt-3 p-2 ">
     
<button {...props}>{children}</button>
  </div>
    </main>
  )
}