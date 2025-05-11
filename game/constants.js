
export const TILE_WIDTH = window.innerWidth <= 768 ? 32 : 64;
export const TILE_HEIGHT = window.innerWidth <= 768 ? 16 : 32;
export const MAP_SIZE = 10;

export const SCREEN = {
  MOBILE: window.innerWidth <= 768,
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
  UI: {
    DESKTOP: {
      BUTTON_WIDTH: 200,
      BUTTON_HEIGHT: 50,
      TITLE_FONT: '48px Arial',
      BUTTON_FONT: '24px Arial'
    },
    MOBILE: {
      BUTTON_WIDTH: 150,
      BUTTON_HEIGHT: 40,
      TITLE_FONT: '32px Arial',
      BUTTON_FONT: '18px Arial'
    }
  }
};
