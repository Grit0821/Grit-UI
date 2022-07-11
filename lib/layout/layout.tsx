import { scopedClassMaker } from "../helper/classes";
import React, { ReactElement } from "react";
import './layout.scss'
import Aside from "./aside";

const scopedClass = scopedClassMaker('gui-layout')
const sc = scopedClass

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  const children = props.children as Array<ReactElement>
  const hasAside = !!children.length &&
  children.some(node => node.type === Aside) // reduce 万能钥匙，可以实现some
  // children.reduce((res, node) =>res || node.type === Aside, false)
  return (
    <div className={sc({'': true, hasAside}, { extra: className })} {...rest}>
    </div>
  )
}

export default Layout
