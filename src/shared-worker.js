
console.log('Started up woo')

import * as Automerge from "@automerge/automerge"
let doc = Automerge.init()
console.log(doc)


onconnect = () => {
  console.log("CONNECTION! x32")
}
