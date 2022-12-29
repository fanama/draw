import style from './style.module.scss'
import classNames from 'classnames'
import { ICell } from '../../domain/Cell'

interface Prop {
    cell:ICell,
    onClick?:()=>void
}

export function Cell({cell,onClick=()=>{}}:Prop){

    const dynamicStyle = {
        [style.active]:cell.active
    }

    

    return <div className={classNames(style.cell,dynamicStyle)} style={{backgroundColor:cell.color}} onClick={onClick}  ></div>
}