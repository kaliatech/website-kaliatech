import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'
mermaid.initialize({ startOnLoad: false })
export interface MermaidBlockProps {
  diagram: string
}

export const MermaidBlock = (props: MermaidBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const renderGraph = async () => {
      if (containerRef.current) {
        const { svg } = await mermaid.render(
          `${(Math.random() + 1).toString(36).substring(3)}`,
          props.diagram,
        )
        //mermaid.init()
        containerRef.current.innerHTML = svg
      }
    }
    renderGraph()
  })
  return (
    <div className="h-full min-h-[10rem] w-full">
      <div ref={containerRef} />
    </div>
  )
}
