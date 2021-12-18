import { ReactNode } from "react"
import styles from './styles/Buttons.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const PrimaryButton = ( props: ButtonProps ) => {
  return (
    <button
      className={styles.primary_button}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default PrimaryButton
