module.exports = {
  process(src, filename, config, options) {
    if (filename.endsWith(".css")) {
      return postcss([tailwindcss])
        .process(src, { from: filename })
        .then((result) => ({
          code: result.css,
        }));
    }

    return src;
  },
};
