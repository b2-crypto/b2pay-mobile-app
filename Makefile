
reset:
	sudo rm -rf node_modules && sudo rm -rf yarn.lock && yarn cache clean && yarn && yarn start

resetnpm:
	sudo rm -rf node_modules && npm cache clean && npm i && npm run start

