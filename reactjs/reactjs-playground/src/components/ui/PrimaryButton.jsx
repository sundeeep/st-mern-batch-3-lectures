function PrimaryButton(props){
    const {children, onSmash} = props;
    console.log("Primary Button")
    return(
        <button onClick={onSmash} className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-2 py-1 rounded-lg">
            {children}
        </button>
    )

}

export default PrimaryButton;