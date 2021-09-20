/*
 * customize build.gradle
 */
const fs = require("fs");
const path = require("path");

const androidAppFolderPath = ["platforms", "android", "app"];
const extrasGradleFilePath = ["build_scripts", "build_extras"];
const extrasGradleFileName = "build-extras.gradle";

const copyBuildExtras = (
  androidAppFolderFullPath,
  extrasGradleFileFullPath,
  destinationFullPath
) => {
  if (
    !fs.existsSync(
      androidAppFolderFullPath || !fs.existsSync(extrasGradleFileFullPath)
    )
  ) {
    console.log(`${extrasGradleFileFullPath} not found. Skipping`)
    return;
  }
  fs.copyFile(extrasGradleFileFullPath, destinationFullPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('copied build-extras.gradle');
  })
};

module.exports = (context) => {
  copyBuildExtras(
    path.join(context.opts.projectRoot, ...androidAppFolderPath),
    path.join(
      context.opts.projectRoot,
      ...extrasGradleFilePath,
      extrasGradleFileName
    ),
    path.join(context.opts.projectRoot, ...androidAppFolderPath, extrasGradleFileName)
  );
};
