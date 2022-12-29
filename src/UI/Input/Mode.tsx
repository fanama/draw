import { useRef } from "react";
import { getBoardParams } from "../../domain/Board";

interface Props{
    value:number,
    setValue:(value:number)=>void
}

export function InputMode({value,setValue}:Props){
const boardParams = getBoardParams().filter(val=>val.startsWith('fill')||val.startsWith('move'))
    const options = boardParams.map((param,i)=>{
        return {index:i+1,param}
    });


    const inputRef = useRef<HTMLSelectElement>(null)


    const validateColor = ()=>{
        const color = parseInt(inputRef.current?.value||'')
        setValue(color)
    }

    return <select ref={inputRef} defaultValue={value}  onChange={validateColor} >
    {options.map(option=><option key={option.param} value={option.index} >{option.index}:{option.param}</option>)}
</select>
}