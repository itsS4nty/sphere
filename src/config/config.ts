import path from 'path';

export const config = {
    configFile: '.sphere.json',
    defaults: {
        root: path.join(__dirname, '..', '..', 'schemas'),
    },
} as const;
