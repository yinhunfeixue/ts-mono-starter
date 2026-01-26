import chokidar from 'chokidar';
import path from 'path';
import { ChildProcess, spawn } from 'child_process';

let devProcess: ChildProcess | null = null;
function reload(cwd: string) {
  if (devProcess) {
    devProcess.kill();
    devProcess = null;
  }
  devProcess = spawn('tsdown', ['-w'], {
    cwd,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });
}

function addListener(cwd: string) {
  chokidar
    .watch(path.join(cwd, 'src'), {
      ignoreInitial: true
    })
    .on('add', () => reload(cwd))
    .on('unlink', () => reload(cwd));
  reload(cwd);
}

function devServer() {
  const cwd = process.cwd();
  addListener(cwd);
}
devServer();
