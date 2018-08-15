import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {

        return Ember.RSVP.hash({
            post_id: params.post_id,
            posts: [1,2,3,4,5,6,7,8]
          });
    }
});

