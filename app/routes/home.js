import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        const store = this.get('store');
        const posts = store.findAll('post');
        return posts;
        //return store.findAll('post'); 
        //return [1,2,3,4,5,6,7,8];
    }
});
