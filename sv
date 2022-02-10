#!/bin/sh

now="$(date)"
git add .
git commit -m "$now"
git push origin 2_players_only
