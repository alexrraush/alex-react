import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { ItemCounter } from "../ItemCounter/ItemCounter"
import { mFetch } from "../../helpers/mFecht"


export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const {pid} = useParams()
    //const { pid } = useParams()
    
    //console.log(pid)
    useEffect(()=>{
        mFetch(pid)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error))
    }, [])
    
    const onAdd = cant => {
        console.log('Cantidad Seleccionada:', cant)
       }

    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.url} alt="" className="img-fluid"/>
            </div>
            <div className="col-6 text-center mt-5">

                <p>Nombre: {product.name}</p>
                <p>Category: {product.categoria}</p>
                <p>Precio: {product.precio}</p>
                <ItemCounter initial={1} stock={2} onAdd={onAdd}/>
            </div>            
        </div>
  )
}