/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GeoComponent extends Component {
    @tracked lat = "";
    @tracked long = "";
    @tracked error = "";
    @tracked address = "";

    @action
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            this.error = "Geolocation is not supported by this browser.";
        }
    }

    @action
    showPosition(position) {
        this.lat = position.coords.latitude + "";
        this.long = position.coords.longitude + "";
    }

    @action
    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.error = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                this.error = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                this.error = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                this.error = "An unknown error occurred."
                break;
        }
    }

}
