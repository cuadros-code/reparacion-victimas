import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";

import styles from './styles/IconButtons.module.css'

type Icon = 'google'  | 
            'facebook'| 
            'twitter' | 
            'github'

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon: Icon;
}

const IconButton = ({ children, icon, ...rest }: IconButtonProps) => {

  const RenderIcon = () => {
    switch (icon) {
      case 'google':
        return <FcGoogle size={20} />
      case 'facebook':
        return <IoLogoFacebook size={20} color="#3b5998"/>
      default:  return <FcGoogle />  
    }
  }
  
  return (
    <button className={styles.iconButton} {...rest} >
      <RenderIcon /> {children}
    </button>
  )
}

export default IconButton
