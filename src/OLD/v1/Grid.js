import React from "react";

function Grid(props) {
  return (
    <div className="gallery">
      {props.articles.map((article) => (
        <a
          key={article.alt}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={article.source} alt={article.alt} />
        </a>
      ))}
    </div>
  );
}

export default Grid;
