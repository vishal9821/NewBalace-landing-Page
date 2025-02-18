import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {Nbshoes1,Nbshoes2,Nbshoes3,shoe1,shoe2,shoe3,shoe4,customer1,customer2} from '../assets/images';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: Nbshoes1,
        bigShoe: Nbshoes1,
    },
    {
        thumbnail: Nbshoes2,
        bigShoe: Nbshoes2,
    },
    {
        thumbnail: Nbshoes3,
        bigShoe: Nbshoes3,
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
        name: "NB Age of Discovery",
        price: "₹1,689",
        rating: "4.5"
    },
    {
        imgURL: shoe3,
        name: "NB FuelCell Rebel v4",
        price: "₹12,070",
        rating: "4.8"
    },
    {
        imgURL: shoe2,
        name: "New Balance 9060",
        price: "₹1,699",
        rating: "4.6"
    },
    {
        imgURL: shoe4,
        name: "NB Fresh Foam X Cruz v3",
        price: "₹7,749",
        rating: "4.7"
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
        imgURL: customer2,
        customerName: 'Abhinav Singh',
        rating: 4.4,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer1,
        customerName: 'Kartikey Pundhir',
        rating: 4.7,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Age Of Discovery", link: "/" },
            { name: "Fuelcell Rebel v4", link: "/" },
            { name: "New Balance 9060", link: "/" },
            { name: "NB Fresh Foam X Cruz v3", link: "/" }
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
            { name: "customer@NewBalance.com", link: "mailto:Vishalaagwani05@gmail.com" },
            { name: "+91 8588913407", link: "https://wa.me/918588913407" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];