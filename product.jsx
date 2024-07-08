import React from 'react';

const products = [
    {
        id: 1,
        image: 'C:\Users\Minithra\Downloads\makeup icon.png',
        name: 'Radiant Foundation',
        description: 'A lightweight, buildable foundation that provides a natural, radiant finish.',
    },
    {
        id: 2,
        image: 'C:\Users\Minithra\Downloads\skincare.png',
        name: 'Niacinamide face serum',
        description: 'A niacinamide serum will get rid of pores,excess oil and pigmentation.',
    },
    {
        id: 3,
        image: 'C:\Users\Minithra\Downloads\hair icon.png',
        name: 'Onion Shampoo',
        description: 'Onion shampoo promotes new hair growth and minimizes hairfall.',
    },
];

const Products = () => {
    return (
        <section className="products-section">
            <div className="container">
                <h2>Our Products</h2>
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
