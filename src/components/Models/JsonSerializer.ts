import { JsonConvert, OperationMode } from 'json2typescript';

export abstract class JsonSerializer<T extends Object> {
  protected abstract get classReference(): new () => T;

  fromJson(json: Object): T {
    let jsonConvert = new JsonConvert();
    const value = jsonConvert.deserializeObject<T>(json, this.classReference);
    return value;
  }
}
