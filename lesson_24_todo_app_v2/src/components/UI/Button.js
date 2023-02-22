import style from './Button.module.css'

/**
 *
 * @param onCLick - event handler
 * @param children - elements inside Button (like icon)
 * @param title - text when mouse hovered on Button
 * @param isDisable - tp hide or not Button
 */

function Button({onCLick, children, title, isDisable = false}) {

    const changeCssClass = () => {
        return ` ${
            isDisable
                ? style.disabledButton
                : style.button
        } `
    }
    return (
      <button className={changeCssClass()}
              onClick={onCLick}
              title={title}
              disabled={isDisable}
      >
          {children}
      </button>
    );
}

export default Button;