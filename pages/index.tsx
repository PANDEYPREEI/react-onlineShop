import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import carouselImage from "../assets/images/carouselImage.png";
import { useEffect, useRef, useState } from "react";
import { Products } from "../core/productModel";

interface IProps {
  products: Products[];
}

function Home({ products }: IProps) {
  let initialIndex = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const featuredProducts = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    "https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg",
    "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  ];

  // useEffect(() => {
  //   // startSlider();
  // })

  // // const startSlider = () => {
  // //   setInterval(() => {
  // //     handleOnNextClick();
  // //   }, 5000);
  // // }

  const handleOnNextClick = () => {
    initialIndex = (currentIndex==(featuredProducts.length-1)) ? 0 : (currentIndex + 1)  
    setCurrentIndex(initialIndex);
  };

  const handleOnPrevClick = () => {
    initialIndex = (currentIndex==0) ? 0 :  (currentIndex - 1)  
    setCurrentIndex(initialIndex);
  }

  return (
    <><div  className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        {/* <Image src={featuredProducts[currentIndex]} alt={""} className="w-full" /> */}
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3  flex justify-between items-center">
        <button onClick={handleOnPrevClick}>Previous</button>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </div><div className="grid grid-cols-3 gap-4">
        {products.map((product: Products) => (
          <div key={product.id}>
            <div>{product.category}</div>
            <div>
              <p
                style={{ fontFamily: "sans-serif" }}
                className="leading-10 w-10 text-3xl"
              >
                {product.title}
              </p>
              <p className="text-slate-500 font-medium">
                {product.description}
              </p>
            </div>
            <div>
              <Image
                src={product.image}
                width={34}
                height={34}
                alt={"Shop Clothes , Trendy Clothes , Trending"} />
            </div>
          </div>
        ))}
      </div></>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default Home;
