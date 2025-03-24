"use client";
import { Header } from "@/components";
import { ListProduct, NotFound } from "@/modules";
import { Product } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import products from "../../mock/product.json";
export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams?.get("query") || "";
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (query.trim() !== "") {
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [query]);
    return (
        <div className="bg-cloud">
            <div className="bg-white">
                <Header />
            </div>
            {filteredProducts.length > 0 ? (<div>có</div>): (<NotFound keyword={query} />)}
            
            <ListProduct />
        </div>
    );
}
