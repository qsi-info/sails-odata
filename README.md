## <a href="http://www.cnectdata.com/"><img src="http://www.cnectdata.com/wp-content/uploads/2014/04/cnect-logo-200x57-20141118.png" height='32px' /></a> All-in-One Data Management Stack

### sails-odata
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Extend a sails.js server to support OData protocol. Useful for client
applications that support OData, such as Kendo UI, Tableau, et al.

### 1. Install
```sh
$ npm install sails-odata --save
```

### 2. Configure `.sailsrc`

```json
{
  "generators": {
    "modules": {
      "odata-api": "sails-odata"
    }
  }
}
```

### 3. Generate

```sh
$ sails generate odata-api
```

### 4. Done!
Your sails.js app now supports the OData protocol.

## License
MIT

[npm-image]: https://img.shields.io/npm/v/sails-odata.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sails-odata
[sails-logo]: http://cdn.tjw.io/images/sails-logo.png
[sails-url]: https://sailsjs.org
[ci-image]: https://img.shields.io/travis/cnect/sails-odata.svg?style=flat-square
[ci-url]: https://travis-ci.org/cnect/sails-odata
[daviddm-image]: http://img.shields.io/david/cnect/sails-odata.svg?style=flat-square
[daviddm-url]: https://david-dm.org/cnect/sails-odata
