import React from "react";
import './importIcons' // import all svg
import './icon.scss'

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="girt-ui-icon">
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon