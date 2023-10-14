// import react from "react";
import classes from "./ProductDetails.module.css";
// import ProductData from "./ProductData";

const ProductDetails = (props) => {
  const colorOptions = props.data.images.map((item, pos) => (
    <img
      key={pos}
      src={item.url}
      alt={item.color}
      className={
        pos === props.currentPreviewImagePos ? classes.activeColor : ""
      }
      onClick={() => props.onColorOptionClick(pos)}
    />
  ));
  const colorName = (
    <p className={classes.features}>
      <span>Select Color : </span>
      {props.data.images[props.currentPreviewImagePos].color}
    </p>
  );
  const features = props.data.features.map((item, pos) => (
    <button
      onClick={() => props.onFeatureItemClick(pos)}
      key={pos}
      // className={pos === 0 ? classes.active : ""}
      className={pos === props.currentSelectedFeature ? classes.active : ""}
    >
      {item}
    </button>
  ));
  return (
    <div>
      {/* <h1>{ProductData.title}</h1>
      <p>{ProductData.desc}</p> */}
      <h1>{props.data.title}</h1>
      <p>{props.data.desc}</p>
      {colorName}
      <div className={classes.colorWrapper}>
        {/* <img
          src={ProductData.images.black}
          className={classes.activeColor}
          alt="img"
        />
        <img src={ProductData.images.red} alt="img" />
        <img src={ProductData.images.blue} alt="img" />
        <img src={ProductData.images.purple} alt="img" />
        <img src={ProductData.images.pink} alt="img" /> */}
        {colorOptions}
      </div>
      <p className={classes.features}>
        <span> Features </span>
      </p>
      <div className={classes.btnWrapper}>
        {features}
        {/* <button className={`${classes.timeBtn} ${classes.active}`}>Time</button>
        <button className={classes.active}>Time</button>
        <button>Heart Rate</button> */}
      </div>
      <button
        onClick={() =>
          alert(
            `Your order of ${
              props.data.images[props.currentPreviewImagePos].color
            } watch has successfully placed`
          )
        }
      >
        Buy now
      </button>
    </div>
  );
};

export default ProductDetails;
