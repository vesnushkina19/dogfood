import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
			</div>
		)
	}
}

const emotions = [
	{smile: "=)", description:"Ыы."},
	{smile: "o_O", description:"Ого!"},
	{smile: "^_^", description:"Няя"},
	{smile: "='(", description:"Печалька"}
]

ReactDOM.render(
	<div className="wrapper">
		{/* {v1} */}
		<div className="card">=)</div>
		<div className="card">0_o</div>
		<div className="card">^_^</div>
		<div className="card">=)</div>

		{/* {v2} */}
		<Card smile="=)" text="Ыы."/>
		<Card smile="o_O" text="Ого!" />
		<Card smile="^_^" text="Няя" />
		<Card smile="='(" text="Печалька" />

		{/* {v3} */}
		{emotions.map(el => <Card smile={el.smile} text={el.description} key={el.smile}/>)}

	</div>,
	document.querySelector("#root")
)
