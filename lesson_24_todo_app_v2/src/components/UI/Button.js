import styles from './Button.module.css'
/**
 *
 * @param onCLick - event handler
 * @param children - elements inside Button (like icon)
 * @param title - text when mouse hovered on Button
 * @param isDisable - tp hide or not Button
 */

function Button({onCLick, children, title, isDisable = false}) {
    return (
      <button className={styles.button}
              onClick={onCLick}
              title={title}
              disabled={isDisable}
      >
          {children}
      </button>
    );
}

export default Button;