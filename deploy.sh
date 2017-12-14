#!/bin/bash
rm -rf server/public/*
cd client
ng build --prod --aot=false
cd ..
mv client/dist/* server/public
git add ./server/public
git commit -am "Ready to deploy"
git subtree push --prefix=server heroku master∫
