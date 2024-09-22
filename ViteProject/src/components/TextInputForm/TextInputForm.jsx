import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}){
    
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
              <TextInput
              type={inputType}
                lable="Enter a word or a pharase"
                placeholder="Enter a word or a pharase here"
                onChangeHandler={handleTextInputChange}
              />
            </div>

            <div>
                
                <Button
                styleType="warning"
                text={inputType==="password" ? "show" : "hide"}
                onClickHandler={handleShowHideClick}

                />
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;