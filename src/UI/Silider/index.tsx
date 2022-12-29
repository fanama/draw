interface Props{
    value:number,
    setValue:(value:number)=>void
}

export function Slider({value,setValue}:Props){
    return<div className="flex flex-row justify-between" >
        <input type="range" value={value}  onChange={e=>setValue(parseInt(e.target.value))} min={1} max={100} /> <input type="number" value={value}  onChange={e=>setValue(parseInt(e.target.value))} />
        </div>
}