import { createCell, ICell } from "./Cell"
import { createPen, IPen } from "./Pen"

interface IBoard {
    cells:ICell[][],
    pen:IPen,
    move:(x:number,y:number)=>IBoard,
    setColor:(color:string)=>IBoard,
    fill:()=>IBoard,
    fillLine:(x:number,y:number)=>IBoard,
    fillColumn:(x:number,y:number)=>IBoard


}

function initCells(colNumber:number,rowNumber:number){
    const cells: ICell[][] = []


    for (let x = 0; x <colNumber; x++) {
        const row:ICell[] = []

        for (let y = 0; y <rowNumber; y++) {
            const r=createCell()
            
            row.push(r)
        }
        cells.push(row)
    }

    return cells
}

export function getBoardParams():string[]{
    const board=createBoard()

    const res:string[] = []

    for (const key in board) {
        res.push(key)
    }

    return res
}

export function createBoard(colNumber:number=3,rowNumber:number=3,pen:IPen=createPen()):IBoard{


    return {
        cells:initCells(colNumber,rowNumber),
        pen,
        
        move:function (x:number,y:number){
            let cell = this.cells[x][y]


            if(cell.active && !pen.color){
                cell.deactivate()
            }else{
                cell.activate()
                cell.setColor(this.pen.color)
            }




            return this
        },
        setColor:function(color:string){
            this.pen = this.pen.setColor(color)
            return this
        },
        fillLine:function(x:number,y:number){

            this.cells.forEach(col=>{
                const row=col[y]
                row.setColor(this.pen.color)
            })

            return this
        },
        fillColumn:function(x:number,y:number){
            const row = this.cells[x]

            row.forEach(r=>{
                r.setColor(this.pen.color)
            })

            return this
        },
        fill:function(){

            this.cells.forEach(col=>{
                col.forEach(row=>{
                    row.setColor(this.pen.color)

                })
            })

            return this
        }

    }
    
}