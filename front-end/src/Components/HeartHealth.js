import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({snackHealth}) {
  const arr = snackHealth ? [heartSolid, "healthy food"] : [heartOutline, "unhealthy food"]
  return (
    <>
      <img className="Heart" src={arr[0]} alt={arr[1]} />
    </>
  );
}

export default HeartHealth;
