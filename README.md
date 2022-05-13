# smorgasbord-dist

This is a TEMPORARY repository, meant to host files to be deployed to Heroku.


```
cd ~/github/smorgasbord/src
yarn generate
aws s3 rm s3://smorgasbord-dist --recursive
aws s3 cp dist/smorgasbord s3://smorgasbord-dist --recursive 
rm -rf dist/smorgasbord/img/
cd dist
git commit -am “new smorgasbord-list build”
git push 
git push -f heroku main

```

