// QAFind launcher, not part of easi.run. The admin page's design preview (client/preview/vite.config.ts: the page on
// example data, with its mock backend), with one change: the QA lab's browser opens it by the lab's own host name, so
// every host is allowed (the preview allows only localhost). Run from client/, as the preview expects.
import preview from '../client/preview/vite.config.ts';

export default {
  ...preview,
  server: { ...preview.server, host: '0.0.0.0', port: 3000, allowedHosts: true },
};
