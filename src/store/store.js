import create from 'zustand'

export const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  nuts: {
    name: 'Bears',
    country: 'Russia'
  },
  changeNuts: () => set({ nuts: {name: 'Bearers'} })
}))