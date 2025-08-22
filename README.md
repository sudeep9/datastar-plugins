# About
Collection of miscellaneous plugins for datastar framework

# Credits

Awesome hypermedia framework: https://data-star.dev/

# TOC

- [Plugins](#plugins)

    - [Access to signals in JS](#datastar-signalsjs)
    - [Default args to fetch APIs](#datastar-default-actionsjs)
- [Using/Loading the plugins](#loading-the-plugins)
- [Demo](#demo)


# Plugins

## datastar-signals.js

This plugin provides read & write access to datastar signals. The plugin gets registered as a watcher.

It sets `window.Signals` which can be used to access signals. A signal `foo` can be accessed as `Signals.foo` and can be updated as `Signals.foo = 10`. The updates to the signal are reactive. 

This can serve as poor man's inspector of datastar signals.

This also means one can use the `Signals` in their JS code.

It also sets a helper function `window.printSignals` which can be used to print all signals to console.

Tip: One can set a keybinding to print signals:

```
// Print signals on ctrl-shift-s
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        printSignals();
    }
});
```

## datastar-default-actions.js

This plugin provides `@post2`, `@put2`, `@get2`, `@delete2`, `@patch2` wrappers over the respective default ones but add default args.

The plugin checks for `window.DatastarFetchArgs` object. If not defined the default is exactly as the default plugins. One can define global config like below 
```
window.DatastarFetchArgs = {
    retryScaler: 1,
    requestCancellation: new AbortController(),
}
```

The follwing attributes can be set as global default. 
```
window.DatastarFetchArgs = {
    retryScaler: ...,
    openWhenHidden: ...,
    retryInterval: ...,
    retryMaxCount: ...,
    requestCancellation: ...,
}
```

In terms of precedence, any setting provided at call site will have higher priority than the default one.

In addition, one can define default headers like: 
```
window.DatastarFetchArgs = {
    headers: {
        'X-CRSF-Token': 'some-token',
    }
}
```
The default headers are merged with the ones provided at call site.
This token can be set from the backend using the excute script option.

# Loading the plugins

The following file which loads the plugins in the following manner: 
```
import {SignalsPlugin} from 'datastar-signals.js';
import {load} from 'https://cdn.jsdelivr.net/gh/starfederation/datastar@main/bundles/datastar.js';

const plugins = [
    SignalsPlugin,
];

load(...plugins);
console.log('loaded datastar plugins', plugins.map(p => p.name));
```

See `pluginLoader.js` for a readymade script. Load this file as module in the html.

```
<script type="module" src="pluginLoader.js"></script>
```

Note:

1. Change the paths as per your env.

2. Do not load the `datastar.js` using `<script>`. It is imported in the plugin loader script anyway.

3. If the `<script>` is used to load the datastar separately then you might get runtime errors.

# Demo

Open the `index.html`. In vscode you can use live server extension. I