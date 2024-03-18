import { defineStore } from "pinia";

export const useAdminProductStore = defineStore("admin-product", {
  state: () => ({
    list: [
      {
        name: "test",
        image:
          "https://fastly.picsum.photos/id/1048/200/200.jpg?hmac=W94UjOBeBuqxyKnyhht4a81ruXiXHpjQxvdZtNgGyow",
        price: 175,
        quantity: 20,
        remainQuantity: 7,
        status: "Open",
        updatedAt: new Date().toISOString(),
      },
    ],
  }),
  actions: {
    getProduct(index) {
      return this.list[index];
    },
    addProduct(productData) {
      productData.remainQuantity = productData.quantity;
      productData.updatedAt = new Date().toISOString();
      this.list.push(productData);
    },
    updateProduct(index, productData) {
      this.list[index].name = productData.name;
      this.list[index].image = productData.image;
      this.list[index].price = productData.price;
      this.list[index].quantity = productData.quantity;
      this.list[index].remainQuantity = productData.quantity;
      this.list[index].status = productData.status;
      this.list[index].updatedAt = new Date().toISOString();
    },
    removeProduct(index) {
      this.list[index], splice(index, 1);
    },
  },
});
