import DS from 'ember-data';

export default DS.Model.extend({
    post_id: DS.attr('number'),
    date: DS.attr('date'),
    title:  DS.attr('string'),
    condensedtitle:  DS.attr('string'),
    content: DS.attr('string'),
    coverphoto: DS.attr('string'), 
    category: DS.attr('string')
});
