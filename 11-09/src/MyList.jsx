export default function MyList() {
  const items = [
    { name: 'Item 1', number: 0 },
    { name: 'Item 2', number: 1 },
    { name: 'Item 3', number: 2 },
    { name: 'Item 4', number: 3 },
  ];
  const mappedItems = items.map(item => 
    <li key={item.number}>{item.name}</li>
  );
  return (
    <ul>{mappedItems}</ul>
  );
}