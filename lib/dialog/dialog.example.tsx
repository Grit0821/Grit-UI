import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from './dialog'

const DialogExample = () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)

  const openModal = () => {
    const close = modal(<h1>hello<button onClick={() => close()}>close</button></h1>)
  }

  return (
    <div>
      <div>
        <h1>example 1</h1>
        <div>
          <button onClick={() => setX(!x)}>click</button>
          <Dialog
            visible={x}
            buttons={[
              <button onClick={() => setX(false)}>1</button>,
              <button onClick={() => setX(false)}>2</button>
            ]}
            onClose={() => setX(false)}
          >
            <div>hi</div>
          </Dialog>
        </div>
      </div>
      <div>
      <h1>example 2</h1>
      <div>
        <button onClick={() => setY(!x)}>click</button>
        <Dialog
          visible={y}
          maskClosable
          buttons={[
            <button onClick={() => setY(false)}>1</button>,
            <button onClick={() => setY(false)}>2</button>
          ]}
          onClose={() => setY(false)}
        >
          <div>hi</div>
        </Dialog>
      </div>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('hello')}>alert</button>
        <button onClick={() => confirm('1', () => {console.log('yes')}, () => {console.log('no')})}>confirm</button>
      </div>
      <div>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  )
}

export default DialogExample