
function toIsometric(x, y) {
  return {
    x: (x - y) * TILE_WIDTH / 2,
    y: (x + y) * TILE_HEIGHT / 2
  };
}

function fromIsometric(x, y) {
  const tileY = (y / TILE_HEIGHT + x / TILE_WIDTH) / 2;
  const tileX = y / TILE_HEIGHT - tileY;
  return { x: tileX, y: tileY };
}
