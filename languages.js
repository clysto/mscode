export async function getLanguage(languageName) {
  switch (languageName) {
    case '1c':
      return await import('highlight.js/lib/languages/1c');

    case 'abnf':
      return await import('highlight.js/lib/languages/abnf');

    case 'accesslog':
      return await import('highlight.js/lib/languages/accesslog');

    case 'actionscript':
      return await import('highlight.js/lib/languages/actionscript');

    case 'ada':
      return await import('highlight.js/lib/languages/ada');

    case 'angelscript':
      return await import('highlight.js/lib/languages/angelscript');

    case 'apache':
      return await import('highlight.js/lib/languages/apache');

    case 'applescript':
      return await import('highlight.js/lib/languages/applescript');

    case 'arcade':
      return await import('highlight.js/lib/languages/arcade');

    case 'arduino':
      return await import('highlight.js/lib/languages/arduino');

    case 'armasm':
      return await import('highlight.js/lib/languages/armasm');

    case 'xml':
      return await import('highlight.js/lib/languages/xml');

    case 'asciidoc':
      return await import('highlight.js/lib/languages/asciidoc');

    case 'aspectj':
      return await import('highlight.js/lib/languages/aspectj');

    case 'autohotkey':
      return await import('highlight.js/lib/languages/autohotkey');

    case 'autoit':
      return await import('highlight.js/lib/languages/autoit');

    case 'avrasm':
      return await import('highlight.js/lib/languages/avrasm');

    case 'awk':
      return await import('highlight.js/lib/languages/awk');

    case 'axapta':
      return await import('highlight.js/lib/languages/axapta');

    case 'bash':
      return await import('highlight.js/lib/languages/bash');

    case 'basic':
      return await import('highlight.js/lib/languages/basic');

    case 'bnf':
      return await import('highlight.js/lib/languages/bnf');

    case 'brainfuck':
      return await import('highlight.js/lib/languages/brainfuck');

    case 'c-like':
      return await import('highlight.js/lib/languages/c-like');

    case 'c':
      return await import('highlight.js/lib/languages/c');

    case 'cal':
      return await import('highlight.js/lib/languages/cal');

    case 'capnproto':
      return await import('highlight.js/lib/languages/capnproto');

    case 'ceylon':
      return await import('highlight.js/lib/languages/ceylon');

    case 'clean':
      return await import('highlight.js/lib/languages/clean');

    case 'clojure':
      return await import('highlight.js/lib/languages/clojure');

    case 'clojure-repl':
      return await import('highlight.js/lib/languages/clojure-repl');

    case 'cmake':
      return await import('highlight.js/lib/languages/cmake');

    case 'coffeescript':
      return await import('highlight.js/lib/languages/coffeescript');

    case 'coq':
      return await import('highlight.js/lib/languages/coq');

    case 'cos':
      return await import('highlight.js/lib/languages/cos');

    case 'cpp':
      return await import('highlight.js/lib/languages/cpp');

    case 'crmsh':
      return await import('highlight.js/lib/languages/crmsh');

    case 'crystal':
      return await import('highlight.js/lib/languages/crystal');

    case 'csharp':
      return await import('highlight.js/lib/languages/csharp');

    case 'csp':
      return await import('highlight.js/lib/languages/csp');

    case 'css':
      return await import('highlight.js/lib/languages/css');

    case 'd':
      return await import('highlight.js/lib/languages/d');

    case 'markdown':
      return await import('highlight.js/lib/languages/markdown');

    case 'dart':
      return await import('highlight.js/lib/languages/dart');

    case 'delphi':
      return await import('highlight.js/lib/languages/delphi');

    case 'diff':
      return await import('highlight.js/lib/languages/diff');

    case 'django':
      return await import('highlight.js/lib/languages/django');

    case 'dns':
      return await import('highlight.js/lib/languages/dns');

    case 'dockerfile':
      return await import('highlight.js/lib/languages/dockerfile');

    case 'dos':
      return await import('highlight.js/lib/languages/dos');

    case 'dsconfig':
      return await import('highlight.js/lib/languages/dsconfig');

    case 'dts':
      return await import('highlight.js/lib/languages/dts');

    case 'dust':
      return await import('highlight.js/lib/languages/dust');

    case 'ebnf':
      return await import('highlight.js/lib/languages/ebnf');

    case 'elixir':
      return await import('highlight.js/lib/languages/elixir');

    case 'elm':
      return await import('highlight.js/lib/languages/elm');

    case 'ruby':
      return await import('highlight.js/lib/languages/ruby');

    case 'erb':
      return await import('highlight.js/lib/languages/erb');

    case 'erlang-repl':
      return await import('highlight.js/lib/languages/erlang-repl');

    case 'erlang':
      return await import('highlight.js/lib/languages/erlang');

    case 'excel':
      return await import('highlight.js/lib/languages/excel');

    case 'fix':
      return await import('highlight.js/lib/languages/fix');

    case 'flix':
      return await import('highlight.js/lib/languages/flix');

    case 'fortran':
      return await import('highlight.js/lib/languages/fortran');

    case 'fsharp':
      return await import('highlight.js/lib/languages/fsharp');

    case 'gams':
      return await import('highlight.js/lib/languages/gams');

    case 'gauss':
      return await import('highlight.js/lib/languages/gauss');

    case 'gcode':
      return await import('highlight.js/lib/languages/gcode');

    case 'gherkin':
      return await import('highlight.js/lib/languages/gherkin');

    case 'glsl':
      return await import('highlight.js/lib/languages/glsl');

    case 'gml':
      return await import('highlight.js/lib/languages/gml');

    case 'go':
      return await import('highlight.js/lib/languages/go');

    case 'golo':
      return await import('highlight.js/lib/languages/golo');

    case 'gradle':
      return await import('highlight.js/lib/languages/gradle');

    case 'groovy':
      return await import('highlight.js/lib/languages/groovy');

    case 'haml':
      return await import('highlight.js/lib/languages/haml');

    case 'handlebars':
      return await import('highlight.js/lib/languages/handlebars');

    case 'haskell':
      return await import('highlight.js/lib/languages/haskell');

    case 'haxe':
      return await import('highlight.js/lib/languages/haxe');

    case 'hsp':
      return await import('highlight.js/lib/languages/hsp');

    case 'htmlbars':
      return await import('highlight.js/lib/languages/htmlbars');

    case 'http':
      return await import('highlight.js/lib/languages/http');

    case 'hy':
      return await import('highlight.js/lib/languages/hy');

    case 'inform7':
      return await import('highlight.js/lib/languages/inform7');

    case 'ini':
      return await import('highlight.js/lib/languages/ini');

    case 'irpf90':
      return await import('highlight.js/lib/languages/irpf90');

    case 'isbl':
      return await import('highlight.js/lib/languages/isbl');

    case 'java':
      return await import('highlight.js/lib/languages/java');

    case 'javascript':
      return await import('highlight.js/lib/languages/javascript');

    case 'jboss-cli':
      return await import('highlight.js/lib/languages/jboss-cli');

    case 'json':
      return await import('highlight.js/lib/languages/json');

    case 'julia':
      return await import('highlight.js/lib/languages/julia');

    case 'julia-repl':
      return await import('highlight.js/lib/languages/julia-repl');

    case 'kotlin':
      return await import('highlight.js/lib/languages/kotlin');

    case 'lasso':
      return await import('highlight.js/lib/languages/lasso');

    case 'latex':
      return await import('highlight.js/lib/languages/latex');

    case 'ldif':
      return await import('highlight.js/lib/languages/ldif');

    case 'leaf':
      return await import('highlight.js/lib/languages/leaf');

    case 'less':
      return await import('highlight.js/lib/languages/less');

    case 'lisp':
      return await import('highlight.js/lib/languages/lisp');

    case 'livecodeserver':
      return await import('highlight.js/lib/languages/livecodeserver');

    case 'livescript':
      return await import('highlight.js/lib/languages/livescript');

    case 'llvm':
      return await import('highlight.js/lib/languages/llvm');

    case 'lsl':
      return await import('highlight.js/lib/languages/lsl');

    case 'lua':
      return await import('highlight.js/lib/languages/lua');

    case 'makefile':
      return await import('highlight.js/lib/languages/makefile');

    case 'mathematica':
      return await import('highlight.js/lib/languages/mathematica');

    case 'matlab':
      return await import('highlight.js/lib/languages/matlab');

    case 'maxima':
      return await import('highlight.js/lib/languages/maxima');

    case 'mel':
      return await import('highlight.js/lib/languages/mel');

    case 'mercury':
      return await import('highlight.js/lib/languages/mercury');

    case 'mipsasm':
      return await import('highlight.js/lib/languages/mipsasm');

    case 'mizar':
      return await import('highlight.js/lib/languages/mizar');

    case 'perl':
      return await import('highlight.js/lib/languages/perl');

    case 'mojolicious':
      return await import('highlight.js/lib/languages/mojolicious');

    case 'monkey':
      return await import('highlight.js/lib/languages/monkey');

    case 'moonscript':
      return await import('highlight.js/lib/languages/moonscript');

    case 'n1ql':
      return await import('highlight.js/lib/languages/n1ql');

    case 'nginx':
      return await import('highlight.js/lib/languages/nginx');

    case 'nim':
      return await import('highlight.js/lib/languages/nim');

    case 'nix':
      return await import('highlight.js/lib/languages/nix');

    case 'node-repl':
      return await import('highlight.js/lib/languages/node-repl');

    case 'nsis':
      return await import('highlight.js/lib/languages/nsis');

    case 'objectivec':
      return await import('highlight.js/lib/languages/objectivec');

    case 'ocaml':
      return await import('highlight.js/lib/languages/ocaml');

    case 'openscad':
      return await import('highlight.js/lib/languages/openscad');

    case 'oxygene':
      return await import('highlight.js/lib/languages/oxygene');

    case 'parser3':
      return await import('highlight.js/lib/languages/parser3');

    case 'pf':
      return await import('highlight.js/lib/languages/pf');

    case 'pgsql':
      return await import('highlight.js/lib/languages/pgsql');

    case 'php':
      return await import('highlight.js/lib/languages/php');

    case 'php-template':
      return await import('highlight.js/lib/languages/php-template');

    case 'plaintext':
      return await import('highlight.js/lib/languages/plaintext');

    case 'pony':
      return await import('highlight.js/lib/languages/pony');

    case 'powershell':
      return await import('highlight.js/lib/languages/powershell');

    case 'processing':
      return await import('highlight.js/lib/languages/processing');

    case 'profile':
      return await import('highlight.js/lib/languages/profile');

    case 'prolog':
      return await import('highlight.js/lib/languages/prolog');

    case 'properties':
      return await import('highlight.js/lib/languages/properties');

    case 'protobuf':
      return await import('highlight.js/lib/languages/protobuf');

    case 'puppet':
      return await import('highlight.js/lib/languages/puppet');

    case 'purebasic':
      return await import('highlight.js/lib/languages/purebasic');

    case 'python':
      return await import('highlight.js/lib/languages/python');

    case 'python-repl':
      return await import('highlight.js/lib/languages/python-repl');

    case 'q':
      return await import('highlight.js/lib/languages/q');

    case 'qml':
      return await import('highlight.js/lib/languages/qml');

    case 'r':
      return await import('highlight.js/lib/languages/r');

    case 'reasonml':
      return await import('highlight.js/lib/languages/reasonml');

    case 'rib':
      return await import('highlight.js/lib/languages/rib');

    case 'roboconf':
      return await import('highlight.js/lib/languages/roboconf');

    case 'routeros':
      return await import('highlight.js/lib/languages/routeros');

    case 'rsl':
      return await import('highlight.js/lib/languages/rsl');

    case 'ruleslanguage':
      return await import('highlight.js/lib/languages/ruleslanguage');

    case 'rust':
      return await import('highlight.js/lib/languages/rust');

    case 'sas':
      return await import('highlight.js/lib/languages/sas');

    case 'scala':
      return await import('highlight.js/lib/languages/scala');

    case 'scheme':
      return await import('highlight.js/lib/languages/scheme');

    case 'scilab':
      return await import('highlight.js/lib/languages/scilab');

    case 'scss':
      return await import('highlight.js/lib/languages/scss');

    case 'shell':
      return await import('highlight.js/lib/languages/shell');

    case 'smali':
      return await import('highlight.js/lib/languages/smali');

    case 'smalltalk':
      return await import('highlight.js/lib/languages/smalltalk');

    case 'sml':
      return await import('highlight.js/lib/languages/sml');

    case 'sqf':
      return await import('highlight.js/lib/languages/sqf');

    case 'sql_more':
      return await import('highlight.js/lib/languages/sql_more');

    case 'sql':
      return await import('highlight.js/lib/languages/sql');

    case 'stan':
      return await import('highlight.js/lib/languages/stan');

    case 'stata':
      return await import('highlight.js/lib/languages/stata');

    case 'step21':
      return await import('highlight.js/lib/languages/step21');

    case 'stylus':
      return await import('highlight.js/lib/languages/stylus');

    case 'subunit':
      return await import('highlight.js/lib/languages/subunit');

    case 'swift':
      return await import('highlight.js/lib/languages/swift');

    case 'taggerscript':
      return await import('highlight.js/lib/languages/taggerscript');

    case 'yaml':
      return await import('highlight.js/lib/languages/yaml');

    case 'tap':
      return await import('highlight.js/lib/languages/tap');

    case 'tcl':
      return await import('highlight.js/lib/languages/tcl');

    case 'thrift':
      return await import('highlight.js/lib/languages/thrift');

    case 'tp':
      return await import('highlight.js/lib/languages/tp');

    case 'twig':
      return await import('highlight.js/lib/languages/twig');

    case 'typescript':
      return await import('highlight.js/lib/languages/typescript');

    case 'vala':
      return await import('highlight.js/lib/languages/vala');

    case 'vbnet':
      return await import('highlight.js/lib/languages/vbnet');

    case 'vbscript':
      return await import('highlight.js/lib/languages/vbscript');

    case 'vbscript-html':
      return await import('highlight.js/lib/languages/vbscript-html');

    case 'verilog':
      return await import('highlight.js/lib/languages/verilog');

    case 'vhdl':
      return await import('highlight.js/lib/languages/vhdl');

    case 'vim':
      return await import('highlight.js/lib/languages/vim');

    case 'x86asm':
      return await import('highlight.js/lib/languages/x86asm');

    case 'xl':
      return await import('highlight.js/lib/languages/xl');

    case 'xquery':
      return await import('highlight.js/lib/languages/xquery');

    case 'zephir':
      return await import('highlight.js/lib/languages/zephir');
  }
}

export function listLanguages() {
  return [
    '1c',
    'abnf',
    'accesslog',
    'actionscript',
    'ada',
    'angelscript',
    'apache',
    'applescript',
    'arcade',
    'arduino',
    'armasm',
    'xml',
    'asciidoc',
    'aspectj',
    'autohotkey',
    'autoit',
    'avrasm',
    'awk',
    'axapta',
    'bash',
    'basic',
    'bnf',
    'brainfuck',
    'c-like',
    'c',
    'cal',
    'capnproto',
    'ceylon',
    'clean',
    'clojure',
    'clojure-repl',
    'cmake',
    'coffeescript',
    'coq',
    'cos',
    'cpp',
    'crmsh',
    'crystal',
    'csharp',
    'csp',
    'css',
    'd',
    'markdown',
    'dart',
    'delphi',
    'diff',
    'django',
    'dns',
    'dockerfile',
    'dos',
    'dsconfig',
    'dts',
    'dust',
    'ebnf',
    'elixir',
    'elm',
    'ruby',
    'erb',
    'erlang-repl',
    'erlang',
    'excel',
    'fix',
    'flix',
    'fortran',
    'fsharp',
    'gams',
    'gauss',
    'gcode',
    'gherkin',
    'glsl',
    'gml',
    'go',
    'golo',
    'gradle',
    'groovy',
    'haml',
    'handlebars',
    'haskell',
    'haxe',
    'hsp',
    'htmlbars',
    'http',
    'hy',
    'inform7',
    'ini',
    'irpf90',
    'isbl',
    'java',
    'javascript',
    'jboss-cli',
    'json',
    'julia',
    'julia-repl',
    'kotlin',
    'lasso',
    'latex',
    'ldif',
    'leaf',
    'less',
    'lisp',
    'livecodeserver',
    'livescript',
    'llvm',
    'lsl',
    'lua',
    'makefile',
    'mathematica',
    'matlab',
    'maxima',
    'mel',
    'mercury',
    'mipsasm',
    'mizar',
    'perl',
    'mojolicious',
    'monkey',
    'moonscript',
    'n1ql',
    'nginx',
    'nim',
    'nix',
    'node-repl',
    'nsis',
    'objectivec',
    'ocaml',
    'openscad',
    'oxygene',
    'parser3',
    'pf',
    'pgsql',
    'php',
    'php-template',
    'plaintext',
    'pony',
    'powershell',
    'processing',
    'profile',
    'prolog',
    'properties',
    'protobuf',
    'puppet',
    'purebasic',
    'python',
    'python-repl',
    'q',
    'qml',
    'r',
    'reasonml',
    'rib',
    'roboconf',
    'routeros',
    'rsl',
    'ruleslanguage',
    'rust',
    'sas',
    'scala',
    'scheme',
    'scilab',
    'scss',
    'shell',
    'smali',
    'smalltalk',
    'sml',
    'sqf',
    'sql_more',
    'sql',
    'stan',
    'stata',
    'step21',
    'stylus',
    'subunit',
    'swift',
    'taggerscript',
    'yaml',
    'tap',
    'tcl',
    'thrift',
    'tp',
    'twig',
    'typescript',
    'vala',
    'vbnet',
    'vbscript',
    'vbscript-html',
    'verilog',
    'vhdl',
    'vim',
    'x86asm',
    'xl',
    'xquery',
    'zephir',
  ];
}
