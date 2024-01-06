#!/bin/sh

NVM_DIR=$HOME/.nvm
NODE_DIR=$NVM_DIR/versions/node/v20.10.0/bin
NODE=$NODE_DIR/node
APP_DIR=$HOME/scripts/calsync
APP=$APP_DIR/dist/app.js

source $NVM_DIR/nvm.sh && cd $APP_DIR && $NODE $APP

