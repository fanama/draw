export interface IPen{
    color:string
    setColor:(color:string)=>IPen
}

export function createPen():IPen{
    return{
        color:"",
        setColor:function(color:string){
            this.color=color
            return this
        }
    }
}