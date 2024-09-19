# Step 1: Create a new branch
$currentDate = Get-Date -Format "yyyy-MM-dd"
$branchName = "ErikOA_" + $currentDate

$comment=$args[0]
if (!$args[0]) { 
	$comment = "Latest changes"
}

git checkout -b $branchName

# Step 2: Stash all changes
git stash

# Step 3: Create a new pull request (using GitHub CLI)
# Make sure you have GitHub CLI installed and authenticated
# gh pr create --title $branchName --body "Description of the new feature"
gh pr create --title $branchName

# Step 4: Commit all changes to the main branch
git checkout main
git pull origin main
git stash pop
git add .
git commit -m $comment
git push origin main

