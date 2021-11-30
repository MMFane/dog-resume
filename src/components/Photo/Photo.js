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
  clipAngle,
  clipLeft,
  clipRight,
  clipTop,
  clipBottom,
}) {
  return (
    <div className="photo-container">
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
      <div
        className="paperclip"
        style={{
          top: clipTop,
          left: clipLeft,
          right: clipRight,
          bottom: clipBottom,
          transform: `rotate(${clipAngle}deg)`,
        }}
      ></div>
    </div>
  );
}
