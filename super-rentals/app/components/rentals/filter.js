/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    query = query.toLowerCase();

    if (query) {
      rentals = rentals.filter((rental) => rental.title.toLowerCase().includes(query) || rental.city.toLowerCase().includes(query) || rental.type.toLowerCase().includes(query) || rental.owner.toLowerCase().includes(query) || rental.bedrooms == Number(query));
    }

    return rentals;
  }
}