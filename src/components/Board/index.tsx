import { CSSProperties, useCallback, useEffect, useRef, useState } from "react"
import { createBoard } from "../../domain/Board"
import { createPen } from "../../domain/Pen"
import {  InputColor } from "../../UI/Input"
import { InputMode } from "../../UI/Input/Mode"
import { Slider } from "../../UI/Silider"
import { Cell } from "../Cell"

import style from './style.module.scss'

export function Board(){

    const [rows,setRows]=useState<number>(10)
    const [cols,setCols]=useState<number>(10)
    const [mode,setMode]=useState<number>(1)


    const [board,setBoard]=useState(createBoard(rows,cols))

    const updateCell =useCallback((x:number,y:number)=>{

        switch(mode){
            case 1:
                setBoard({...board.move(x,y)})

                break;
            case 3:
                setBoard({...board.fillLine(x,y)})

                break;
            case 2:
                setBoard({...board.fillColumn(x,y)})
                break;
            case 4:
                setBoard({...board.fill()})
                break;
            default:
                console.log("no mode")
        }

    },[mode])

    const updatePen =(color:string)=>{
        setBoard({...board.setColor(color)})
    }

    useEffect(()=>{
        setBoard(createBoard(rows,cols,createPen()))
    },[rows,cols])

    const grid={
        display:"grid",
        gridTemplateRows:`repeat(${rows}, minmax(0, 1fr))`,
        gridTemplateColumns:`repeat(${cols}, minmax(0, 1fr))`
    }as CSSProperties

    return<div>
        <div className={style.sliders}  >
        <InputColor value={board.pen.color} setValue={updatePen} />
        <Slider value={cols} setValue={setCols} />
        <Slider value={rows} setValue={setRows} />
        <InputMode value={mode} setValue={setMode} />
        </div>
            

         <div className={style.Board} style={grid} >
        {board.cells.map((row,x)=>{
            return row.map((col,y)=><Cell key={`${x}:${y}`} cell={col} onClick={()=>{updateCell(x,y)}} />)
        })}
    </div>
    </div>
}