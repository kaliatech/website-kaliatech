import { useEffect, useRef } from 'react'
export interface MermaidBlockProps {
  id: string
  diagram: string
}

export const MermaidBlock = (props: MermaidBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderGraph = async () => {
      const mermaidImport = await import('mermaid')
      const mermaid = mermaidImport.default
      mermaid.initialize({ startOnLoad: false })

      if (containerRef.current) {
        const { svg } = await mermaid.render(props.id, props.diagram)
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
