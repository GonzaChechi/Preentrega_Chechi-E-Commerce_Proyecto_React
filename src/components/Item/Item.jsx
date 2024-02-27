import { Counter } from "../Counter/counter";
import './Item.css'

export const Item = ({ product }) => {
    const handelOnAdd = ()=>{
        console.log("Producto añadido al carrito")
    }
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img src={product.img} alt={`Imagen de ${product.title}`} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <span className="spanPrice">{`Precio: ${product.price}`}</span>
                <p className="card-text"> {`Stock: ${product.stock}`}</p>
                <div><Counter stock={product.stock} onAdd={handelOnAdd}/></div>
                
            </div>
        </div>
    );
}

