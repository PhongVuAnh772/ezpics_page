import React, { useEffect } from "react";
import "./Category.css";
import { styled, useTheme } from "@mui/material/styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
  Outlet,
  useOutletContext,
  useNavigate,
  useParams,
} from "react-router-dom";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import crown from "./crown.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import fbicon from "./fb.png";
import messicon from "./messenger.png";
import pinterest from "./pinterest.png";
import twitter from "./twitter.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Category({
  image = "https://down-vn.img.susercontent.com/file/a262ff1f44dab967e8e7d50c7bda514d",
  pro = true,
  price = 400000,
  discount = 299000,
  date = "2023-10-09T10:13:37+07:00",
  view = "40",
  user_id = "1232",
  color = "black",
  id_cart = 18934,
}) {
  const navigate = useNavigate();
  let location = useLocation();

  const { id } = useParams();
  const network = useSelector((state) => state.network.network);
  const [userId, setUserId] = React.useState("");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
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
  const [loading, setLoading] = React.useState(true);

  const open = useOutletContext();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };
  const drawerWidth = 240;
  const [data, setData] = React.useState([]);

  const [dataCreator, setDataCreator] = React.useState([]);
  const [dataProduct, setDataProduct] = React.useState([]);
  const getData = async () => {
    if (userId) {
      setLoading(true);

      try {
        const response = await axios.post(`${network}/getInfoUserAPI`, {
          idUser: userId,
        });
        if (response && response.data) {
          setDataCreator(response.data.data);
          console.log(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    getData();
  }, [userId]);
  const getDataCategory = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${network}/getInfoProductAPI`, {
        id: id,
        // token: "mfQEi80l2anIqZk1rHUxVdKJwAcPFO1702210289"
      });
      if (response && response.data) {
        setDataProduct(response.data?.data);
        setUserId(response.data?.data?.user_id);
        console.log(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const [newids, setId] = React.useState(location.state?.id);

  useEffect(() => {
    getDataCategory();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          `${network}/getProductAllCategoryAPI`,
          {
            limit: 30,
            keyword: "",
          }
        );
        if (response && response.data && response.data.listData) {
          setData(response.data.listData[2].listData);
        } else {
          console.error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    getData();
  }, []);
  const dataTime = (date) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    return `Ngày ${day} Tháng ${month} Năm ${year}`;
  };
  const Main = styled("main")(({ theme }) => ({
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  }));
  return (
    <Main
      open={open}
      style={{
        backgroundColor: "rgb(245, 245, 245)",
        paddingTop: "7%",
        flex: 1,
        paddingRight: "5%",
        paddingLeft: "5%",
      }}
    >
      <div className="category-wrapper">
        <div className="category-wrapper__block">
          {/* <img
            src={dataProduct.image}
            alt=""
            className="category-wrapper__block---image"
          /> */}
          {loading ? (
            <Skeleton
              style={{
                minHeight: "400px",
                width: "80%",
                alignSelf: "center",
                marginLeft: "5%",
                marginTop: "6%",
              }}
            />
          ) : (
            <div className="category-wrapper__block---image----container">
              <img
                src={dataProduct.image}
                alt=""
                className="category-wrapper__block---image"
              />
            </div>
          )}
          {loading ? (
            <></>
          ) : (
            <div className="category-wrapper__block---bottom-image">
              <div className="category-wrapper__block---sharing">
                <p className="category-wrapper__block---title----price-----information------desc--------creator------name">
                  Chia sẻ:
                </p>
                <img
                  className="category-wrapper__block---title----price-----information------desc--------creator------avatar"
                  style={{ marginLeft: 10 }}
                  alt=""
                  src={fbicon}
                />
                <img
                  className="category-wrapper__block---title----price-----information------desc--------creator------avatar"
                  style={{ marginLeft: 10 }}
                  alt=""
                  src={twitter}
                />
                <img
                  className="category-wrapper__block---title----price-----information------desc--------creator------avatar"
                  style={{ marginLeft: 10 }}
                  alt=""
                  src={messicon}
                />
                <img
                  className="category-wrapper__block---title----price-----information------desc--------creator------avatar"
                  style={{ marginLeft: 10 }}
                  alt=""
                  src={pinterest}
                />
              </div>
              {/* <div></div> */}
              <div
                className="category-wrapper__block---sharing---secondary"
                // style={{ backgroundColor: "rgb(255, 66, 78)", color: "white",width: "40%" }}
              >
                <div
                  className="category-wrapper__block---sharing---secondary-----block"
                  // style={{ backgroundColor: "rgb(255, 66, 78)", color: "white",width: "40%" }}
                >
                  <FavoriteBorderOutlinedIcon
                    style={{ color: "rgb(255, 66, 78)" }}
                  />
                  <p className="category-wrapper__block---title----price-----information------desc--------creator------name">
                    Đã thích (200)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="category-wrapper__block" style={{ width: "50%" }}>
          <div className="category-wrapper__block---title">
            {pro && (
              <img
                src={crown}
                className="category-wrapper__block---title----vip"
                alt=""
              />
            )}

            {loading ? (
              <Skeleton style={{ height: 30, width: 500 }} />
            ) : (
              <h1 className="category-wrapper__block---title----text">
                {dataProduct.name}
              </h1>
            )}
          </div>
          <div className="category-wrapper__block---title----price">
            {loading ? (
              <Skeleton style={{ height: 30, width: 100, marginLeft: 10 }} />
            ) : (
              <p className="category-wrapper__block---title----price-----deleted">
                ₫{formatPrice(dataProduct.price)}
              </p>
            )}
            {loading ? (
              <Skeleton style={{ height: 40, width: 150, marginLeft: 10 }} />
            ) : (
              <p className="category-wrapper__block---title----price-----newer">
                ₫{formatPrice(dataProduct.sale_price)}
              </p>
            )}

            {loading ? (
              <Skeleton style={{ height: 30, width: 100, marginLeft: 10 }} />
            ) : (
              <p className="category-wrapper__block---title----price-----discount">
                {Math.round(
                  100 - (dataProduct.sale_price / dataProduct.price) * 100
                )}
                % GIẢM
              </p>
            )}
          </div>
          {loading ? (
            <Skeleton
              style={{ height: 30, width: 200, marginLeft: 10, marginTop: 30 }}
            />
          ) : (
            <div
              className="category-wrapper__block---title----price-----information------desc"
              style={{ marginBottom: "10px", paddingTop: "10px" }}
            >
              <div className="category-wrapper__block---title----price-----information------desc--------title">
                <p className="category-wrapper__block---title----price-----information------desc--------title-------content">
                  Khuyến mãi
                </p>
              </div>
              <p
                className="category-wrapper__block---title----price-----discount"
                style={{
                  backgroundColor: "rgb(255, 245, 241)",
                  border: "1px solid rgb(255, 66, 78)",
                  color: "rgb(255, 66, 78)",
                }}
              >
                GIẢM MẠNH{" "}
                {Math.round(
                  100 - (dataProduct.sale_price / dataProduct.price) * 100
                )}
                %
              </p>
            </div>
          )}
          {loading ? (
            <Skeleton
              style={{ height: 30, width: 200, marginLeft: 10, marginTop: 30 }}
            />
          ) : (
            <div className="category-wrapper__block---title----price-----information------desc">
              <div className="category-wrapper__block---title----price-----information------desc--------title">
                <p className="category-wrapper__block---title----price-----information------desc--------title-------content">
                  Tác giả
                </p>
              </div>
              <a
                href="/author"
                className="category-wrapper__block---title----price-----information------desc--------creator"
              >
                <img
                  className="category-wrapper__block---title----price-----information------desc--------creator------avatar"
                  alt=""
                  src={dataCreator?.avatar}
                />
                <p className="category-wrapper__block---title----price-----information------desc--------creator------name">
                  {dataCreator?.name}
                </p>
              </a>
            </div>
          )}
          {loading ? (
            <Skeleton
              style={{ height: 30, width: 200, marginLeft: 10, marginTop: 30 }}
            />
          ) : (
            <div className="category-wrapper__block---title----price-----information------desc">
              <div className="category-wrapper__block---title----price-----information------desc--------title">
                <p className="category-wrapper__block---title----price-----information------desc--------title-------content">
                  Màu chủ đạo
                </p>
              </div>
              <div
                className="category-wrapper__block---title----price-----information------desc--------color-form"
                style={{ backgroundColor: `${color}` }}
              ></div>
            </div>
          )}

          {loading ? (
            <Skeleton
              style={{ height: 30, width: 200, marginLeft: 10, marginTop: 30 }}
            />
          ) : (
            <div className="category-wrapper__block---title----price-----information------desc">
              <div className="category-wrapper__block---title----price-----information------desc--------title">
                <p className="category-wrapper__block---title----price-----information------desc--------title-------content">
                  Lượt xem :
                </p>
              </div>
              <p
                // className="category-wrapper__block---title----price-----information------desc--------title-------content"
                style={{
                  color: "black",
                  padding: 0,
                  margin: 0,
                  fontWeight: "500",
                }}
              >
                {view} người
              </p>
            </div>
          )}

          {loading ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Skeleton
                style={{
                  height: 50,
                  width: 170,
                  marginLeft: 15,
                  marginTop: 30,
                }}
              />
              <Skeleton
                style={{
                  height: 50,
                  width: 170,
                  marginLeft: 15,
                  marginTop: 30,
                }}
              />
            </div>
          ) : (
            <div className="category-wrapper__block---title----buttonContainer">
              <button
                className="category-wrapper__block---title----button"
                style={{
                  backgroundColor: "rgb(255, 245, 241)",
                  border: "1px solid rgb(255, 66, 78)",
                  color: "rgb(255, 66, 78)",
                  width: "200px",
                }}
              >
                <span style={{ paddingRight: 5, alignSelf: "center" }}>
                  <FavoriteIcon />
                </span>
                Thêm vào yêu thích
              </button>
              <button
                className="category-wrapper__block---title----button"
                style={{ backgroundColor: "rgb(255, 66, 78)", color: "white" }}
              >
                Mua ngay
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="category-wrapper"
        style={{
          flexDirection: "column",
          paddingLeft: "3%",
          paddingBottom: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            paddingRight: "3%",
          }}
        >
          {loading ? (
            <Skeleton
              style={{ height: 30, width: 200, marginLeft: 10, marginTop: 30 }}
            />
          ) : (
            <p style={{ fontSize: 18, fontWeight: "bold" }}>
              Có thể bạn muốn thử
            </p>
          )}
          {loading ? (
            <Skeleton
              style={{ height: 30, width: 200, marginLeft: 10, marginTop: 30 }}
            />
          ) : (
            <a
              href="/author"
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: "15px",
                color: "rgb(255, 66, 78)",
              }}
            >
              Xem tất cả
            </a>
          )}
        </div>
        {loading ? (
          <Carousel
            swipeable={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {[...Array(4).keys()].map((index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  justifyContent: "center",
                  borderRadius: 10,
                  marginLeft: "12px",
                  marginTop: "12px",
                }}
              >
                <div
                  className="carousel-item"
                  style={{
                    position: "relative",
                    width: "80%",
                    height: 180,
                    background: "#f0f0f0",
                    justifyContent: "center",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Skeleton height={180} />
                </div>
                <div
                  style={{
                    minHeight: 70,
                    maxWidth: "100%",
                    color: "rgb(37, 38, 56)",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "17px",
                    margin: 0,
                    marginBottom: 15,
                    
                    marginTop: 10,
                  }}
                >
                  <Skeleton height={17} width="80%" />
                </div>
                <Skeleton height={15} width="100%" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "2em",
                  }}
                >
                  <Skeleton height={17} width="50%" />
                  <Skeleton height={14} width="40%" />
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          // Display actual content once data is available
          <Carousel
            swipeable={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {data.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  justifyContent: "center",
                  borderRadius: 10,
                  marginLeft: "12px",
                  cursor:"pointer",
                }}
                onClick={() => {

                navigate(`/category/${item.id}`)
                                // window.location.reload();

                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              >
                <div
                  className="carousel-item"
                  style={{
                    position: "relative",
                    width: "80%",
                    height: 180,
                    background: "#f0f0f0",
                    justifyContent: "center",
                    borderRadius: 10,
                    overflow: "hidden",
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
                <div
                  style={{
                    minHeight: 70,
                    maxWidth: "100%",
                    color: "rgb(37, 38, 56)",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "17px",
                    margin: 0,
                    marginBottom: 15,
                    marginTop: 10,
                  }}
                >
                  <h5
                    style={{
                      height: "100%",
                      maxWidth: "80%",
                      color: "rgb(37, 38, 56)",
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "17px",
                      margin: 0,
                    }}
                  >
                    {item.name}
                  </h5>
                </div>
                <p style={{ margin: 0, color: "black", fontSize: 15 }}>
                  Đã bán {item.sold}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "2em",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "rgb(238, 77, 45)",
                      fontSize: 17,
                    }}
                  >
                    {item.sale_price
                      ? formatPrice(item.sale_price)
                      : "Miễn phí"}
                    ₫
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      textDecoration: "line-through",
                      paddingLeft: "5%",
                      color: "gray",
                      fontWeight: 300,
                    }}
                  >
                    {formatPrice(item.sale_price)}₫
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>

      {loading ? (
        <div style={{display: 'flex', flexDirection: 'row',width: '100%',height: 300,backgroundColor: 'white',paddingLeft: "3%",paddingTop: '3%'}}>
          <Skeleton height={100} width={100} circle />
          <div className="user__creator---block----name-container">
            <Skeleton height={20} width={150} />
            <Skeleton height={15} width={150} />
            <Skeleton height={40} width={200} />
          </div>
          <div className="category-wrapper__block---title----other----information">
            <Skeleton height={15} width={200} />
            <Skeleton height={15} width={200} />
          </div>
          <div className="category-wrapper__block---title----other----information">
            <Skeleton height={15} width={200} />
            <Skeleton height={15} width={200} />
          </div>
          <div className="category-wrapper__block---title----other----information">
            <Skeleton height={15} width={200} />
          </div>
        </div>
      ) : (
        <div
          className="category-wrapper"
          style={{
            flexDirection: "column",
            paddingLeft: "3%",
            paddingBottom: "2%",
            marginBottom: "3%",
          }}
        >
          <p style={{ fontSize: 18, fontWeight: "bold" }}>Chi tiết tác giả</p>
          
          <div className="user__creator---block">
            <img
              className="user__creator---block----img"
              alt=""
              src={dataCreator?.avatar}
            />
            <div className="user__creator---block----name-container">
              <p className="user__creator---block----name-title">
                {dataCreator?.name}
              </p>
              <p
                className="user__creator---block----name-title"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                Email: {dataCreator?.email}
              </p>

              <button
                className="category-wrapper__block---title----button"
                style={{
                  backgroundColor: "rgb(255, 245, 241)",
                  border: "1px solid rgb(255, 66, 78)",
                  color: "rgb(255, 66, 78)",
                  width: "200px",
                  height: "40px",
                  marginTop: "10px",
                }}
              >
                <span style={{ paddingRight: 5, alignSelf: "center" }}>
                  <TravelExploreOutlinedIcon />
                </span>
                Xem tác giả
              </button>
            </div>
            <div className="category-wrapper__block---title----other----information">
              <p
                className="user__creator---block----name-title"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(255, 66, 78)",
                }}
              >
                Số lượng theo dõi:{" "}
                <span style={{ color: "black" }}>
                  {dataCreator?.quantityFollow}
                </span>
              </p>
              <p
                className="user__creator---block----name-title"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(255, 66, 78)",
                  paddingTop: "20px",
                }}
              >
                Số lượng sản phẩm:{" "}
                <span style={{ color: "black" }}>
                  {dataCreator?.quantityProduct}
                </span>
              </p>
            </div>
            <div className="category-wrapper__block---title----other----information">
              <p
                className="user__creator---block----name-title"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(255, 66, 78)",
                }}
              >
                Số lượng đã bán:{" "}
                <span style={{ color: "black" }}>
                  {dataCreator?.quantitySell}
                </span>
              </p>
              <p
                className="user__creator---block----name-title"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(255, 66, 78)",
                  paddingTop: "20px",
                }}
              >
                Số sản phẩm bán ra tiền:{" "}
                <span style={{ color: "black" }}>
                  {dataCreator?.sellingMoney}
                </span>
              </p>
            </div>
            <div className="category-wrapper__block---title----other----information">
              <p
                className="user__creator---block----name-title"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgb(255, 66, 78)",
                }}
              >
                Ngày tạo:{" "}
                <span style={{ color: "black" }}>
                  {dataTime(dataCreator?.created_at)}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="footer-wrapper"></div>
    </Main>
  );
}

export default Category;
