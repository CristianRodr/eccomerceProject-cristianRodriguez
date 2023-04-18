const products = [
    {
        id: "1",
        name: "Kov Kc1",
        price: 1000,
        category: "Kov",
        img: "https://http2.mlstatic.com/D_NQ_NP_730624-MLM44373719923_122020-F.jpg",
        stock: 20,
        description: "Casco Kov Kc1 Fibra Carbono Certificado Para Moto"
    },
    {
        id: "2",
        name: "Bex Helmets",
        price: 300,
        category: "Bex",
        img: "https://http2.mlstatic.com/casco-para-motos-D_NQ_NP_980011-MLC20455651090_102015-F.jpg",
        stock: 10,
        description: "Casco para moto Bex Helmets Bx105"
    },
    {
        id: "3",
        name: "Shark Raw Kubrik",
        price: 700,
        category: "Cafe Racer",
        img: "https://http2.mlstatic.com/casco-para-moto-shark-raw-D_NQ_NP_683021-MLM20700076226_052016-F.jpg",
        stock: 15,
        description: "Casco para moto Shark raw"
    }

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(products => products.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(products => products.category === categoryId))
        }, 500)
    })
}