import Route from '@ember/routing/route';
import ResetScrollPositionMixin from '../mixins/reset-scroll-position';

export default Route.extend(ResetScrollPositionMixin, {
    model(){
        const store = this.get('store');
        const decorations = store.findAll('decoration');
        return decorations;
    }
});
