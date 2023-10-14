import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <div>
        <img src={props.currentPreviewImage} alt="img" />
        {/* <p>
          {currentHour}:{currentMinute}
        </p> */}
        {/* <div className={classes.heartRate}>
          <i className="fa-solid fa-heart-pulse"></i>
          <p>78</p>
        </div> */}
        {props.showHeartBeat ? (
          <div className={classes.heartRate}>
            <i className="fa-solid fa-heart-pulse"></i>
            <p>78</p>
          </div>
        ) : (
          <p className={classes.time}>
            {currentHour}:{currentMinute}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
