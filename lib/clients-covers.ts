import coversData from "./clients-covers.json";

export type ClientCover = {
  id: string;
  src: string;
  mediaUrl: string;
  width: number;
  height: number;
  origW: number;
  origH: number;
};

function dedupeCovers(covers: ClientCover[]) {
  const seen = new Set<string>();

  return covers.filter((cover) => {
    const key = cover.src;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const clientCovers = dedupeCovers(coversData as ClientCover[]);

export function modIndex(index: number, length: number) {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
}

export function getCircularOffset(
  itemIndex: number,
  activeIndex: number,
  dragOffset: number,
  length: number,
) {
  if (length === 0) return 0;

  const active = modIndex(activeIndex, length);
  let diff = itemIndex - active;

  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;

  return diff - dragOffset;
}
