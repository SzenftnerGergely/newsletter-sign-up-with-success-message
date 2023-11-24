import { useState } from "react"
import EmailForm from "./components/EmailForm"
import ThankYouPage from "./components/ThankYouPage"

function App() {
  const [isSubmited, setIsSubmited] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <main className="bg-white sm:flex sm:p-8 max-w-[1440px] rounded-2xl">
      {isSubmited ? (
        <ThankYouPage setIsSubmited={setIsSubmited} email={email} />
      ) : (
        <>
          <EmailForm
            setEmail={setEmail}
            setIsSubmited={setIsSubmited}
          />
          
        </>
      )}
    </main>
  )
}

export default App
