# Fluxible Provider

Provide executeAction and getStore to your component. You can use it as decorator too.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/fluxible-provider.svg?style=flat-square
[npm-url]: https://www.npmjs.com/fluxible-provider
[github-url]: https://github.com/seeden/fluxible-provider


## Install
```sh
npm install fluxible-provider
```


# Support us

Star this project on [GitHub][github-url].


## Usage provideExecuteAction

### Decorator

````js
import React, { Component } from 'react';
import { provideExecuteAction } from 'fluxible-provider';

@provideExecuteAction
export default class Example extends Component {
  onSubmit() {
    const { executeAction } = this.props;
    executeAction(yourAction, yourPayload);
  }
}
```

### Function

```js
import React, { Component } from 'react';
import { provideExecuteAction } from 'fluxible-provider';

class Example extends Component {
  onSubmit() {
    const { executeAction } = this.props;
    executeAction(yourAction, yourPayload);
  }
}

export default provideExecuteAction(Example);
```

## Usage provideGetStore

TODO

## Try our other React components

 - Translate your great project [react-translate-maker](https://github.com/CherrySoftware/react-translate-maker)
 - Forms [react-form-controlled](https://github.com/seeden/react-form-controlled)
 - Google AdSense via Google Publisher Tag [react-google-publisher-tag](https://github.com/seeden/react-google-publisher-tag)

# Support us

Star this project on [GitHub][github-url].

## Credits

[Zlatko Fedor](http://github.com/seeden)

## License

The MIT License (MIT)

Copyright (c) 2016 Zlatko Fedor zlatkofedor@cherrysro.com
