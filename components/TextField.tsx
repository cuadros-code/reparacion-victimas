import styles from './styles/TextField.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const TextFiled = ( props : Props ) => {
  return (
    <div className={styles.content}>
      <strong>{props.label}</strong>
      <input className={styles.textField} {...props} />
    </div>
  )
}

export default TextFiled
