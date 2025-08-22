const attrs = [
    'retryScaler',
    'openWhenHidden',
    'retryInterval',
    'retryMaxCount',
    'requestCancellation',
];

function createPlugin(method) {
    const name = `${method}2`;
    return {
        type: 'action',
        name: name,
        fn: async (ctx, url, args) => {
            const defargs = window.DatastarFetchArgs;
            if (defargs) {
                for (const attr of attrs) {
                    if (!args.hasOwnProperty(attr) && defargs.hasOwnProperty(attr)) {
                        args[attr] = defargs[attr];
                    }
                }

                if (defargs.hasOwnProperty('headers')) {
                    args.headers = {
                        ...args.headers,
                        ...defargs.headers,
                    };
                }
            }

            ctx.actions[method].fn(ctx, url, args);
        }
    }
}

const Post2Plugin = createPlugin('post');
const Put2Plugin = createPlugin('put');
const Get2Plugin = createPlugin('get');
const Delete2Plugin = createPlugin('delete');
const Patch2Plugin = createPlugin('patch');

export {Post2Plugin, Put2Plugin, Get2Plugin, Delete2Plugin, Patch2Plugin};