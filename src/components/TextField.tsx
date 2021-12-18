import { forwardRef } from 'react'
import styles from './styles/TextField.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
}

const TextField = forwardRef<HTMLInputElement, Props>(( props, ref ) => {
  return (
    <div className={styles.content}>
      <strong>{props.label}</strong>
      <input className={styles.textField} {...props} ref={ref} />
    </div>
  )
});

TextField.displayName = 'TextField'

export default TextField
