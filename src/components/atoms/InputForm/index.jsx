/**
 * InputForm
 * 
 * @package components
 */
import styles from "./style.module.css";
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
            className={styles.input}
            type= "text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChangeValue}
            onKeyDown={handleKeyDown}
        />
    );
};
