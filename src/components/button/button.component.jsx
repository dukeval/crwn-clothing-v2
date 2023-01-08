import './button.style.scss';

const BUTTON_OPTION_CLASSES ={
    google:'google-sign-in',
    inverted: 'inverted'
}

const Button =({children, buttonStyleType, ...otherProps})=>{
    return(
        <button className={`button-container ${BUTTON_OPTION_CLASSES[buttonStyleType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;