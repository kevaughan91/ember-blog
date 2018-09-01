import Route from '@ember/routing/route';

export default Route.extend({

    afterModel() {
        console.log(this.get('routeName'));
    }
});
