#!bin/bash

gcc -o window window.c `pkg-config --cflags --libs gtk+-3.0`

if [ $? -eq 0 ]; then
    echo "Compilation successful"
else
    echo "Compilation failed"
fi
