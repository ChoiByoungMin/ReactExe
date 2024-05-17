function Child() {
  const name = "리액트";

  const style = {
    backgroundColor: "black", // background-color
    color: "aqua",
    fontSize: "48px", // font-size
    fontWeight: "bold", // font-weight
    padding: 16,
  };

  return <div style={style}>{name}</div>;
}

export default Child;
