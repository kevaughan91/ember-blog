import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model(params) {

        return hash({
            post_id: params.post_id,
            posts: [1,2,3,4,5,6,7,8]
          });
    }
});

