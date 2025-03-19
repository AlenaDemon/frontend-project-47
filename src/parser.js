/* eslint-disable consistent-return */
import yaml from 'js-yaml';

export default (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yaml') {
    return yaml.load(data);
  }
};
