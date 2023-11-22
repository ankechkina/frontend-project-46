install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint --fix .
	
test:
	npx jest
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8