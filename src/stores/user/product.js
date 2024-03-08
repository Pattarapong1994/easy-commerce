import { defineStore } from 'pinia'



export const useProductStore = defineStore('product', {
  state: () => ({
    list:[{
      name:'item1',
      imageUrl:'https://fastly.picsum.photos/id/322/200/200.jpg?hmac=h5_-NQtnn86YBEwVT2_4zcSeuxpCnMAdriBcZchtfas',
      quantity:10,
      about:'test',
      status:'open',
      price: 285,
    },
    {
      name:'item2',
      imageUrl:'https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c',
      quantity:12,
      about:'test2',
      status:'open',
      price: 214,
    }]
  }),
  actions: {
    filterProducts (seachText) {
      return this.list.filter(product => product.name.includes(seachText))
    }
  }
})
