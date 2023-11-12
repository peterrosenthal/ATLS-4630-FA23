function printArray(array) {
  let returnValue = '';
  array.forEach(element => returnValue += element);
  return returnValue;
}

export function NavBar(props) {
  const mappedLinks = props.links.map((link) => {
    return `<li><a href="${link}">${link}</a></li>`;
  });
  return `
    <div>
      <span>${props.title}</span>
      <ul>
        ${printArray(mappedLinks)}
      </ul>
    </div>
  `;
}
