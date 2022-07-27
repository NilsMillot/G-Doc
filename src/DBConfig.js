export const DBConfig = {
  name: "MY PREZ 🛍",
  version: 1,
  objectStoresMeta: [
    {
      store: "presentations",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
      ],
    },
  ],
  objectStoresMeta: [
    {
      store: "slides",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "content", keypath: "content", options: { unique: false } },
      ],
    },
  ],
};
