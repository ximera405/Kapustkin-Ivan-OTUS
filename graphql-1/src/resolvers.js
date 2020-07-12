import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return users.find((user) => user.id === id);
    },
    users: (parent, args, context, info) => {
      return users;
    },

    product: (parent, { id }, context, info) => {
      return products.find((product) => product.id === id);
    },
    products: (parent, args, context, info) => {
      return users;
    },

    new: (parent, { id }, context, info) => {
      return news.find((news) => news.id === id);
    },
    news: (parent, args, context, info) => {
      return news;
    },
  },

  Mutation: {
    createUser: (parent, { id, name, email, age }, context, info) => {
      const newUser = { id, name, email, age };

      users.push(newUser);

      return newUser;
    },
    updateUser: (parent, { id, name, email, age }, context, info) => {
      let newUser = users.find((user) => user.id === id);

      newUser.name = name;
      newUser.email = email;
      newUser.age = age;

      return newUser;
    },
    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) throw new Error("User not found.");

      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    },

    createProduct: (
      parent,
      { id, price, name, description, isStock, stockPrice },
      context,
      info
    ) => {
      const newProduct = { id, price, name, description, isStock, stockPrice };

      products.push(newProduct);

      return newProduct;
    },
    updateProduct: (
      parent,
      { id, price, name, description, isStock, stockPrice },
      context,
      info
    ) => {
      let newProduct = products.find((products) => products.id === id);

      newProduct.price = price;
      newProduct.name = name;
      newProduct.description = description;
      newProduct.isStock = isStock;
      newProduct.stockPrice = stockPrice;

      return newProduct;
    },
    deleteProduct: (parent, { id }, context, info) => {
      const productIndex = products.findIndex((product) => product.id === id);

      if (productIndex === -1) throw new Error("Product not found.");

      const deletedProducts = products.splice(productIndex, 1);

      return deletedProducts[0];
    },

    createNew: (parent, { id, heading, text, subtitle }, context, info) => {
      const newNew = { id, heading, text, subtitle };

      news.push(newNew);

      return newNew;
    },
    updateNew: (
      parent,
      { id, heading, text, subtitle },
      context,
      info
    ) => {
      let newNew = news.find((news) => news.id === id);

      newNew.heading = heading;
      newNew.text = text;
      newNew.subtitle = subtitle;

      return newNew;
    },
    deleteNew: (parent, { id }, context, info) => {
      const newIndex = news.findIndex((news) => news.id === id);

      if (newIndex === -1) throw new Error("New not found.");

      const deletedNews = news.splice(newIndex, 1);

      return deletedNews[0];
    },
  },
};

export default resolvers;
