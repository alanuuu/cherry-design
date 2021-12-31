const chalk = require('chalk') 
const { build } = require('vite');
const config = require('../../configs/vite.dev.js')

const run = async () => {

  const watcher = await build(config);

  watcher.on('event', async (event) => {
    if (event.code === 'START' || event.code === 'END') {
      console.log(chalk.cyan('开始监听文件变化...'))
    } else if (event.code === 'BUNDLE_START') {
      console.log(chalk.cyan('检测到文件变化，重新编译文件\n'));
    } else if (event.code === 'BUNDLE_END') {
      console.log(chalk.green('编译完成！\n'));
    } else if (event.code === 'ERROR') {
      console.log(chalk.red('编译失败！\n'));
      console.error(event.error);
    }
  });
};

module.exports = run;