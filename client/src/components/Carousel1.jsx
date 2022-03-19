import React, { Component } from "react";
import Slider from "react-slick";

const foodList = [
  {
    image: "https://gdurl.com/zqD2",
    name: "Mattar Paneer",
  },
  {
    image: "https://gdurl.com/Xa2U",
    name: "Pav Bhaji",
  },
  {
    image: "https://gdurl.com/7Uf7P",
    name: "Biryani",
  },
  {
    image: "https://gdurl.com/foc1",
    name: "Aloo Paratha",
  },
  {
    image: "https://gdurl.com/zqD2",
    name: "Mattar Paneer",
  },
  {
    image: "https://gdurl.com/Xa2U",
    name: "Pav Bhaji",
  },
  {
    image: "https://gdurl.com/7Uf7P",
    name: "Biryani",
  },
  {
    image: "https://gdurl.com/foc1",
    name: "Aloo Paratha",
  },
  {
    image: "https://gdurl.com/zqD2",
    name: "Mattar Paneer",
  },
  {
    image: "https://gdurl.com/Xa2U",
    name: "Pav Bhaji",
  },
  {
    image: "https://gdurl.com/7Uf7P",
    name: "Biryani",
  },
  {
    image: "https://gdurl.com/foc1",
    name: "Aloo Paratha",
  },
];

export default class Resizable extends Component {
  state = {
    display: true,
    width: 500,
  };
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div
        style={{
          width: "500px",
        }}>
        <Slider {...settings}>
          {foodList.map((food) => {
            return (
              <div className="w-44 h-44  bg-amber-600 rounded-xl overflow-hidden relative">
                <div>
                  <img
                    className="absolute bottom-10 h-44"
                    src={food.image}
                    alt={food.name}
                  />
                </div>
                <p className="absolute top-36 left-2 text-base font-bold">
                  {food.name}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
