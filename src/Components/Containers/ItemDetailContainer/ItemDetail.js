import React, { useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ producto }) => {
    const [isButtonpPressed, setIsButtonpPressed] = useState(false);


const onAdd = (count) => {
    setIsButtonpPressed(true);
}

    return (
    <div style={styles.container}>
        <img style={styles.img} src={producto.image} alt={producto.title} />
        <div style={styles.Infocontainer}>
            <h1>{producto.title}</h1>
            <span>${producto.price}</span>
            <p>{producto.description}</p>

            {!isButtonpPressed ? (
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
            <Link to="/cart">
                <button>Finalizar Compra</button>
            </Link>
        )}
        </div>
    </div>
);
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
},
    Infocontainer:{
        display: "flex",
        flexDirection: "column",
},
    img:{
        maxWidth: "20%"
}
};