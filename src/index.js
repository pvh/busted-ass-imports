import * as Automerge from "@automerge/automerge"
let doc = Automerge.init()
console.log(doc)

const sharedWorker = new SharedWorker(
  new URL("./shared-worker.js", import.meta.url),
  { type: "module", name: "automerge-repo-shared-worker" }
)
