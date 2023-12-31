import {Bodies} from "matter-js";
import {blocks} from "../pages/play/setting.ts";

export const createBlock = (index: number, x:number, y:number, isStatic:boolean=false) => {
    const block = blocks[index]
    const circle = Bodies.circle(x, y, block.size/2, {
        isStatic,
        label: String(index),
        render: {
            fillStyle: block.color,
            lineWidth:4,
            strokeStyle:'#000000'
        }
    })
    return circle
}
