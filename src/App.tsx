import { useState } from "react"
import EmailForm from "./components/EmailForm"
import ThankYouPage from "./components/ThankYouPage"

function App() {
  const [isSubmited, setIsSubmited] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <main className="bg-white flex p-8 max-w-[1440px] rounded-2xl">
      {isSubmited ? (
        <ThankYouPage setIsSubmited={setIsSubmited} email={email} />
      ) : (
        <>
          <EmailForm
            setEmail={setEmail}
            setIsSubmited={setIsSubmited}
          />
          <img src="/illustration-sign-up-desktop.svg" alt="main-image" />
        </>
      )}
    </main>
  )
}

export default App
