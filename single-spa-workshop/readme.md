## single-spa workshop

This place contains the code exercises that I did while studying [single-spa workshop > Microfrontend Fundamentals](https://single-spa-workshop.com/#courses) course.

### Prereqs

Install `git`, `node`, `pnpm`.

### Run

Use `pnpm start -- {directory-name}` to start any of these samples.<br/>
E.g. do `pnpm start -- 01-vanilla-app` to start the SSPA sample that exists in `01-vanilla-app`.

Look for the listening port number. There are a couple of specific ports per sample, configured in `webpack.config.js` file, within `directoryOptions` object.

### Notes

1. Explicit reference to `regeneratorRuntime`.
   - Although it works as-is in the original repo (and included here as a sample, see `01-vanilla-app`), I had to explicitly added to index.html, at least in `01-code-exercise`:<br/>
     `<script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>`<br/>>
     or otherwise `"regeneratorRuntime is not defined"` error would fail the SPA startup.
