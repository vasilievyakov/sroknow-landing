type Persistence = {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
};

// Extend Window interface for persistentStorage
declare global {
  interface Window {
    persistentStorage?: Persistence;
  }
}

export const persistence: Persistence = {
  setItem(key, value) {
    if (window.persistentStorage) {
      return window.persistentStorage.setItem(key, value);
    }
    // Fallback to localStorage
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  getItem(key) {
    if (window.persistentStorage) {
      return window.persistentStorage.getItem(key);
    }
    // Fallback to localStorage
    const value = localStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem(key) {
    if (window.persistentStorage) {
      return window.persistentStorage.removeItem(key);
    }
    // Fallback to localStorage
    localStorage.removeItem(key);
    return Promise.resolve();
  },
  clear() {
    if (window.persistentStorage) {
      return window.persistentStorage.clear();
    }
    // Fallback to localStorage
    localStorage.clear();
    return Promise.resolve();
  },
};