export default function useDOMCreate(nodeId: string) {
  const existNode = document.querySelector(`#${nodeId}`)
  if (!existNode) {
    const node = document.createElement('div')
    node.id = nodeId
    document.body.appendChild(node)
  }
  const destroyNode = () => document.body.removeChild(existNode as Node)
  return [destroyNode]
}
