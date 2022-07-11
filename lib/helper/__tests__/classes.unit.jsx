import classes from '../classes'
import {scopedClassMaker} from '../classes'

describe('classes', () => {
  it('接受 1 个 className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受 2 个 className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受 undefined 结果不会出现 undefined', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受 0 个 className', () => {
    const result = classes()
    expect(result).toEqual('')
  })
})

describe('scopedClassMaker', () => {
  it('接收字符串或者对象以及 extra', () => {
    const sc = scopedClassMaker('gui-layout')
    expect(sc('')).toEqual('gui-layout')
    expect(sc('x')).toEqual('gui-layout-x')
    expect(sc({y: true, z: false})).toEqual('gui-layout-y')
    expect(sc({y: true, z: true})).toEqual('gui-layout-y gui-layout-z')
    expect(sc({y: true, z: true}, {extra: 'hi'})).toEqual('gui-layout-y gui-layout-z hi')
  })
})