import * as singleSpa from 'single-spa';
import {GlobalEventDistributor} from "./globalEventDistributor";

function hashPrefix(prefix) {
    return function (location) {
        return location.pathname.startsWith(`${prefix}`) || location.hash.startsWith(`#${prefix}`);
    }
}

async function loadApp(name, hash, appURL, storeURL, globalEventDistributor) {
    let storeModule = {}, customProps = {globalEventDistributor: globalEventDistributor};

    // try to import the store module
    try {
        storeModule = storeURL ? await SystemJS.import(storeURL) : {storeInstance: null};
    } catch (e) {
        console.log(`Could not load store of app ${name}.`, e);
    }

    if (storeModule.storeInstance && globalEventDistributor) {
        // add a reference of the store to the customProps
        customProps.store = storeModule.storeInstance;

        // register the store with the globalEventDistributor
        globalEventDistributor.registerStore(storeModule.storeInstance);
    }

    // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
    singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), customProps);
}

export async function applicationsLoader(applications) {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];
    for(const {name,hash,url,entry,store} of applications) {
        loadingPromises.push(loadApp(name, hash, url+entry,store ? url+store : null,store ? globalEventDistributor : null))
    }
    await Promise.all(loadingPromises);

}

export function init() {
    singleSpa.start();
}
