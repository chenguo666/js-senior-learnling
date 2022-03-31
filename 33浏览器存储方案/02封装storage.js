class HYCache {
  construct(isLocal = true) {
    this.stroage = isLocal ? localStorage : sessionStorage;
  }
  setItem(key, value) {
    if (value) {
      this.stroage.setItem(key, JSON.stringify(value));
    }
  }
  getItem(key) {
    const value = this.stroage.getItem(key);
    if (value) {
      value = JSON.parse(value);
      return value;
    }
  }
  removeItem(key) {
    this.stroage.removeItem(key);
  }
  clear() {
    this.stroage.clear();
  }
  key(index) {
    return this.stroage.key(index);
  }
  length() {
    return this.stroage.length;
  }
}
const localCache = new HYCache();
const sessionCache = new HYCache(false);
export { localCache, sessionCache };
