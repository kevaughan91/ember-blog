import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
    model(params) {

        return this.get('store').findRecord('post', params.post_id);
        
    }
});

