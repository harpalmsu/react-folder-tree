export default function ListItem({ item }) {
  let children = null;
  if (item.children && item.children.length) {
    children = (
      <ul className="ul-tree">
        {item.children.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    );
  } else {
    children = (
      <div>
        <input type="text" />
      </div>
    );
  }

  return (
    <li className="li-tree">
      {item.name}
      {children}
    </li>
  );
}
