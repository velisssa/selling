import {v4 as uuidv4} from 'uuid';

export const products = [
    {
        id: uuidv4(),
        name: "product 1",
        description: "product 1 descriprion",
        price: "100",
        image: "https://kdvir.com.ua/images/blog/new_year2.jpg",
        coordinates: [50.4501, 30.5234],
    },
    {
        id: uuidv4(),
        name: "product 2",
        description: "product 2 descriprion",
        price: "200",
        image: "https://lviv1256.com/wp-content/uploads/2020/06/174691005_2809768469334443_9017259295088506484_n.jpg",
        coordinates: [49.647381,23.85102],
    },
    {
        id: uuidv4(),
        name: "product 3",
        description: "product 3 descriprion",
        price: "300",
        image: "https://dovkola.media/wp-content/uploads/2023/09/333435858.jpeg",
        coordinates: [48.18381,36.214264],
    },
    {
        id: 4,
        name: "product 4",
        description: "product 4 descriprion",
        price: "400",
        image: "https://d17916g5ax9y2r.cloudfront.net/public/uploads/article/image_attachment/file/590/sm_8becdf9a4d97ab763ca94bffd7effeab.jpg",
        coordinates: [49.808232,23.958572],
    }
]

export const position = [48.60, 31.00]; // Coordinates for center

export const defaultProductImage = "https://excelautomationinc.com/wp-content/uploads/2021/07/No-Photo-Available.jpg";