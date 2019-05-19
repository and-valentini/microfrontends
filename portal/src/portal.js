import 'zone.js';
import {init, applicationsLoader} from "./helper";


/*TODO: MAKE IT REAL*/
function fakeHTTP() {
    return new Promise(resolve => {
        setTimeout(()=>{
            const res = [
                { name:'app0', hash:'', url:'http://localhost:9006/', entry:'singleSpaEntry.js' },
                { name:'app1', hash:'/app1', url:'http://localhost:9001/', entry:'singleSpaEntry.js', store:'store.js' },
                { name:'app2', hash:'/app2', url:'http://localhost:9002/', entry:'singleSpaEntry.js', store:'store.js' },
                { name:'app3', hash:'/app3', url:'http://localhost:9003/', entry:'singleSpaEntry.js'},
            ]
            resolve(res)
        },500)
    })
}
function fakeHTTP2() {
    return new Promise(resolve => {
        setTimeout(()=>{
            const res = [
                { name:'app4', hash:'/app4', url:'http://localhost:9004/', entry:'singleSpaEntry.js'},
                { name:'app5', hash:'/app5', url:'http://localhost:9005/', entry:'singleSpaEntry.js', store:'store.js' },
            ]
            resolve(res)
        },500)
    })
}
fakeHTTP().then( applications => applicationsLoader(applications))
setTimeout(()=>{
    console.log('SECOND');
    fakeHTTP2().then( applications => applicationsLoader(applications))
},2000)

init()
