function OneTile(props) {
  let source = "/img/" + props.source;
  let link = `<a href="${props.link}" target="_blank" rel="noopener noreferrer"><img src="${source}" alt="${props.alt}" /></a>`;

  return link;
}

export default OneTile;
