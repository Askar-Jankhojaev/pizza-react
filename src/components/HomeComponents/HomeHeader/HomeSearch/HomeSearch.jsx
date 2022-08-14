import React from 'react'
import { useDispatch } from 'react-redux'
import { handleSearch } from '../../../../store/productsSlice/productsSlice'
import './homeSearch.scss'
import { Input }  from 'antd'
const HomeSearch = () => {

    const dispatch = useDispatch()
    const [removeText, setRemoveText]=React.useState(false)
    const [search, setSearch] = React.useState("")
    const searchInput = (e) => {
        setSearch(e.target.value)
        dispatch(handleSearch(e.target.value.trim()))
        //  if(search !=""){
        //    setRemoveText(true)
        //  }
    }

    const removeTextFunction = ()=>{
        setSearch("")
        dispatch(handleSearch(search))
        setRemoveText(false)
    }
   
    // else{
    //     setRemoveText(false)
    // }

    return (
        <div className='home-search'>
            {/* <Input.Search
            value={search}
            onChange={searchInput}
            placeholder="Izlew"
            /> */}
            <input
                type={'search'}
                value={search}
                onChange={searchInput}
                placeholder="Izlew"
            />
            <span 
            className={removeText ? 'remove active' : 'remove' } 
            onClick={removeTextFunction} > X </span>
        </div>
    )
}

export default HomeSearch