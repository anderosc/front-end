import { useParams } from "react-router-dom"
import productsFile from "../../data/products.json"

function SingleProduct() {
  const {index} = useParams();
  const found = productsFile[Number(index)];

  if(found === undefined){
    return <div> Product Not Found</div>
  }

  return (
    <div>
                <div>Title:{found.title}</div>
                <div>Price: {found.price}$</div>
                <div>Description:{found.description}</div>
                <div>Category:{found.category}</div>
                <div><img style={{ width: '120px', height: '90px' }}  src={found.image} alt="" /></div>
                <div>Raiting Rate:{found.rating.rate}</div>
                <div> Raiting Count:{found.rating.count}</div>
      
    </div>
  )
}

export default SingleProduct