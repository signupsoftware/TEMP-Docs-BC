$currentDate = Get-Date -Format "yyyy-MM-dd"
$branchName = "Erik_A_" + $currentDate

git checkout -b $branchName
git add .
git commit -m "$1"
git push origin $branchName

Write-Output "Done!";
