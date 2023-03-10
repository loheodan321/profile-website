import { JsonObject, JsonProperty } from 'json2typescript';

interface IItem {
  name: string;
  id: string;
  imgSrc: string;
  slogan: string;
  text?: string;
}

@JsonObject('CItem')
export class CItem implements IItem {
  @JsonProperty('name', String)
  name: string = '';

  @JsonProperty('id', String)
  id: string = '';

  @JsonProperty('imgSrc', String)
  imgSrc: string = '';

  @JsonProperty('slogan', String)
  slogan: string = '';

  @JsonProperty('text', String, true)
  text?: string = '';
}
