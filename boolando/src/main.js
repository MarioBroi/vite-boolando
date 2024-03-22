import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

createApp(App).mount('#app')

const products = [
    {
        name: `relaxed fit tee unisex`,
        brad: `Levi's`,
        imageMain: '/img/1.webp',
        imageHover: '/img/1b.webp',
        newPrice: '14,99€',
        oldPrice: '29.99€',
        discount: '-50%',
        eco: 'sostenibilitá',
        favourite: false
    },
    {
        name: `roses tee`,
        brad: `Guess`,
        imageMain: '/img/2.webp',
        imageHover: '/img/2b.webp',
        newPrice: '20,99€',
        oldPrice: '29.99€',
        discount: '-30%',
        favourite: false
    },
    {
        name: `voglia di colori pastello`,
        brad: `Come Zucchero Filato`,
        imageMain: '/img/3.webp',
        imageHover: '/img/3b.webp',
        newPrice: '129,99',
        oldPrice: '184.99€',
        discount: '-30%',
        favourite: false
    },
    {
        name: `tee unisex`,
        brad: `Levi's`,
        imageMain: '/img/4.webp',
        imageHover: '/img/4b.webp',
        newPrice: '14,99€',
        oldPrice: '29.99€',
        discount: '-50%',
        eco: 'sostenibilitá',
        favourite: false
    },
    {
        name: `stripe bodice`,
        brad: `Maya Deluxe`,
        imageMain: '/img/5.webp',
        imageHover: '/img/5b.webp',
        newPrice: '99,99€€',
        favourite: false
    },
    {
        name: `maglione - black`,
        brad: `Esprit`,
        imageMain: '/img/6.webp',
        imageHover: '/img/6b.webp',
        newPrice: '29,99€€',
        eco: 'sostenibilitá',
        favourite: false
    },

]

console.log(products);