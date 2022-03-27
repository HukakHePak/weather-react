import { useEffect, useState } from "react";

export function useStorage(init, storage, key) {
  const [data, setData] = useState(storage.get(key) || init);

  useEffect(() => {
    storage.set(key, data);
  });

  return [data, setData];
}