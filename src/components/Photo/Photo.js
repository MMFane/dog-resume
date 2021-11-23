import "./Photo.css";

export default function Photo({
  width,
  height,
  angle,
  top,
  bottom,
  left,
  right,
  image,
}) {
  return (
    <div
      className="photo"
      style={{
        width: width,
        height: height,
        transform: `rotate(${angle}deg)`,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}
