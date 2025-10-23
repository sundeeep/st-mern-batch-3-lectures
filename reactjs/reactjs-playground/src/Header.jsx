import PrimaryButton from "./PrimaryButton";

function Header(){
    return(
        <header className="border-b-2 border-red px-4 py-2 flex items-center justify-between">
            <div>
                <img className="rounded-xl object-contain h-[60px]" src="https://media.licdn.com/dms/image/v2/D4D0BAQG64ykoB_cF4Q/company-logo_200_200/B4DZZOATdPGwAI-/0/1745065425306/stumagz_logo?e=1762992000&v=beta&t=VIn2QabU6c2qzu4LSiH3EcmhgtmxV4m70EvDjdxcRcg" alt="" />
            </div>

            <nav className="flex items-center justify-center">
                <ul className="flex items-center gap-6">
                    <li className="font-medium text-lg text-black hover:text-blue-500 hover:underline hover:cursor-pointer">Home</li>
                    <li className="font-medium text-lg text-black hover:text-blue-500 hover:underline hover:cursor-pointer">About</li>
                    <li className="font-medium text-lg text-black hover:text-blue-500 hover:underline hover:cursor-pointer">Contact Us</li>
                </ul>
            </nav>

            <div className="flex items-center gap-3">
                <PrimaryButton sunny={"sunny"} buttonText={"Register"}/>
                <PrimaryButton buttonText={"Login"}/>
            </div>
        </header>
    )
}

export default Header;