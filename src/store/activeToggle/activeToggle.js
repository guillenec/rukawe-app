import { create } from 'zustand'

const ActiveToggle = create((set) => ({
  isOpen: false,
  setIsOpen: (valor) => set({ isOpen: valor })
}))

export default ActiveToggle