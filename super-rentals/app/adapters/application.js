/* eslint-disable prettier/prettier */
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api'; //will add prefix to our url i.e. /api

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`; //for getting our customized url with .json at last
  }
}