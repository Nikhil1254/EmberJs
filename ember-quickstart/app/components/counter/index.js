/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterIndexComponent extends Component {
    @tracked count = 0;
    @tracked multiple = 1;

    @action
    change(val) {
        this.count += val;
    }

    @action
    double() {
        this.multiple *= 2;
    }

    get total() {
        return this.count * this.multiple;
    }

}
