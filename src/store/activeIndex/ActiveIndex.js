import { create } from "zustand"

const ActiveIndex = create ((set)=>({
    activeIndex:0,
    setActiveIndex:(index)=>set({activeIndex:index})
})) 

export default ActiveIndex