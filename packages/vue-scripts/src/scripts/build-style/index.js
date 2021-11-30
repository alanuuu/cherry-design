const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const less = require("less");
const root = process.cwd();

const run = async () => {
  const files = glob.sync("**/*.less", {
    cwd: path.resolve(root, "components"),
  });

  for (const filename of files) {
    const componentPath = path.resolve(root, `components/${filename}`);
    // 复制less
    const esPath = path.resolve(root, `es/${filename}`);
    const libPath = path.resolve(root, `lib/${filename}`);
    await fs.mkdirp(path.dirname(esPath));
    await fs.mkdirp(path.dirname(libPath))
    fs.copyFileSync(componentPath, esPath);
    fs.copyFileSync(componentPath, libPath);
    // 生成css

    if (/index\.less$/.test(filename)) {
      const content = fs.readFileSync(componentPath, "utf-8");

      less.render(
        content,
        {
          filename,
          paths: [
            path.resolve(root, `components/${path.dirname(filename)}`),
            root,
          ],
        },
        (err, res) => {
          if (err) {
            throw err;
          }

          if (res && res.css) {
            const cssFileName = filename.replace(".less", ".css");
            fs.writeFileSync(path.relative(root, `es/${cssFileName}`), res.css);
            fs.writeFileSync(
              path.relative(root, `lib/${cssFileName}`),
              res.css
            );
            console.log(`${filename} build success`);
          }
        }
      );
    }
  }
};

module.exports = run;
