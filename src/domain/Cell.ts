export interface ICell{
    x:number,
    y:number,
    active:boolean,
    color:string,
    selected:boolean,
    activate:()=>ICell,
    setX:(x:number)=>ICell,
    setY:(y:number)=>ICell,
    setColor:(x:string)=>ICell,

    deactivate:()=>ICell,
}

export function createCell(x:number=0,y:number=0):ICell{
    return {
        x,
        y,
        active:false,
        color:"",
        selected:false,
        activate:function(){
            this.active=true 
            return this
        },
        deactivate:function(){
            this.active=false 
            return this
        },
        setX:function(x:number){
            this.x=x
            return this
        },
        setY:function(y:number){
            this.y=y
            return this
        },
        setColor:function(color:string){
            this.color=color
            return this
        }

    }
}