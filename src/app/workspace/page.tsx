import { ChatPanel } from "@/components/chat-panel"
import { CanvasWorkspace } from "@/components/canvas-workspace"

export default function WorkspacePage() {
  return (
    <main className="flex h-screen w-screen">
      {/* Chat Panel - 30% width */}
      <div className="h-full w-[30%] min-w-[320px] border-r border-border">
        <ChatPanel />
      </div>

      {/* Canvas Workspace - 70% width */}
      <div className="h-full flex-1">
        <CanvasWorkspace />
      </div>
    </main>
  )
}