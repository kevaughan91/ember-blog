import DS from 'ember-data';

export default DS.Model.extend({
    decoration_id: DS.attr('number'),
    title: DS.attr('string'),
    images: DS.attr('string'),
    cover: DS.attr('string'),
    content:  DS.attr('string'),
});