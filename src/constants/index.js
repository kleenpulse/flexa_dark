import { facebook, instagram, shieldTick, support, truckFast, X } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, shoe1, shoe2, shoe3, shoe4, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe1,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe2,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe3,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Claire Brown',
        rating: 4.1,
        feedback: "Talk about a delightful surprise! The level of meticulous detail and sheer quality that this product boasts completely shattered my expectations. I'm not just impressed – I'm genuinely floored."
    },
    {
        imgURL: customer2,
        customerName: 'Martin Doings',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer3,
        customerName: 'Lota Mongeskar',
        rating: 4.7,
        feedback: "Prepare to be dazzled! This product's exquisite attention to detail and premium quality completely swept me off my feet. Exceeded my expectations in every way. "
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Customer service", link: "mailto:skyeparagon@gmail.com" },
            { name: "Tel: +234 811 634 2888", link: "tel:+2348116342888" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://fb.com" },
    { src: X, alt: "X logo", link: "https://x.com" },
    { src: instagram, alt: "instagram logo", link: "https://instagram.com/" },
]