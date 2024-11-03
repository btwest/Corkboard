import { colorToCss } from "@/lib/utils";
import { TriangleLayer } from "@/types/canvas";

interface TriangleProps {
  id: string;
  layer: TriangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Triangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: TriangleProps) => {
  const { x, y, width, height, fill } = layer;

  // Calculate the points for the triangle
  const point1 = `${x + width / 2},${y}`; // Top-center vertex
  const point2 = `${x},${y + height}`; // Bottom-left vertex
  const point3 = `${x + width},${y + height}`; // Bottom-right vertex

  return (
    <polygon
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      points={`${point1} ${point2} ${point3}`}
      fill={fill ? colorToCss(fill) : "#000"}
      stroke={selectionColor || "transparent"}
      strokeWidth={1}
    />
  );
};
