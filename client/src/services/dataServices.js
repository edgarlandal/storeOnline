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

  getProducts = () => {
    return this.catalog;
  };

  setProduct = (prod) => {
    this.catalog.push(prod);
  };
}

export default DataService;
