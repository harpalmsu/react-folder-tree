const iterativeTreeLog = (tree) => {
  const [root] = tree
  const render = []
  let stack = [root]
  let indentation = 0

  const IterativeListNode = (name) => `<li className="li-tree">${name}</li>`
  const isLeaf = node => node.children.length === 0
  const indent = size => '  '.repeat(size)

  while (stack.length > 0) {
    const node = stack.pop()

    if (node == null) {
      indentation--
      render.push(indent(indentation) + '</ul>')
      continue
    }
    if (node.id !== root.id) {
      render.push(indent(indentation) + IterativeListNode(node.name))
    }
    if (!isLeaf(node)) {
      const children = node.children
      stack = stack.concat([...children, null].reverse()) // Stack push
      render.push(indent(indentation) + '<ul className="ul-tree">')
      indentation++
    }
  }

  return render.join('\n')
}

export { iterativeTreeLog }
