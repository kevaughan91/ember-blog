import Route from '@ember/routing/route';
import ResetScrollPositionMixin from '../mixins/reset-scroll-position';

export default Route.extend(ResetScrollPositionMixin, {
    model(){
        const store = this.get('store');
        const fashions = store.findAll('fashion');
        return fashions;
        //return store.findAll('post'); 
        //return [1,2,3,4,5,6,7,8];
    }
});
