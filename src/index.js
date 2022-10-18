import * as Automerge from "@automerge/automerge"
let doc = Automerge.init()
console.log(doc)

let sharedWorker

function setupSharedWorker() {
  console.log("Setup Shared Worker")
  sharedWorker = new SharedWorker(
    new URL("./shared-worker.js", import.meta.url),
    { type: "module", name: "automerge-repo-shared-worker" }
  )
  sharedWorker.port.onmessage = (e) => {
    console.log("onMessage")
    if (e.data === "READY") {
      console.log("Setup Complete");
      clearInterval(setupInterval)
    }
  }
}

setupSharedWorker()
const setupInterval = setInterval(setupSharedWorker,100)
