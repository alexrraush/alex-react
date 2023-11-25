import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFecht"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"



function ItemListContainer() {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ]   = useState(true)
  const{cid} = useParams()
    useEffect(()=>{
      if(cid){
        mFetch() 
        .then(resultado => setProducts(resultado.filter(product => product.categoria === cid)))
        .catch(error=> console.log(error))
        .finally(()=> setLoading(false))
      }else{
        mFetch() 
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
    </>
    
  )
}

export default ItemListContainer