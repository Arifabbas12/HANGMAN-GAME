
function TextInput({type="text",lable,placeholder="Enter your input here",onChangeHandler}){
   return (
    <lable>
        <span className="bg-grey-500">{lable}</span>
        <input
            type={type}
            className="px-4 py-2 border border-grey-500 rounded-md w-full"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </lable>
   );
}

export default TextInput;