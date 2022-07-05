import classes from "./Button.module.css";

const Button = (props) => {
  const btnClasses = `${classes.button} ${props.className}`
  return(
    <button className={btnClasses} onClick={props.onClick}>{props.title}</button>
  )
}

export default Button;