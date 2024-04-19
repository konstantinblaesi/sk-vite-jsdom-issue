### Issue

- When jsdom is installed as a devDependency it is bundled by vite during `npm run build` and crashes the production build.

### Repro

```
npm run build
npm run prod
```

Open http://localhost:5173/

### Cause

This [line from jsdom](https://github.com/jsdom/jsdom/blob/2f8a7302a43fff92f244d5f3426367a8eb2b8896/lib/jsdom/living/xhr/XMLHttpRequest-impl.js#L31) ends up in the production build (search 'build' folder)

### Resolution?

Replacing the line with

```
const syncWorkerFile = null
```

seems to help.
