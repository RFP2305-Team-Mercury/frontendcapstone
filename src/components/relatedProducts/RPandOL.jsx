import Carousel from './Carousel.jsx'
import {useSelector} from 'react-redux'
const RPandOL = () => {
  let product = useSelector(state=>state.productId)
  return
  (<>
    <h1>Product#:{product}</h1>
    <Carousel type="outfit" />
    <Carousel type="related" />
  </>
  )
}

export default RPandOL