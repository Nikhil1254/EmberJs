/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostsNewRoute extends Route {
    @service router

    beforeModel(transition) {
        console.log(transition);
    }
}
