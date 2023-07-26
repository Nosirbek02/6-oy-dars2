import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Hero } from "../components/hero/hero";
import { About } from "../components/about/about";
import { Feature } from "../components/feature/feature";
import { Customers } from "../components/customers/customers";
import { News } from "../components/news/news";

export const Layout =()=>{
    return (
        <>
        <header>
            <Header/>
        </header>

        <main>
            <Hero/>
            <About/>
            <Feature/>
            <Customers/>
            <News/>
        </main>

        <footer>
            <Footer/>
        </footer>
        </>
    )
}