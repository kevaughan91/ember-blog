import Component from '@ember/component';

export default Component.extend({
    model(){
        const store = this.get('store');
        const otherPosts = store.findAll('post');
        return otherPosts;
    }
});
