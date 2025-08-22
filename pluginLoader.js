
import {
    Post2Plugin,
    Put2Plugin,
    Get2Plugin,
    Delete2Plugin,
    Patch2Plugin
} from 'datastar-default-actions.js';
import {SignalsPlugin} from 'datastar-signals.js';

import {load} from 'https://cdn.jsdelivr.net/gh/starfederation/datastar@main/bundles/datastar.js';

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