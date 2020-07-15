let gulp = require("gulp");
let concat = require("gulp-concat");
let del = require("del");
let nodemon = require("gulp-nodemon");
let bsync = require("browser-sync").create();
let ts = require("gulp-typescript");

function nodemonServer(cb) {
  let started = false;
  return nodemon({
    script: "server.js",
  }).on("start", function () {
    if (!started) {
      cb();
      started = true;
    }
  });
}

gulp.task("server", nodemonServer);
let handleCSS = function () {
  return gulp
    .src("./src/**/*.css")
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./dist"))
    .pipe(
      bsync.reload({
        stream: true,
      })
    );
};
let toSass = function () {
  return gulp
    .src("./dist/all.css")
    .pipe(concat("all.scss"))
    .pipe(gulp.dest("./dist"))
    .pipe(
      bsync.reload({
        stream: true,
      })
    );
};
let cleanDistFolder = function () {
  return del(["./dist/**"]);
};
let handlePics = function () {
  return gulp.src("./src/pics/*").pipe(gulp.dest("./dist/pics"));
};

gulp.task("cleanDistFolder", cleanDistFolder);
gulp.task("handlePics", handlePics);
gulp.task("toSass", toSass);
gulp.task("handleCSS", handleCSS);

let webpackConfig = require("./webpack.config");
const webpackStream = require("webpack-stream");

function runWebpack() {
  return gulp
    .src(["src/indexEmail.tsx", "src/indexPassword.tsx"])
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest("dist/"));
}

gulp.task("runWebpack", runWebpack);

function reloadOnDistChange() {
  bsync.init(null, {
    proxy: "http://localhost:4000",
    port: 7000,
    // middleware: [logger(), historyApiFallback()],
  });
  gulp.watch("./dist/email.index.js").on("change", bsync.reload);
  gulp.watch("./dist/password.index.js").on("change", bsync.reload);
  gulp.watch("./dist/all.css").on("change", bsync.reload);
}

function sync() {
  gulp.watch("./src/**/*.css", handleCSS, runWebpack);
  gulp.watch("./src/**/*.tsx", runWebpack);
  gulp.watch("./**/*.ts", runWebpack);
  gulp.watch("./public/index.html", runWebpack);
}

let tsProject = ts.createProject("tsconfig.json");

function typescript() {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}
gulp.task("typescript", typescript);
gulp.task(
  "default",
  gulp.series(
    cleanDistFolder,
    handlePics,
    handleCSS,
    toSass,
    runWebpack,
    nodemonServer,
    gulp.parallel(reloadOnDistChange, sync)
  )
);
