/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { service } from '@ember/service';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
    @service router;

    get currentURL() {
        //window.location.href - it gives url from address bar of browser -- test cases failing because of this
        console.log("window.location.href " + window.location.href);
        console.log("currentURL :" + this.router.currentURL); // gives logical url from router - /rentals/old-mansion
        console.log("origin : " + window.location.origin); // gives base url - http://localhost:4200
        return new URL(this.router.currentURL, window.location.origin);
    }

    get shareURL() {
        let url = new URL(TWEET_INTENT);

        url.searchParams.set('url', this.currentURL);

        if (this.args.text) {
            url.searchParams.set('text', this.args.text);
        }

        if (this.args.hashtags) {
            url.searchParams.set('hashtags', this.args.hashtags);
        }

        if (this.args.via) {
            url.searchParams.set('via', this.args.via);
        }

        return url;
    }
}
