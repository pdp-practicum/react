
import { Routes as Switch, Route, useNavigate, Navigate } from "react-router-dom";
import Cell from "./Home";
import { default as Hedr } from "./Hedr";
import About from "./About";

import "./main.css";

const Main = () => {
	console.log("Rendering Main component");
  const navigate = useNavigate();
	return (
		<div>
			<Hedr />
			<Switch>
				<Route index path="/home" element={<Cell />} />
				<Route path="/about" element={<About />} />
				<Route path="/about" element={<About />} />
				<Route path="/*" element={<Navigate to='/home' />} />
			</Switch>
		</div>
	);
};

export default Main;