import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { image, helpers } from 'faker';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
    const numberOfRecords = Employees.find({}).count();
    if (!numberOfRecords) {

        _.times(5000, () => {
            const { name, email, phone } = helpers.createCard();

            Employees.insert({
                name, email, phone,
                avatar: image.avatar()
            });
        });
    }
    
    Meteor.publish('employees', (perPage) => {
        return Employees.find({}, { limit: perPage });
    });
});