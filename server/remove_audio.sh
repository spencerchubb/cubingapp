#!/bin/bash

input_dir=$1
output_dir=noaudio/

if [ -z "$input_dir" ]; then
    echo "Usage: ./remove_audio.sh <input_dir>"
    exit 1
fi

before_size=$(du -sh $input_dir | awk '{print $1}')

mkdir -p $output_dir

for file in $input_dir/*; do
    last=${file##*/}
    ffmpeg -i $file -an noaudio/$last
done

echo "Before size: $before_size"
echo "After size: $(du -sh $output_dir | awk '{print $1}')"
