export default function ToggleStar({email, toggleStar}){
  return (
    <div className="star">
      <input
        className="star-checkbox"
        type="checkbox"
        checked={email.starred}
        onChange={() => toggleStar(email)}
      />
    </div>
  )
}