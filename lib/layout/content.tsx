import React from "react";
import { scopedClassMaker } from "../helper/classes";

const scopedClass = scopedClassMaker('gui-layout')
const sc = scopedClass

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Content:React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props

  return(
    <div className={sc('content', {extra: className})} {...rest}>
    </div>
  )
}

export default Content
