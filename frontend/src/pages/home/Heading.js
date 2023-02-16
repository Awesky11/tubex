const Heading = ({ title, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        cursor: onClick ? "pointer" : "",
      }}
      onClick={onClick}
    >
      <hr style={{ color: "gray", width: "35%" }}></hr>
      <span
        style={{
          color: "white",
          border: "1px solid white",
          paddingLeft: 6,
          paddingRight: 6,
        }}
      >
        {title}
      </span>
      <hr style={{ color: "gray", width: "35%" }}></hr>
    </div>
  );
};

export default Heading;
