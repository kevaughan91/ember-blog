import Route from '@ember/routing/route';
import ResetScrollPositionMixin from '../mixins/reset-scroll-position';

export default Route.extend(ResetScrollPositionMixin, {
    model(){
        const store = this.get('store');
        const projects = store.findAll('project');
        return projects;
    }
});
