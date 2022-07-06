import { Icon } from "../index";
import React, { ReactElement, ReactNode } from "react";
import './dialog.scss'
import { scopedClassMaker } from "../helper/classes";
import ReactDOM from "react-dom";

interface Props {
  visible: boolean;
  buttons?: ReactElement[];
  onClose: () => void;
  maskClosable?: boolean;
}


const scopedClass = scopedClassMaker('gui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, children, buttons, onClose, maskClosable } = props

  const result = visible && <>
    <div className={sc('mask')} onClick={(e) => maskClosable && onClose()} />
    <div className={sc()}>
      <div className={sc('close')} onClick={onClose}>
        <Icon name="close" />
      </div>
      <header className={sc('header')}>提示</header>
      <main className={sc('main')}>
        {children}
      </main>
      {buttons && buttons.length > 0 && <footer className={sc('footer')}>
        {buttons?.map((btn, index) => React.cloneElement(btn, { key: index }))}
      </footer>}
    </div>
  </>

  return (ReactDOM.createPortal(result, document.body))
}


Dialog.defaultProps = { // 指定组件默认 props 的一种方式
  maskClosable: false
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = <Dialog
    visible
    onClose={() => {
      close()
      afterClose?.()
    }}
    buttons={buttons}
  >{content}</Dialog>

  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)

  return close
}

const alert = (content:string) => {
  const button = <button onClick={() => close()}>OK</button>
  const close = modal(content, [button])
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close()
    yes?.()
  }
  const onNo = () => {
    close()
    no?.()
  }

  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]

  const close = modal(content, buttons, no)
}




export { alert, confirm, modal }
export default Dialog