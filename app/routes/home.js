import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        const store = this.get('store');
        const posts = store.findAll('post');
        posts.forEach((post, index) => {
            const firstp = post.content.indexOf("<p>");
            const lastp = post.content.indexOf("</p>");
            posts[index+1].content = "test";
            //post.content = post.content.substring(firstp, lastp);
           
        });
        return posts;
        //return store.findAll('post'); 
        //return [1,2,3,4,5,6,7,8];
    }
});
