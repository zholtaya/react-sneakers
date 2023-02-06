import image from '../assets/banner.png';

const SLIDES = [
    {
        id: 1,
        background: "#F4EFE9",
        url: image,
        text: "New Shoes",
        button: {
            url: "/",
            text: "Приобрести"
        }
    },
    {
        id: 2,
        background: "#FFF",
        url: "https://nike-off.ru/wp-content/uploads/2021/09/nike-air-force-1-low-07-what-the-NY-CT3610_100-3-scaled.jpg",
        text: "Nike Air Force 1",
        button: {
            url: "/",
            text: "Купить"
        }
    },
    {
        id: 3,
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        url: "https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/adidas-terrex-cc-boat-sport-shoe-on-green-background-product-shot-michael-dechev.jpg",
        text: "Adidas Terrex",
        button: {
            url: "/",
            text: "Купить"
        }
    }
];

export default SLIDES;