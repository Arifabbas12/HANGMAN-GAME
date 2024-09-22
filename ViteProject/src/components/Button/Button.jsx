import getStyleButton from "./GetButtonStyle"
function Button({text,onClickHandler,styleType="primary",type="Buttton"}){
    console.log(text); // object
    
   
    return (
        <button
        onClick={onClickHandler}
        type={type}
        // style={{'backgroundColor':'blue','color':'white'}}-inline css you can add
        className={`text-white bg-blue-800 m-4 p-3 ${getStyleButton(styleType)} rounded-md border-blue-800 shadow-md shadow-slate-800 translate-y-1 skew-y-3 hover:rotate-6  `}
        >
            {text}
        </button>
    );
}
export default Button;