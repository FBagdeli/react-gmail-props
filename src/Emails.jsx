import Email from "./email"

export default function Emails( { filteredEmails, toggleRead , toggleStar} ){

  return (
    <main className="emails">
        <ul>
          {filteredEmails.map((email) => {
            return(
              <Email email = {email} key = {email.id} toggleRead = {toggleRead} toggleStar = {toggleStar}/>
            )
          })}
        </ul>
      </main>
  )
}