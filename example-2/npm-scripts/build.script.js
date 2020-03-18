const clean = require('../../npm-scripts/clean-dirs.script.js');
const dirVars = require('../webpack-config/base/dirVars.config.js');
clean([dirVars.distDir]);
