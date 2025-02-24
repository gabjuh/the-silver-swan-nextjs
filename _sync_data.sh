#!/bin/bash

node getData_server.js
python3 download-image-subprocess.py
bash uploadFiles.sh
