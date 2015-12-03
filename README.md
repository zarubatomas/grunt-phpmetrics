# grunt-phpmetrics

> Grunt plugin for running [PHP Metrics](https://github.com/Halleck45/PhpMetrics).

## Getting started

1. Install grunt-phpmetrics
```
npm install grunt-phpmetrics --save-dev
```

2. [Install PHP Metrics](https://github.com/Halleck45/PhpMetrics)

3. Add this to your project's `Gruntfile.js`:
```
grunt.loadNpmTasks('grunt-phpmetrics');
```

## Usage Example

_Run this task with the `grunt phpmetrics` command._

```js
phpmetrics: {
	options: {
		bin: 'vendor/bin/phpmetrics', //path to bin phpmetrics file
		reportHtml: 'report.html', //example configuration
	},
	application: {
		dir: 'test/' //path to directory for phpmetrics
  }
}
```

## Target Properties

#### dir
Type: `String` || `Array`

_The file or directory to analyze._

###Options
> For more information about options check configuration options of [PHP Metrics](https://github.com/Halleck45/PhpMetrics).

#### bin
Type: `String`  Default: `phpmetrics`

_The path to `phpmetrics`._
_(For composer, use `vendor/bin/phpmetrics`)._

#### config
Type: `String`  Default: `null`

_Path to config file (YAML) `config.yml`_

#### reportHtml
Type: `String`  Default: `null`

_Path to save report in HTML format. `report.html`_

#### reportXml
Type: `String`  Default: `null`

_Path to save report in XML format. `report.xml`_

#### reportCli
Type: `Boolean`  Default: `null`

_Enable report in terminal._

#### violationsXml
Type: `String`  Default: `null`

_Path to save violations in XML format. `violations.xml`_

#### reportCsv
Type: `String`  Default: `null`

_ Path to save summary report in CSV format. `report.csv`_

#### reportJson
Type: `String`  Default: `null`

_Path to save detailed report in JSON format. `report.json`_

#### chartBubbles
Type: `String`  Default: `null`

_Path to save Bubbles chart, in SVG format. `charts.svg`_

#### level
Type: `Integer`  Default: `null`

_Depth of summary report. `3`_

#### extensions
Type: `String`  Default: `null`

_Regex of extensions to include. `php|inc`_

#### excludedDirs
Type: `String`  Default: `null`

_Regex of subdirectories to exclude. `cache|vendor`_

#### symlinks
Type: `Boolean`  Default: `null`

_Enable following symlinks. _

#### withoutOOP
Type: `Boolean`  Default: `null`

_If provided, tool will not extract any information about OOP model (faster)._

#### failureCondition
Type: `String`  Default: `null`

_Optional failure condition, in english. Example: `average.maintainabilityIndex < 50 or sum.loc > 10000`_

#### templateTitle
Type: `String`  Default: `null`

_Title for the HTML summary report_

_@see [https://github.com/zarubatomas/grunt-phpmetrics](https://github.com/zarubatomas/grunt-phpmetrics)._