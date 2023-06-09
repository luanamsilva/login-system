export default function Button({children, ...props}) {
  return (
    <main>
      <div>
     
<button {...props}>{children}</button>
  </div>
    </main>
  )
}