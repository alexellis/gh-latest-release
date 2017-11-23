#!/bin/sh

docker exec -ti $(docker ps |grep git-tar|cut -f 1 -d" ") sh
