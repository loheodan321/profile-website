import { JsonObject, JsonProperty } from 'json2typescript';
import { JsonSerializer } from './JsonSerializer';
import { CItem } from './Item';

interface MetricDoType {
  data: CItem[];
}

@JsonObject('MetricDo')
export class MetricD implements MetricDoType {
  @JsonProperty('data', [CItem])
  data: CItem[] = [];
}
