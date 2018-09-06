import DS from 'ember-data';

export default DS.Model.extend({
    project_id: DS.attr('number'),
    title: DS.attr('string'),
    image: DS.attr('string'),
    content:  DS.attr('string'),
});