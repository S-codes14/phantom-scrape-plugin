
# website-scraper-phantom
Plugin for [website-scraper](https://github.com/s-codes14/node-website-scrapper) which returns html for dynamic websites using PhantomJS.

This module is an Open Source Software maintained by one developer in free time. 

## Requirements
* nodejs version >= 8
* [website-scraper](https://github.com/s-codes14/node-website-scrapper)

## Installation
```sh
git clone https://github.com/s-codes14/node-website-scrapper.git

git clone https://github.com/S-codes14/phantom-scrape-plugin.git
```

## Usage
```javascript
const scrape = require('./website-scraper');
const PhantomPlugin = require('./phantom-scrape-plugin');

scrape({
    urls: ['https://www.instagram.com/sbongumusas/'],
    directory: '/path/to/save',
    plugins: [ new PhantomPlugin() ]
});
```

## How it works
It starts PhantomJS which just opens page and waits when page is loaded.
It is far from ideal because probably you need to wait until some resource is loaded or click some button or log in. Currently this module doesn't support such functionality.
