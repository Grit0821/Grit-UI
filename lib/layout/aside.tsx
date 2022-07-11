import React from "react";
import { scopedClassMaker } from "../helper/classes";

const scopedClass = scopedClassMaker('gui-layout')
const sc = scopedClass

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Aside:React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return(
    <div className={sc('aside', {extra: className})} {...rest}>
    </div>
  )
}

export default Aside
