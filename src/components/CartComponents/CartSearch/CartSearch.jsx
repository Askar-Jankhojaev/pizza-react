import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {handleSearch}  from '../../../store/cartSlice/cartslice'
import './cartSearch.scss'

const CartSearch = () => {
    const dispatch = useDispatch()
    const [searchCart, setSearchCart] = useState("")
    const searchInputCart = (e) => {
        setSearchCart(e.target.value)
        dispatch(handleSearch(e.target.value))
    }

  return (
    <div className='cart-search'>
            <input
                type="search"
                value={searchCart}
                onChange={searchInputCart}
                placeholder="Izlew"
            />
        </div>
  )
}

export default CartSearch