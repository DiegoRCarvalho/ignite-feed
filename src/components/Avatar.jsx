/* eslint-disable jsx-a11y/alt-text */
import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
