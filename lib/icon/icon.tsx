import React from "react";
import './importIcons.js' // import all svg
import './icon.scss'
import classes from "../helper/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...restProps}) => {
  return (
    <svg className={classes('grit-ui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon