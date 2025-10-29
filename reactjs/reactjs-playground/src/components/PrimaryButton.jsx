function PrimaryButton(props){
    return(
        <button className="cursor-pointer px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg">
            {props.buttonText}
        </button>
    )
}

export default PrimaryButton;