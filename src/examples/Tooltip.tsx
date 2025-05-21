import { useState } from "react";
import { useAttach } from "../hooks/useAttach";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export function TooltipExample() {
  const [content, setContent] = useState("Hovered");

  const tooltip = (content: string) => (element: HTMLElement) => {
    const instance = tippy(element, { content });
    return () => instance.destroy();
  };

  const buttonRef = useAttach<HTMLButtonElement>(tooltip(content), [
    tooltip,
    content,
  ]);

  return (
    <section className="flex flex-col gap-4 max-w-xs mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">💬 Tooltip Example</h2>
      <Label htmlFor="tooltip-input">Tooltip content</Label>
      <Input
        id="tooltip-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter tooltip content"
      />
      <Button ref={buttonRef} className="mt-2 transition-all duration-200">
        Hover me
      </Button>
    </section>
  );
}
