#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const oclif = require('@oclif/core');

oclif.run().then(require('@oclif/core/flush')).catch(require('@oclif/core/handle'));
