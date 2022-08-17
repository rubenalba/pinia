import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    evenOrOdd: (state) => state.counter % 2 == 0 ? "Even": "Odd"
  },
  actions: {
    increment() {
      this.counter++
    }, 
   decrement (){

    this.counter > 0 ? this.counter-- : this.counter;
   }
  }
})
