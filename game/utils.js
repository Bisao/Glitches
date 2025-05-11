
import { TILE_WIDTH, TILE_HEIGHT } from './constants.js';

export function fromIsometric(x, y) {
  const tileY = (y / TILE_HEIGHT + x / TILE_WIDTH) / 2;
  const tileX = y / TILE_HEIGHT - tileY;
  return { x: tileX, y: tileY };
}
