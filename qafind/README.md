# QAFind launcher

Not part of easi.run. This folder and the root `package.json` let the QAFind lab, which runs Node apps with
`npm install` and `npm start` from a repository's root, start the admin page's design preview (`client/preview`): the
admin page on example data, with its mock backend, as `client/preview/run.sh` runs it.

- `npm install` installs `client/` (its own lockfile).
- `npm start` serves the admin page on port 3000. `/` opens the default scenario (logged in, sessions running);
  `/__preview/` lists every scenario.

The only change from the preview is `server.allowedHosts: true`, because the lab's browser reaches the app by the lab's
host name rather than `localhost`.

## Signing in (mock backend)

The admin opens on **Log in**. Any password logs in, for example `qa-preview-password`; a password containing `wrong`
is refused and one containing `limit` is rate-limited. Where an authenticator code is asked for, any 6 digits work
and `000000` is refused. Nothing here is a real credential: the mock backend in `client/preview/mock.ts` decides it.
