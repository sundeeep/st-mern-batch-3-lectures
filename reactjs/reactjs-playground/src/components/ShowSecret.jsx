import useToggle from "../hooks/useToggle";
import PrimaryButton from "./ui/PrimaryButton";

function ShowSecret(){

    const [show, toggleShow] = useToggle(false);

    return (
        <div>
            <PrimaryButton onSmash={()=>toggleShow()}>
                {
                    show ? "Hide" : "Show"
                }
            </PrimaryButton>

            {
                show && <p>This is a top-secret.</p>
            }
            
        </div>
    )
}

export default ShowSecret;