import { scopedClassMaker } from "../helper/classes";
import React from "react";

const scopedClass = scopedClassMaker('gui-layout')
const sc = scopedClass

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={sc('header', { extra: className })} {...rest}>
    </div>
  )
}

export default Header
