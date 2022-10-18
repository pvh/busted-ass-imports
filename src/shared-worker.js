
console.log('Shared Worker Starting')

import * as Automerge from "@automerge/automerge"
console.log("Create Doc");
let doc = Automerge.init()
console.log(doc)

onconnect = (e) => {
  console.log("Connection!");
  const port = e.ports[0];
  port.start();
  port.postMessage("READY");
}

console.log('End.')
