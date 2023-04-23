import { ImgHTMLAttributes} from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean
  // src: string
  // alt?: string
  // title?: string
  // As propriedades da tag img que já existem na classe que foi extendida não precisam ser declaradas.
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      // src={src}
      // alt={alt}
      // title={title}
      // O rest operator ...props retorna um objeto com todas as propriedades que pertencem a classe ImgHTMLAttributes e foram enviadas na chamada da função.
      {...props}
    />
  )
}
