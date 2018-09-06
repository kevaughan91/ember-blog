import Route from '@ember/routing/route';
import ResetScrollPositionMixin from '../../mixins/reset-scroll-position';

export default Route.extend(ResetScrollPositionMixin, {
    model(params) {
        return this.get('store').findRecord('decoration', params.id);
    }
});
