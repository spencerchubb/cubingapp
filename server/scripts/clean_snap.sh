#!/bin/bash

# This script removes old revisions of snaps.
# This can help free up disk space.

LANG=en_US.UTF-8 snap list --all | awk '/disabled/{print $1, $3}' |
	while read snapname revision; do
		snap remove "$snapname" --revision="$revision"
	done
