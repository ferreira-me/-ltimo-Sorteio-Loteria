import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px", position: "fixed", top: 0, right: 0, backgroundColor: "#fff", width: "100%" }}>
      <Link to="/mega">Mega-Sena</Link>
      <Link to="/quina">Quina</Link>
      <Link to="/time">Timemania</Link>
    </div>
  );
};

export default Menu;
