const classes = (...names:(string | undefined)[] )=> {
  return names.filter(Boolean).join(' ')
}

export default classes
  
interface ClassToggles {
  [Key: string]: Boolean
}

function scopedClassMaker(prefix:string){
  return (name?: string | ClassToggles, options?:{ extra?: string }) => {
    let result = ''
    if(typeof name === 'string'){
      result = [prefix, name].filter(Boolean).join('-')
    }else if(typeof name === 'object'){
      result = Object.entries(name).filter(m => m[1]).map(k => k[0]).map(
        v => [prefix, v].filter(Boolean).join('-')
      ).join(' ')
    }

    if(options?.extra){
      return `${result} ${options.extra}`
    }else{
      return result
    }
  }
}

export {scopedClassMaker}