const products = [ 
    {id: '1', name: 'rastrillo', categoria: 'implementos', precio: 5000000, stock: 1,url:'../src/assets/img/rastrillo.webp'},
    {id: '2', name: 'tractor john deere', categoria: 'tractores', precio: 5000000, stock: 1,url:'../src/assets/img/tractor.webp'},
    {id: '3', name: 'cosechadora', categoria: 'implementos', precio: 8000000, stock: 2,url:'../src/assets/img/cosechadora.avif'},
    {id: '4', name: 'pala frontal', categoria: 'implementos', precio: 2000000, stock: 2,url:'../src/assets/img/pala frontal.webp'}
]

export const mFetch = (id) =>{
    return new Promise((res)=>{  
        setTimeout(()=>{
            res(id ? products.find(prod=> prod.id===id):products)
        }, 1000)

    })
}