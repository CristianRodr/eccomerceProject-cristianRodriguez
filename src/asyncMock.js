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
        name: "Casco Kov Rush",
        price: 950,
        category: "Kov",
        img: "https://s2r.mx/wp-content/uploads/2022/07/Diseno-sin-titulo-52.jpg",
        stock: 19,
        description: "CASCO KOV RUSH BRAINY AZUL - S2R Experience"
    },
    {
        id: "3",
        name: "Bex Helmets",
        price: 300,
        category: "Bex",
        img: "https://http2.mlstatic.com/casco-para-motos-D_NQ_NP_980011-MLC20455651090_102015-F.jpg",
        stock: 10,
        description: "Casco para moto Bex Helmets Bx105"
    },
    {
        id: "4",
        name: "Shark Raw Kubrik",
        price: 700,
        category: "Cafe Racer",
        img: "https://http2.mlstatic.com/casco-para-moto-shark-raw-D_NQ_NP_683021-MLM20700076226_052016-F.jpg",
        stock: 15,
        description: "Casco para moto Shark raw"
    },
    {
        id: "5",
        name: "Kov Rush Rosa",
        price: 300,
        category: "Kov",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26O3lq21BNtI_7cS_Orba7DUnBW_w3pQ0SQ&usqp=CAU",
        stock: 10,
        description: "Casco Kov Rosa Fibra Carbono Abatible"
    },
    {
        id: "6",
        name: "Stealth Zapata Rojo",
        price: 950,
        category: "Kov",
        img: "https://cdn.shopify.com/s/files/1/0097/1053/4713/products/zapatarojo3.png?v=1616468791",
        stock: 19,
        description: "nuevo chasis KOV Stealth con certificado DOT"
    },
    {
        id: "7",
        name: "Bex Arai",
        price: 1000,
        category: "Bex",
        img: "https://http2.mlstatic.com/D_NQ_NP_706867-MCO44866947526_022021-O.webp",
        stock: 12,
        description: "Casco De Moto Color Amarillo-negro-rojo Talla S Marca Arai"
    },
    {
        id: "8",
        name: "Jet Chopper Harley",
        price: 2000,
        category: "Cafe Racer",
        img: "https://http2.mlstatic.com/D_NQ_NP_837687-CBT50940738546_072022-O.jpg",
        stock: 10,
        description: "Casco 3/4 Piel Cafe Racer Jet Chopper Harley Rocket Vintage"
    },

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