import React from "react";
import { Skeleton } from "antd";
import "./skeleton.scss";
import LogoPizza from '../../assets/imgPizzaSItems/pizza.png'

const SkeletonLoading = () => {
  return (
    <div className="skeleton-items">
      {Array(10)
        .fill()
        .map((_, index) => {
          return (
            <div key={index} className="skeleton-item">
              <Skeleton.Image key={index} />
              <Skeleton active />
            </div>
          );
        })}
    </div>
  );
};

export default SkeletonLoading;
