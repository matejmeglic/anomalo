import OneTile from "./OneTile";
import $ from "jquery";

function Grid(props) {
  let exportGrid = [];

  for (let i = 0; i < props.articles.length; i++) {
    exportGrid.push(OneTile(props.articles[i]));
  }

  return exportGrid;
}

export default Grid;
