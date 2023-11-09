import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFecht"
import { Link, useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"



function ItemListContainer({greeting ='Bienvenidos a la Tienda'}) {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ]   = useState(true)
  const{cid} = useParams()
    useEffect(()=>{
      if(cid){
        mFetch() //llamada a la API
        .then(resultado => setProducts(resultado.filter(product => product.categoria === cid)))
        .catch(error=> console.log(error))
        .finally(()=> setLoading(false))
      }else{
        mFetch() //llamada a la API
        .then(resultado => setProducts(resultado))
        .catch(error=> console.log(error))
        .finally(()=> setLoading(false))
      }
      
 }, [cid])
  

  return (
    <>
     {loading ? <h2>Cargando...</h2>
     :
      <ItemList products={products} />
     }
     {/*<ItemCounter initial={1} stock={2} onAdd={onAdd}/>*/}
    </>
    
  )
}

export default ItemListContainer