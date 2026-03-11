import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";


export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <FeaturedProducts />
        </>
    );
}