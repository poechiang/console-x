const { spawn, spawnSync } = require("child_process");
const path = require("path");
// const { info, error, log, warn } = console;

const info = (tag, ...rest) => {
  console.log(`[I][${tag.toUpperCase()}]`, ...rest);
};
const error = (tag, ...rest) => {
  console.error(`[E][${tag.toUpperCase}]`, ...rest);
};

const warn = (tag, ...rest) => {
  console.warn(`[W][${tag.toUpperCase()}]`, ...rest);
};
const subAppsMap = {
  common: { pkgMgr: "yarn", path: path.join(__dirname, "./console-common") },
  base: { pkgMgr: "yarn", path: path.join(__dirname, "./console-base") },
  res: { pkgMgr: "npm", path: path.join(__dirname, "./console-res") },
  mall: { pkgMgr: "npm", path: path.join(__dirname, "./console-mall") },
};

/**
 * Check whether the specified port number is occupied
 * @param {number} port 3000 - 3009
 */
const checkPort = (port) => {
  const { stdout, stderr } = spawnSync(`lsof -i :${port}`, [], { shell: true });
  info("check", `checking specified port ...`);

  try {
    if (stderr.length > 0) {
      throw new Error(stderr.toString("utf-8"));
    }
    const pidList = stdout
      .toString("utf-8")
      .split("\n")
      .filter((item) => item.includes("node") > -1)
      .forEach((item) => item.split(" ").filter(Boolean));

    pidList.forEach((pid) => {
      spawnSync(`kill -9 ${pid}`, [], { shell: true });
    });
  } catch (err) {
    error("check", err);
  }
};
// 检查端口是否被占用
// 启动服务
const startServer = () => {
  // check specified ports
  // [3000,3006,3007,3008,3009].forEach(checkPort);

  try {
    Object.entries(subAppsMap).forEach(([name, app]) => {
      const { stdout, stderr } = spawn(
        `cd ${app.path} && ${app.pkgMgr}`,
        app.pkgMgr === "npm" ? ["run", "start:dev"] : ["start:dev"],
        { shell: true, cwd: app.path }
      );

      stdout.on("data", (data) => {
        info(name, data.toString("utf-8"));
      });
      stderr.on("data", (data) => {
        warn("name", data.toString("utf-8"));
      });
      info(`[I][STARTER] ${name}`);
    });
  } catch (err) {
    error("starter", err);
  }
};

startServer();

process.on("exit", info);
