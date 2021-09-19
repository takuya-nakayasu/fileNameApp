/*
 * Rename Android file name.
 */
const fs = require("fs");
const path = require("path");

const applicationPackagePash = [
  "platforms",
  "android",
  "app",
  "build",
  "outputs",
  "apk",
  "debug",
];
const appBundlePath = [
  "platforms",
  "android",
  "app",
  "build",
  "outputs",
  "bundle",
  "debug",
];
const oldApplicationPackageFileName = "app-debug.apk";
const newApplicationPackageFileName = "android-application-package.apk";
const oldAppBundleFileName = "app-debug.aab";
const newAppBundleFileName = "android-app-bundle.aab";

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
  // rename Android Application Package(.apk) file
  renameAndroidFileName(
    path.join(
      context.opts.projectRoot,
      ...applicationPackagePash,
      oldApplicationPackageFileName
    ),
    path.join(
      context.opts.projectRoot,
      ...applicationPackagePash,
      newApplicationPackageFileName
    )
  );
  // rename Android App Bundle(.aab) file
  renameAndroidFileName(
    path.join(context.opts.projectRoot, ...appBundlePath, oldAppBundleFileName),
    path.join(context.opts.projectRoot, ...appBundlePath, newAppBundleFileName)
  );
};
