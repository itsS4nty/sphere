# Sphere

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g sphere
$ sphere COMMAND
running command...
$ sphere (--version)
sphere/0.0.0 darwin-x64 node-v20.9.0
$ sphere --help [COMMAND]
USAGE
  $ sphere COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [Sphere](#sphere)
-   [Usage](#usage)
-   [Commands](#commands)
    -   [`sphere json-parse FILE`](#sphere-json-parse-file)
    -   [`sphere help [COMMANDS]`](#sphere-help-commands)
    -   [`sphere plugins`](#sphere-plugins)
    -   [`sphere plugins:install PLUGIN...`](#sphere-pluginsinstall-plugin)
    -   [`sphere plugins:inspect PLUGIN...`](#sphere-pluginsinspect-plugin)
    -   [`sphere plugins:install PLUGIN...`](#sphere-pluginsinstall-plugin-1)
    -   [`sphere plugins:link PLUGIN`](#sphere-pluginslink-plugin)
    -   [`sphere plugins:uninstall PLUGIN...`](#sphere-pluginsuninstall-plugin)
    -   [`sphere plugins reset`](#sphere-plugins-reset)
    -   [`sphere plugins:uninstall PLUGIN...`](#sphere-pluginsuninstall-plugin-1)
    -   [`sphere plugins:uninstall PLUGIN...`](#sphere-pluginsuninstall-plugin-2)
    -   [`sphere plugins update`](#sphere-plugins-update)

## `sphere json-parse FILE`

Parse a JSON file and get types of it

```
USAGE
  $ sphere json-parse FILE

ARGUMENTS
  FILE  File to parse


DESCRIPTION
  Parse a JSON file and get types of it

EXAMPLES
  $ sphere json-parse myjson.json
  File parsed!
```

_See code: [src/commands/json-parse/index.ts](https://github.com/itsS4nty//https://github.com/itsS4nty/Sphere/blob/v0.0.0/src/commands/json-parse/index.ts)_

## `sphere help [COMMANDS]`

Display help for sphere.

```
USAGE
  $ sphere help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sphere.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `sphere plugins`

List installed plugins.

```
USAGE
  $ sphere plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sphere plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/index.ts)_

## `sphere plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sphere plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ sphere plugins add

EXAMPLES
  $ sphere plugins add myplugin

  $ sphere plugins add https://github.com/someuser/someplugin

  $ sphere plugins add someuser/someplugin
```

## `sphere plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sphere plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sphere plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/inspect.ts)_

## `sphere plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sphere plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ sphere plugins add

EXAMPLES
  $ sphere plugins install myplugin

  $ sphere plugins install https://github.com/someuser/someplugin

  $ sphere plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/install.ts)_

## `sphere plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ sphere plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ sphere plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/link.ts)_

## `sphere plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sphere plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sphere plugins unlink
  $ sphere plugins remove

EXAMPLES
  $ sphere plugins remove myplugin
```

## `sphere plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ sphere plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/reset.ts)_

## `sphere plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sphere plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sphere plugins unlink
  $ sphere plugins remove

EXAMPLES
  $ sphere plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/uninstall.ts)_

## `sphere plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sphere plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sphere plugins unlink
  $ sphere plugins remove

EXAMPLES
  $ sphere plugins unlink myplugin
```

## `sphere plugins update`

Update installed plugins.

```
USAGE
  $ sphere plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/update.ts)_

<!-- commandsstop -->
