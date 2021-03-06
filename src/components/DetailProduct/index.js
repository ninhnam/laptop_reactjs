/** @format */

import {
  faCheckCircle,
  faGift,
  faMapMarkerAlt,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Grid, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import styles from "./styles";

import one from "./RightImg/1.svg";
import two from "./RightImg/2.svg";
import three from "./RightImg/3.svg";
import foure from "./RightImg/4.svg";
import five from "./RightImg/5.png";
import six from "./RightImg/6.svg";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import { toggleLogIn } from "../../actions/ui";
import { connect } from "react-redux";
import { changeUserLocal } from "../../actions/user";
import { addCart } from "../../actions/product";

function DetailProduct(props) {
  const {classes, product} = props;
  const [Name, setName] = useState("");
  const [price, setprice] = useState("");
  const [pastPrice, setpastPrice] = useState("");
  const [CPU, setCPU] = useState("");
  const [Ram, setRam] = useState("");
  const [Card, setCard] = useState("");
  const [linkImg, setlinkImg] = useState("");
  const [screen, setscreen] = useState("");
  const [memoryCompact, setmemoryCompact] = useState("");

  useEffect(() => {
    if (product !== null) {
      setName(product.name);
      setprice(product.price);
      setpastPrice(product.pastPrice);
      setCPU(product.CPU);
      setRam(product.Ram);
      setCard(product.Card);
      setlinkImg(product.linkImg);
      setscreen(product.screen);
      setmemoryCompact(product.memoryCompact);
    }
  }, [product]);

  const renderTraddemark = () => {
    if (product !== null) {
      if (product.trademark === "macbook") {
        return (
          <Link className={classes.DPnavItem} to="/macbookTradeMark">
            Macbook
          </Link>
        );
      }
      if (product.trademark === "Dell") {
        return (
          <Link className={classes.DPnavItem} to="/dellTradeMark">
            Dell
          </Link>
        );
      }
      if (product.trademark === "HP") {
        return (
          <Link className={classes.DPnavItem} to="/HPTradeMark">
            HP
          </Link>
        );
      }
      if (product.trademark === "lenovo") {
        return (
          <Link className={classes.DPnavItem} to="/thinkpadTradeMark">
            Thinkpad
          </Link>
        );
      }
    } else {
      return "";
    }
  };

  let history = useHistory();
  const payingPage = () => {
    history.push({
      pathname: "/paying",
      state: {product: product},
    });
  };

  const renderLoginPage = () => {
    props.toggleLogIn()
  }

  const addProductToCart = () => {
    let productName = product.name.replace(/\s/g, '')
    let detailUser = JSON.parse(localStorage.getItem("NinhNamUser"));
    let listCart = detailUser.cartProduct
    // console.log(productName)
    listCart = [...listCart, productName]
    detailUser.cartProduct = listCart
    let ID = detailUser.id
    let newData={
      data: detailUser,
      ID: ID,
      mess: 'add'
    }
    props.addCart(newData)
  }

  const [displaytoCartBtn, setDisplaytoCartBtn] = useState(props.isLocal);

  useEffect(() => {
    setDisplaytoCartBtn(props.isLocal);
  }, [props.isLocal]);

  return (
    <div className={classes.container}>
      <div className={classes.DPnav}>
        <span>
          <Link className={classes.DPnavItemHome} to="/">
            Trang chu??
          </Link>
        </span>
        /<span>{renderTraddemark()}</span>/
        <span className={classes.DPnavItem}>{Name}</span>
      </div>

      <Grid container spacing={4} className={classes.DPnavBot}>
        <Grid
          item
          xs={5}
          md={5}
          sm={5}
          lg={5}
          className={classes.DPnavBotTitle}
        >
          <h3 className={classes.DPnavBotTitleContent}>{Name}</h3>
        </Grid>
        <Grid
          item
          xs={5}
          md={5}
          sm={5}
          lg={5}
          className={classes.DPnavBotRight}
        >
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />
          <FontAwesomeIcon className={classes.iconF} icon={faStar} />

          <span className={classes.countStar}>5</span>
          <span className={classes.evalute}>0 ??a??nh gia??</span>
          <span className={classes.answer}>0 c??u ho??i</span>
        </Grid>
      </Grid>

      <Grid container style={{marginBottom: 50}} spacing={4}>
        <Grid xs={5} md={5} sm={5} lg={5} item>
          <div className={classes.DPITemImg}>
            <img alt="imgPR" className={classes.DPIImg} src={linkImg} />
          </div>
          <div className={classes.DPLPromotion}>
            <div className={classes.DPLPrLabel}>
              <div>
                <FontAwesomeIcon className={classes.iconGift} icon={faGift} />
              </div>
              <div>Khuy????n ma??i</div>
            </div>

            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>
                T???ng T??i x??ch th???i trang Mr.Vui or Balo Laptop tr??? gi?? 199.000??
              </div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>T???ng chu???t kh??ng d??y tr??? gi?? 119.000??</div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>T???ng T??i Ch???ng S???c tr??? gi?? 109.000??</div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>
                T???ng phi???u v??? sinh, thay keo t???n nhi???t v?? b???o d?????ng Laptop ?????nh
                k?? mi???n ph?? "20 n??m"
              </div>
            </div>
            <div className={classes.DPLPrItem}>
              <FontAwesomeIcon
                className={classes.iconCheck}
                icon={faCheckCircle}
              />
              <div>
                T???ng Voucher gi???m gi?? tr???c ti???p cho kh??ch h??ng th??n thi???t 3%
                ng??y th?????ng v?? 5% sinh nh???t
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={5} md={5} sm={5} lg={5} item>
          <Grid container className={classes.priceList}>
            <Grid
              item
              xs={2}
              md={2}
              sm={2}
              lg={2}
              className={classes.priceName}
            >
              Gia??:
            </Grid>
            <Grid item xs={4} md={4} sm={4} lg={4} className={classes.priceNum}>
              <div className={classes.price}>{price}</div>
              <div className={classes.pastPrice}>{pastPrice}</div>
            </Grid>
            <Grid item xs={2} md={2} sm={2} lg={2}>
              <span className={classes.dePercent}>-8%</span>
            </Grid>
            <Grid item xs={4} md={4} sm={4} lg={4} style={{paddingLeft: 20}}>
              <div className={classes.VAT}>(Ch??a VAT)</div>
              <div className={classes.stocking}>CO??N HA??NG</div>
            </Grid>
          </Grid>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>CPU:</span>
            {CPU} (2.40 GHz, up to 4.20 GHz with Turbo Boost, 4 Cores, 8
            Threads, 8 MB Cache)
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>RAM:</span>
            {Ram} LPDDR4X 4267MHz (Soldered)
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>??i??a c????ng:</span>
            {memoryCompact} SSD M.2 PCIe
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>Ma??n hi??nh:</span>
            {screen} IPS, anti-glare, low-power, 400 nits
          </div>
          <div className={classes.ProductDPitem}>
            <span style={{fontWeight: "bold", paddingRight: 4}}>
              Card ?????? ho??a:
            </span>
            Integrated Intel?? Iris?? Xe Graphics
          </div>

          <Button
            onClick={payingPage}
            variant="contained"
            className={classes.buyingBtn}
          >
            <div className={classes.buying}>MUA NGAY</div>
            <div className={classes.buyTitle}>
              Go??i xa??c nh????n va?? giao ha??ng t????n n??i
            </div>
          </Button>

          <Button
            variant="outlined"
            className={classes.addToCart}
            color="primary"
            disabled={!displaytoCartBtn}
            onClick={addProductToCart}
          >
            <div className={classes.addCart}>TH??M VA??O GIO?? HA??NG</div>
            <div className={classes.cartTitle}>
              Th??m va??o gio?? ha??ng ?????? mua ngay b????t c???? khi na??o
            </div>
          </Button>
          <div hidden={displaytoCartBtn} className={classes.loginRe}>????ng nh????p <span onClick={renderLoginPage} className={classes.loginReAdd}>ta??i ????y</span> ?????? th??m sa??n ph????m va??o gio?? ha??ng</div>
        </Grid>
        <Grid xs={2} md={2} sm={2} lg={2} item>
          <div className={classes.befTop}>
            <div className={classes.befTopitem}>
              <img alt="img" src={one} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                7 ng??y d??ng th??? ?????i tr??? v?? b???t k??? l?? do g??. ?????i tr??? h?? h???ng 30
                ng??y
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={two} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                B???o h??nh m??y nhanh 3H. B???o h??nh ph???n c???ng 12 Th??ng
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={three} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                B???o h??nh nhanh 3H - Kh??ng k???p m?????n m??y mang v???
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={foure} className={classes.befIconTSM} />
              <div className={classes.befItemTopContent}>
                Free Ship HCM - COD To??n Qu???c
              </div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={five} className={classes.befIconTBG} />
              <div className={classes.befItemTopContent}>?????i c?? l???y m???i</div>
            </div>
            <div className={classes.befTopitem}>
              <img alt="img" src={six} className={classes.befIconTBG} />
              <div className={classes.befItemTopContent}>
                Tr??? g??p 0% qua Visa Mastercard ho???c T??n ch???p HD SaiGon
              </div>
            </div>
          </div>

          <div className={classes.befBot}>
            <div className={classes.befBotitem}>
              <FontAwesomeIcon
                className={classes.iconRF}
                icon={faMapMarkerAlt}
              />
              <div className={classes.befItemTopContent}>
                103/16 Nguy???n H???ng ????o , ph?????ng 14, Qu???n T??n B??nh, TPHCM
              </div>
            </div>
            <div className={classes.befBotitem}>
              <FontAwesomeIcon
                className={classes.iconRF}
                icon={faMapMarkerAlt}
              />
              <div className={classes.befItemTopContent}>
                169 V?? V??n Ng??n, Ph?????ng Linh Chi???u, TP.Th??? ?????c
              </div>
            </div>
            <div className={classes.befBotitem}>
              <FontAwesomeIcon className={classes.iconRF} icon={faPhone} />
              <div className={classes.befItemTopContent}>035.9814.518</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLocal: state.isLocal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogIn: () => {
      return dispatch(toggleLogIn());
    },
    changeUserLocal: () => {
      return dispatch(changeUserLocal());
    },
    addCart: (data) => {
      return dispatch(addCart(data));
    },
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DetailProduct)
);
