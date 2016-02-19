var casper = require('casper').create();

casper.start('https://www.zhimei360.com/', function() {
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
    else{
        this.echo('nothing');
    }
});

casper.run();