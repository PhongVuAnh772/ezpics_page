import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ForYouPage() {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const network = useSelector((state) => state.network.value);
  const ref = useRef({});

  
  const [data, setData] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(`${network}/getTrendProductAPI`, {
          limit: 30,
        });
        if (response && response.data && response.data.listData) {
          setData(response.data.listData);
        } else {
          console.error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    getData();
  }, []);
  const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} style={{padding: 10,backgroundColor: 'red'}}><ArrowForwardIosIcon /></button>;
};

  return (
    <div style={{ paddingRight: 15, paddingTop: 15 }}>
      <p style={{ fontSize: 18, fontWeight: "bold",}}>Trend trong tuần ...</p>
      <Carousel
        swipeable={false}
        // draggable={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all 1.5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // customRightArrow={<CustomRightArrow />}
        // deviceType={this.props.deviceType}
        // itemClass="carousel-item-padding-40-px"
      >
        {data.map((item, index) => (
            <div style={{
                  position: "relative",
                  width: "100%",
                  justifyContent: "center",
                  borderRadius: 10,
                  cursor: "pointer",
                  marginLeft: "12px"

                }}>
              <div
                style={{
                  position: "relative",
                  width: "80%",
                  height: 180,
                  background: "#f0f0f0",
                  justifyContent: "center",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h5 style={{ maxHeight: 40,maxWidth: '80%' }}>{item.name}</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "2em", // Adjust the height as needed
                }}
              >
                <p style={{ margin: 0 }}>
                  {item.price ? item.price : "Miễn phí"}
                </p>
              </div>
            </div>
        ))}
      </Carousel>
      
      <p style={{ fontSize: 18, fontWeight: "bold" }}>
        Có thể bạn muốn thử ...
      </p>
      <Swiper
        spaceBetween={50}
        slidesPerView={data.length} // Đặt slidesPerView bằng số lượng phần tử trong mảng data
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 180,
                  background: "#f0f0f0",
                  justifyContent: "center",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h5 style={{ maxHeight: 40 }}>{item.name}</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "2em", // Adjust the height as needed
                }}
              >
                <p style={{ margin: 0 }}>
                  {item.price ? item.price : "Miễn phí"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ForYouPage;
