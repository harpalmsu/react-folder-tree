import data from "./data.json";
import ListItem from "./ListItem";
import { iterativeTreeLog } from"./logger"

export default function Tree() {
  const unflatternTree = unflattern_animalTree(data.animalTree);

  console.log(iterativeTreeLog(unflatternTree))
  // Expected Output:
  /*
    <ul className="ul-tree">
      <li className="li-tree">ant</li>
      <li className="li-tree">bear</li>
      <ul className="ul-tree">
        <li className="li-tree">cat</li>
        <li className="li-tree">dog</li>
        <ul className="ul-tree">
          <li className="li-tree">elephant</li>
        </ul>
      </ul>
      <li className="li-tree">frog</li>
    </ul>
    */

  return (
    <div className="tree">
      <ul className="root-tree ul-tree">
        {unflatternTree.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );

  function unflattern_animalTree(list) {
    let map = {},
      node,
      roots = [],
      i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i;
      list[i].children = [];
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== 0) {
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}
