export class ModelConverter<S> {
  convertedModel: S | null;
  static versionCode = "rt";
  constructor() {
    // this.convertedModel = this.camelToSnake(objectInSnakeCase);
  }

  //   this will convert the camel case request object to snake case.

  static requestBodyGenerator(obj: any): any {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.requestBodyGenerator(item));
    }

    const result: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const snakeKey = key.replace(
          /([A-Z])/g,
          (match, letter) => `_${letter.toLowerCase()}`
        );
        result[snakeKey] = this.requestBodyGenerator(obj[key]);
      }
    }

    return result;
  }

  //   this will convert the snake case response object to camel case
  static responseBodyParser<T>(obj): T {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => this.responseBodyParser(item)) as T;
    }

    const result = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const camelKey =
          key == "_id"
            ? "id"
            : key == "_lm_meta"
              ? "lmMeta"
              : key.replace(/_([a-z])/g, (match, letter) =>
                  letter.toUpperCase()
                );

        result[camelKey] = this.responseBodyParser(obj[key]);
      }
    }

    return result as T;
  }
}
