$ErrorActionPreference = "Stop"

npm run build

Set-Location dist

if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
}

git init
git add -A
git commit -m "deploy"

git branch -M gh-pages

git remote add origin "https://github.com/TheGBO/thegbo.github.io.git"

git push -f origin gh-pages

Set-Location ..

Remove-Item -Recurse -Force "dist/.git"
