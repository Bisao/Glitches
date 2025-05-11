
class AssetManager {
  constructor() {
    this.assets = new Map();
    this.loading = false;
    this.loadedCount = 0;
    this.totalAssets = 0;
  }

  async loadImage(key, url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.assets.set(key, img);
        resolve(img);
      };
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  }

  getAsset(key) {
    return this.assets.get(key);
  }

  clear() {
    this.assets.clear();
  }
}

export default new AssetManager();
