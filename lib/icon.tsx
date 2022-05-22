import React from "react";
import './importIcons' // import all svg
import './icon.scss'
import classes from "./helper/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...restProps}) => {
  return (
    <svg className={classes('grit-ui', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon