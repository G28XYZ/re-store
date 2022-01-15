export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservice",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://datavizblog.files.wordpress.com/2018/12/7814c4d694109f9da6d411ad86f7867e.jpg",
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 45,
      coverImage:
        "https://datavizblog.files.wordpress.com/2018/12/7814c4d694109f9da6d411ad86f7867e.jpg",
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(this.data);
        reject(new Error("Some error"));
      }, 1000);
    });
  }
}
