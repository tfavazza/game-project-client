#!/bin/bash

#curl "http://localhost:3000/sign-in" \
curl "http://httpbin.org/post" \
  --include \
  --request POST \
  --data-urlencode ""

echo
