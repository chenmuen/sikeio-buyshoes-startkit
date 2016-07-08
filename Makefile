.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js,build/app.js'

.PHONY: js
js:
	mkdir -p build
	webpack --watch --progress -d --module-bind "jsx=babel" --module-bind "js=babel" js/app.jsx build/app.js

.PHONY: minjs
minjs:
	rm -r build
	mkdir -p build
	webpack --watch --progress -d --module-bind "jsx=babel" --module-bind "js=babel" js/app.jsx build/app.js

.PHONY: clean
clean:
	rm -r bundle
	rm -r build