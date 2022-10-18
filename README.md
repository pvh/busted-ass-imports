# broken worker demo

1) load this page via `yarn webpack serve`
2) go to `chrome://inspect#workers` in Chrome and inspect the running shared-worker
3) Note that in the logs you can see that the shared-worker has `Started up` but there is no `CONNECTION`.
4) Comment out lines 4-6, and restart the server. (You shouldn't need to manually terminate the worker, I think.)
5) Note that now the logs include `CONNECTION`.

Our conclusion is that somehow loading `@automerge/automerge-wasm` is causing this event not to fire. In the blutack codebase we tested this by commenting out the `import * as wasm ...` lines in the `automerge-wasm` library at which point the `CONNECTION` string would appear again.

... Yay.


###

Found a workaround.  Setting up the shared worker over and over again in an `setInterval()` and I stop the interval when a "READY" message is sent back.  The good news is that the automerge doc gets created only once even when the worker is created many times.
This is not ideal but it gives us a way forward until we figure out this bug.


