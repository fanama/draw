import { useRef } from "react"

interface Props{
    value:string,
    setValue:(value:string)=>void
}

export function InputColor({value,setValue}:Props){

    const colors = ['black','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet','white'];


    const inputRef = useRef<HTMLSelectElement>(null)

    const validateColor = ()=>{
        const color = inputRef.current?.value||''
        setValue(color)
    }


    return (
      <div className="flex flex-row gap-1">
               <select ref={inputRef} defaultValue={value} style={{ backgroundColor: value }} onChange={validateColor} >
            {colors.map(color=><option key={color} style={{backgroundColor:color}} >{color}</option>)}
        </select>
      </div>
    ); 

}