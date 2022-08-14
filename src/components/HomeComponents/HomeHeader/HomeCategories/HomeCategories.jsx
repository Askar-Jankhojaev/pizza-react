import { useState } from "react";
import { dataCategories } from "./dataCategories";
import { useDispatch } from 'react-redux'
import { handleCategory } from '../../../../store/productsSlice/productsSlice'

const HomeCategories = () => {
  const dispatch = useDispatch()

  const [activeCategory, setActiveCategory] = useState(null)

  const selectCategory = (item) => {
    if (item) {
      setActiveCategory(item.categories)
      return dispatch(handleCategory(item.categories))
    }
    setActiveCategory(item)
    dispatch(handleCategory(item))

  }
  return (
    <div className="home-header__categories">
      <button
        onClick={() => selectCategory(null)}
        className={activeCategory === null ? "categori-btn active" : "categori-btn "}
      > Hammesi </button>
      {dataCategories.map((item) => (
        <button className={activeCategory === item.categories ? "categori-btn active" : "categori-btn"} onClick={() => selectCategory(item)} key={item.id}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default HomeCategories;
