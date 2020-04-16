
var ghpages = require('gh-pages');

export default async function() {
    ghpages.publish('build', {
        branch: 'master',
        repo: 'git@github.com:itering/home_site_sg.git'
    }, function(res) {
        console.log(res)
    });
};
