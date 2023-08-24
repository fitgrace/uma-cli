export function buildSite(commander) {
  // 打包组件展示网站的命令，这个命令还可以用在普通业务中
  // 这个命令实际上执行的是deploy这个文件
  commander
    .command('buildSite')
    .description('打包业务代码')
    .option('-d, --out-dir <path>', '输出目录', 'dist')
    .option('-a, --analyzer', '是否启用分析器');
}
