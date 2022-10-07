git -C $1 add .
git -C $1 commit -m "server commit"
git -C $1 push bitbucket $2
