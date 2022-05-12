/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostsRoute extends Route {
    @service router;

    // beforeModel(transition) {
    //     super.beforeModel(...arguments);
    //     console.log(transition);
    //     this.router.transitionTo('posts.new');

    //     setTimeout(() => {
    //         this.router.transitionTo('posts');
    //     }, 2000);
    // }
}
