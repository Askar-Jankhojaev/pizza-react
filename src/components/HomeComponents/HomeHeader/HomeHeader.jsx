import HomeCategories from "./HomeCategories/HomeCategories";
import HomeSort from "./HomeSort/HomeSort";
import { useSelector } from "react-redux";
import "./homeHeader.scss";
import ErrorPage from "../../../pages/ErrorPage/ErrorPage";
import HomeSearch from "./HomeSearch/HomeSearch";

const HomeHeader = () => {
  const { productsError } = useSelector((state) => state.productsSlice);

  return (
    <div className="home-header">
      {productsError ? (<ErrorPage />) : 
      (
        <>
          <HomeCategories />
          <HomeSearch />
          <HomeSort />
        </>
      )}
    </div>
  );
};

export default HomeHeader;
