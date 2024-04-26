export default function ToggleRead({email, toggleRead}){
  return(
    <div className="select">
      <input
        className="select-checkbox"
        type="checkbox"
        checked={email.read}
        onChange={() => toggleRead(email)}
      />
    </div>
  )
}