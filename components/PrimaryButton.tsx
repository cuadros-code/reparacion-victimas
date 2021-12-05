import { ReactNode } from "react"
import styles from './styles/Buttons.module.css'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const PrimaryButton = ( props: ButtonProps ) => {

  const { children, onClick } = props;

  return (
    <button
      className={styles.primary_button}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
