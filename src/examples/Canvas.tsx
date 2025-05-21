import { useState } from "react";
import { useAttach } from "../hooks/useAttach";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function CanvasExample() {
  const [color, setColor] = useState("#ff0000");

  const canvasAttachment = (element: HTMLCanvasElement) => {
    const ctx = element.getContext("2d");

    ctx!.fillStyle = color;
    ctx!.fillRect(0, 0, element.width, element.height);

    return () => {
      ctx!.clearRect(0, 0, element.width, element.height);
    };
  };

  const canvasRef = useAttach(canvasAttachment, [color]);

  return (
    <section className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg shadow max-w-xs mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-2">🎨 Canvas Example</h2>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="color-input">Select color</Label>
        <Input
          id="color-input"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-16 h-10 p-0 border-none bg-transparent cursor-pointer"
        />
      </div>
      <canvas
        ref={canvasRef}
        width={100}
        height={100}
        className="rounded border shadow"
      />
    </section>
  );
}
