# fix-deps
Fix the npm dep version to the current installed version 

## How to use 

From the repo you want to fix versinos run the following

```bash
npm install
```

```bash
npx fix-deps -s
```

Command params:
- s: single mode - updates the current repo you are in 
- d: dry run - run the flow and outputs what would be update, but does not change the package file 
