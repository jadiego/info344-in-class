#!/usr/bin/env bash

#TODO: 
# - create private network,
# - run hellosvc in network with no published ports
# - run gateway in network publishing port 443
#   and using volumes to give it access to your
#   cert and key files in `gateway/tls`
#   and setting environment variables
#    - CERTPATH = path to cert file in container
#    - KEYPATH = path to private key file in container
#    - HELLOADDR = net address of hellosvc container
if [ -z "$(docker network ;s -q -f name=msprivnet)" ]
then
    docker network create msprivnet
fi

docker run -d \
--name hellosvc1 \
--network msprivnet \
jadiego/hellosvc

docker run -d \
--name hellosvc2 \
