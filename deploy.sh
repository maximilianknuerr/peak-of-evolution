npm run build

git add dist -f && git commit -m "updated dist for deploy"

git subtree push --prefix dist origin gh-pages   