type Obj = Record<string, unknown>;

export function flatObject(obj: Obj) {
  let flat: Obj = {};

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      flat = { ...flat, ...flatObject(obj[key] as Obj) };
    } else {
      flat[key] = obj[key];
    }
  }

  return flat;
}
