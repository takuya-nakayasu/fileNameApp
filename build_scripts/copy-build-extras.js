/*
 * customize build.gradle
 */
const fs = require("fs");
const path = require("path");

const androidAppFolderPash = [
  "platforms",
  "android",
  "app",
];
const extrasGradleFilePath = [
  "build_scripts",
  "build_extras",
];
const extrasGradleFileName = "build-extras.gradle";

const renameAndroidFileName = (oldPath, newPath) => {
  if (!fs.existsSync(oldPath)) {
    return;
  }
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      `Renamed the Android file as follows: ${oldPath} -> ${newPath}`
    );
  });
};

module.exports = (context) => {
  extendGradle(
    path.join(context.opts.projectRoot, ...appBundlePath, oldAppBundleFileName),
    path.join(context.opts.projectRoot, ...appBundlePath, newAppBundleFileName)
  );
};
