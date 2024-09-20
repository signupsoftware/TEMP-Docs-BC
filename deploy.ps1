$currentDate = Get-Date -Format "yyyy-MM-dd"
$branchName = "Sofia_N_" + $currentDate

git checkout -b $branchName
git add .
git commit -m "$1"
git push origin $branchName

Write-Output " --- Done!";
