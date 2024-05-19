/**
* InputForm
*@params{*}props
*@returns   
*/
export const InputForm = (props) => {
    /* props */
    const [inputValue,handleChangeValue,handleKeyDown,placeholder] = props;

    return (
        <input 
            type= "text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChangeValue}
            onKeyDown={handleKeyDown}
        />
    );
};