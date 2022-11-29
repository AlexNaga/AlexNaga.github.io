const liveServer = require("live-server");

const params = {
  port: 3000,
  open: true,
  ignore: "scss,my/templates", // comma-separated string for paths to ignore
  file: "src/index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);
