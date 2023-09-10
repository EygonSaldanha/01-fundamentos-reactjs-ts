import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  console.log();
  
  return (
    <img
      className={hasBorder ? styles.avatarWithborder : styles.avatar}
      {...props}
    />
  );
}
