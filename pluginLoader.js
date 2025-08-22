
import {
    Post2Plugin,
    Put2Plugin,
    Get2Plugin,
    Delete2Plugin,
    Patch2Plugin
} from '/static/datastar-default-actions.js';
import {SignalsPlugin} from '/static/datastar-signals.js';

import {load} from '/static/datastar.js';

const plugins = [
    SignalsPlugin,
    Post2Plugin,
    Put2Plugin,
    Get2Plugin,
    Delete2Plugin,
    Patch2Plugin,
];

load(...plugins);
console.log('loaded datastar plugins', plugins.map(p => p.name));