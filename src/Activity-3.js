import { useEffect, useState } from "react";

export default function Products () {
    var [tbody, setTbody] = useState([]);   
    var thead = ["Product title","Category","Price","Rating"].map((a,k1) => <th key={k1}>{a}</th>);
    var products = require("./products.json");
    var allProducts = products.map((product) => {
        var [title,category,price] = [product["title"],product["category"],product["price"]];
        var rating = product["rating"]["rate"];
        var row = [title,category,price,rating];
        return row;
    })

    useEffect(() => {
        var products = require("./products.json");
        var allProducts = products.map((product) => {
            var [title,category,price] = [product["title"],product["category"],product["price"]];
            var rating = product["rating"]["rate"];
            var row = [title,category,price,rating];
            return row;
        })
        setTbody(allProducts);
    },[])

    var filterTitle = (e) => {
        var fil = allProducts.filter((a) => a[0].toLowerCase().startsWith(e.target.value))
        setTbody(fil)
    }

    var filterCategory = (e) => {
        var filC = allProducts.filter((a) => a[1].toLowerCase().startsWith(e.target.value))
        setTbody(filC)     
    }

    return (
        <>
        <input onChange={filterTitle} placeholder="Enter Title"></input>
        <input onChange={filterCategory} placeholder="Enter Category"></input>
            <table>
                <thead><tr>{thead}</tr></thead>
                <tbody>
                    {
                        tbody.map((product,k2) => {
                            var row = product.map((a,k3) => <td key={k3}>{a}</td>);
                            return <tr key={k2}>{row}</tr>;
                        })
                    }
                </tbody>
            </table>
        </>
    )
}