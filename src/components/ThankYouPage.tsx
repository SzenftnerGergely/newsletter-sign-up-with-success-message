import { Dispatch, SetStateAction } from "react"

type Props = {
    setIsSubmited: Dispatch<SetStateAction<boolean>>
    email: string
}

const ThankYouPage = ({ setIsSubmited, email }: Props) => {
    return (
        <div className="max-w-md p-8 text-[#36384e] h-screen sm:h-full flex flex-col justify-between sm:flex-none">
            <div className="flex flex-col mt-32 sm:mt-0 sm:flex-none">
                <img src="icon-success.svg" alt="icon" className="mb-12 max-w-fit" />
                <h1 className="text-[#242742] mb-8 text-5xl sm:text-6xl font-bold">Thanks for subscribing!</h1>
                <p className="mb-4 font-medium">A confirmation email has been sent to <span className="font-semibold text-[#242742]">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <button
                className="w-full py-3 px-5 rounded-md mt-5 text-white
              bg-gradient-to-r from-[#ff527b] to-[#ff7f49]
              drop-shadow-[0_12px_12px_rgba(255,82,123,0.5)]
              hover:from-[#242742]  hover:to-[#242742] 
              hover:drop-shadow-none active:scale-95 transition-all"
                onClick={() => setIsSubmited(false)}
            >
                Dismiss message
            </button>
        </div>
    )
}

export default ThankYouPage
