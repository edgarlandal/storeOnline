import axios from "axios";

class DataService {
  catalog = [
    {
      title: "Orange",
      category: "Fruit",
      price: 12.99,
      src: "./img/products/orange.png",
      _id: "1",
    },
    {
      title: "Banana",
      category: "Fruit",
      price: 29.99,
      src: "./img/products/banana.png",
      _id: "2",
    },
    {
      title: "Apple",
      category: "Fruit",
      price: 25.99,
      src: "./img/products/apple.png",
      _id: "3",
    },
    {
      title: "Carrot",
      category: "Vegetable",
      price: 15.99,
      src: "./img/products/carrot.png",
      _id: "4",
    },

    {
      title: "Tomato",
      category: "Fruit",
      price: 10.99,
      src: "./img/products/tomato.png",
      _id: "5",
    },
    {
      title: "Onion",
      category: "Vegetable",
      price: 12.99,
      src: "./img/products/onion.png",
      _id: "6",
    },
  ];
  urlAPI = "http://127.0.0.1:5000";

  async getProducts() {
    const response = await axios.get(this.urlAPI + "/api/products");
    return response.data;
  }

  async getProductsByCat(caty) {
    const response = await axios.get(
      this.urlAPI + "/api/products/category/" + caty
    );
    return response.data;
  }

  async getCategories() {
    const response = await axios.get(this.urlAPI + "/api/categories");
    return response.data;
  }

  async setProduct(prod) {
    const response = await axios.post(this.urlAPI + "/api/products", prod);
    return response;
  }
}

export default DataService;
