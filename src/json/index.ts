import { isNumString } from '../string';

type JsonObject = { [key: string]: unknown };
type JsonArray = Array<unknown>;
type Json = JsonObject | JsonArray | string | number | boolean | null;

export function deepParseJson(jsonString: Json): Json {
  if (typeof jsonString === 'string') {
    if (isNumString(jsonString)) {
      return jsonString;
    }
    try {
      return deepParseJson(JSON.parse(jsonString));
    } catch (err) {
      return jsonString;
    }
  } else if (Array.isArray(jsonString)) {
    return jsonString.map((val) => deepParseJson(val as JsonArray));
  } else if (typeof jsonString === 'object' && jsonString !== null) {
    return Object.keys(jsonString).reduce<JsonObject>((obj, key) => {
      const val = jsonString[key];
      obj[key] = isNumString(val as string)
        ? val
        : deepParseJson(val as number);
      return obj;
    }, {});
  } else {
    return jsonString;
  }
}

export function has(obj: JsonObject, key: string): boolean {
  return Object.keys(obj).includes(key);
}
