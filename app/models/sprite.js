import DS from 'ember-data';

export default DS.Model.extend({
    image: DS.attr(),
    user: DS.belongsTo('user')
});
