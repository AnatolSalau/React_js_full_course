import style from './Button.module.css'

/**
 *
 * @param onCLick - event handler
 * @param children - elements inside Button (like icon)
 * @param title - text when mouse hovered on Button
 * @param isDisable - tp hide or not Button
 */

function Button(props) {
    const {onClick, children, title, disabled = false} = props;
    const changeCssClass = () => {
        return ` ${
            disabled
                ? ` ${style.button} ${style.disabledButton}`
                : style.button
        } `
    }
    return (
      <button className={changeCssClass()}
              {...props}
              onClick={onClick}
              title={title}
              disabled={disabled}
      >
          {children}
      </button>
    );
}

export default Button;