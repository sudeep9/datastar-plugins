function printSignals() {
    if (!window.Signals) {
        console.warn('Signals not initialized yet');
        return;
    }

    console.group('Signals');
    for (const [key, value] of Object.entries(window.Signals)) {
        console.log(key, value);
    }
    console.groupEnd();
}

const SignalsPlugin = {
    type: 'watcher',
    name: 'custom-ds-watcher',
    onGlobalInit: (ctx) => {
        window.Signals = ctx.root;
        window.printSignals = printSignals;

        if (!window.ShowChangedSignals) return;

        document.addEventListener('datastar-signal-patch', (evt) => {
            for (const [key, value] of Object.entries(evt.detail)) {
                console.log(`Signal changed ${key} =`, value);
            }
        })
    }
}

export {SignalsPlugin};