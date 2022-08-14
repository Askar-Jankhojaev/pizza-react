import React from "react";
import { dataSort } from "./dataSort";
import { CaretDownOutlined, CaretUpFilled } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";

const HomeSort = () => {
  const sortRef = useRef();
  const [show, setShow] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.path.includes(sortRef.current)) {
        setShow(false);
      }
    });
  }, []);

  const selectSort = (index) => {
    setSelectIndex(index);
    setShow(false);
  };
  return (
    <div className="home-header__sort" ref={sortRef}>
      <div className="sort_title" onClick={() => setShow(!show)}>
        {show ? <CaretUpFilled /> : <CaretDownOutlined />}{" "}
        <span> Сортировка по: </span>
      </div>
      <div className="sort-name">{dataSort[selectIndex].name}</div>

      <ul className={show ? "sort-items show" : "sort-items "}>
        {dataSort.map((item, index) => (
          <li key={item.id} onClick={() => selectSort(index)}>
            {" "}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeSort;
