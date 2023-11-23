
const EmailForm = () => {
    return (
        <form className="text-[#36384e] py-14 px-12 max-w-[470px]">
            <h1 className="text-[#242742] mb-8 text-6xl font-bold">Stay updated!</h1>
            <p className="mb-6">Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="mb-10">
                <li className="flex items-center gap-4 mb-3"><img src="icon-list.svg" alt="list-icon" /><p>Product discovery and building what matters</p></li>
                <li className="flex items-center gap-4 mb-3"><img src="icon-list.svg" alt="list-icon" /><p>Measuring to ensure updates are a success</p></li>
                <li className="flex items-center gap-4"><img src="icon-list.svg" alt="list-icon" /><p>And much more!</p></li>
            </ul>
            <p className="text-sm font-semibold mb-1">Email address</p>
            <input
                className="border py-3 px-5 w-full rounded-md"
                type="email"
                required
            />
            <button
              className="w-full py-3 px-5 rounded-md mt-5 text-white
              bg-gradient-to-r from-[#ff527b] to-[#ff7f49]
              drop-shadow-[0_12px_12px_rgba(255,82,123,0.5)]
              "  
            >
                Subscribe to monthly newsletter
            </button>
        </form>
    )
}

export default EmailForm
