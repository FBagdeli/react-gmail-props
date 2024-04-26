import ToggleStar from "./ToggleStar"
import ToggleRead from "./ToogleRead"
import EmailSender from "./EmailSender"
import EmailTitle from "./EmailTitle"
export default function Email({email , toggleRead, toggleStar }){
  return (
    <li
      className={`email ${email.read ? 'read' : 'unread'}`}
    >
      <ToggleRead email = {email} toggleRead = {toggleRead} />
      <ToggleStar email = {email} toggleStar = {toggleStar} />
      <EmailSender email = {email}/>
      <EmailTitle email={ email}/>
    </li>
  )
}
