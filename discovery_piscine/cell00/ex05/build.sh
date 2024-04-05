#!/bin/bash

if [ $# -eq 0 ]; then
 echo "No arguments supplied"
fi

for directorio in "$@"; do

nuevo_directorio="ex${directorio}"

mkdir "$nuevo_directorio"

chmod 755 "$nuevo_directorio"

done
