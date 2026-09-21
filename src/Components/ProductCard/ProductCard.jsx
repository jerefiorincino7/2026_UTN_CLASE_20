function ProductCard(propiedades) {
    const product = {
        title: "mensaje",
        price: 0,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae architecto ad. Dolor cumque obcaecati sequi, harum odit eligendi blanditiis voluptate culpa atque quae quibusdam numquam quo, commodi unde ullam!"
    }
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>Precio: ${product.price} ARS</div>
            <button>Comprar</button>
            <hr />
        </div>
    )
}
export default ProductCard