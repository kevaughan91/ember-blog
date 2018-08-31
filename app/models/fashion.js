import DS from 'ember-data';

export default DS.Model.extend({
    fashion_id: DS.attr('number'),
    image: DS.attr('string'),
    content:  DS.attr('string'),
});
