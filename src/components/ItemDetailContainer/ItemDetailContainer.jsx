import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { mFetch } from "../../helpers/mFecht"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        mFetch(pid)
            .then(resultado => setProduct(resultado))
            .catch(error => console.log(error))
    }, [])

    const onAdd = cant => {
        console.log('Cantidad Seleccionada:', cant)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.url} alt="" className="img-fluid" />
            </div>
            <div className="col-6 text-center mt-5">
                <p>Nombre: {product.name}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Precio: {product.precio}</p>
                <ItemCounter initial={1} stock={2} onAdd={onAdd} />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" className="form-control" id="telefono" name="telefono" />
                    </div>
                    <button type="submit" className="btn btn-primary">Terminar compra</button>
                </form>
            </div>
        </div>
    )
}
