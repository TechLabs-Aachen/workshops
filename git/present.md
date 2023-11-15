---
title: Git Workshop
author: TechLabs Aachen e.V.
---

# Git Workshop 🎉

> Git is a very popular tool for version control! 

A workshop by TechLabs Aachen e.V.


## What is Version Control?

When we code, we will often... 
- ...**make mistakes** 😱. How do we revert changes? (CTRL+Z right?)
- ...**work with others** 👨👩👧👦. How do we merge our code together? (Copy and paste right?)

But what if...
- we close our editor? (CTRL+Z doesn't work anymore)
- don't have a proper way we organize collaboration? (Copy and paste is
tedious, who keeps track of what?)

We could do all of this manually but with a small tool, we can automate all of this!

> Question: How do you backup/manage history of files e.g. for your thesis?

<!-- end_slide -->


> Question: Do you prefer the easy or the hard way of learning git?


<!-- end_slide -->

# First Principles of Git

## To be able to revert changes, we make a snapshot!

A snapshot is a **copy** of the file at a certain point in time.

```
[ file ] - change+save -> [ file ] - change+save -> ...
    \                        \
<snapshot>               <snapshot>

```
These snapshots are called **commits**. We store those commits in a kind of log.

<!-- end_slide -->

## Git operates in repositories

A repository is a folder! Intuitively, we don't want to store our whole hard drive
on snapshots but only the stuff we are working on.

We can create a repository like so (the current directory will be the repository):
```
❯ git init
```

(We will talk about other, maybe more common, ways to do this later)

## To share code, we synchronize a history of our snapshots!

> What does that mean???

To understand this, we have to talk about Git's state model first!


<!-- end_slide -->

# Git's State Model

Git has **3 different states** for each file:

- **Modified**: The file has been changed but not committed.
- **Staged**: The file has been marked to be committed.
- **Committed**: The file has been committed i.e. snapshot is saved in our log.

The state automata could be draw like so
```
[committed] - change -> [ modified ] - staging -> [ staged ] - committing -> [ committed ] -> ...
```

<!-- end_slide -->

# Modified Files

We may change files. This automatically puts them in the modified state.

```
                ><
[committed] - change -> [ modified ] - staging -> [ staged ] - committing -> [ committed ] -> ...
```

We can modify files
- by changing the contents of the file
- by creating a new file
- by deleting an existing file

<!-- end_slide -->

## **How do we find out the state of our files?**

```
❯ git status
On branch main                                                  <-- we will introduce branches later
Changes not staged for commit: 
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   a.txt                                       <-- a file in modified state

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        b.txt                                                   <-- a file in untracked state

no changes added to commit (use "git add" and/or "git commit -a")
```


## What files are in the modified state?

> That's easy! It is `a.txt`. Sometimes you will see things like `name/` (note the /)
> this means that all files in that folder are in the modified state.

## Why is the file `b.txt` in `untracked` ?

> Untracked files are files with some changes file that has never been committed yet. 
> We can handle them like just like modified files.


<!-- end_slide -->

# Staged Files
```
                                          ><
[committed] - change -> [ modified ] - staging -> [ staged ] - committing -> [ committed ] -> ...
```

We can stage files like so: 

```
❯ git add .
```
> We can use `.` to specify that we want to stage all files in the current
> directory (and nested directories).

Alternatively, we can also stage files individually:

```
❯ git add a.txt 
❯ git add b.txt
```

Now, we can check the status again:
```
❯ git status
On branch main
Changes to be committed:                                       <-- list of files in staged state
  (use "git restore --staged <file>..." to unstage)
        modified:   a.txt
        new file:   b.txt
```

Now we see both files are marked as staged.

> Question: Why would one want to stage files? Why not just commit everything
> we changed from the last change?

---

<!-- end_slide -->

# Committed Files
```
                                                                   ><
[committed] - change -> [ modified ] - staging -> [ staged ] - committing -> [ committed ] -> ...
```

Once we staged our files, we can commit them like so:
```
❯ git commit -m "cool changes"
[main 9d26ee1] cool changes
 2 files changed, 1 insertion(+)
 create mode 100644 b.txt
```
> You are required to add a commit message in `"..."`! Typically, you want to
> describe what modifications you made here.

<!-- end_slide -->

# TLDR: Basic Git Workflow (for now)

A file can be in 3 different states:

- **Modified**: The file has been changed but not committed.
- **Staged**: The file has been marked to be committed.
- **Committed**: The file has been committed i.e. snapshot is saved in our log.

## Workflow

1. Make changes to your files e.g. using a text editor
2. Stage your files using `git add .` (all files in a folder) or `git add
   <file>` (specific file)
3. Commit your files using `git commit -m "commit message"`. Use a meaningful
   commit message!
4. Profit!?!

You can inspect the current state you are in using `git status` at any time to see:
- files that are modified or untracked
- files that are staged

Side note: You need to configure your identity before you can commit anything. In a 
nutshell, you need to set a username and email address to any commit to allow 
others to know who did what.

This will set your username and email address globally (for all repositories of user):
```
❯ git config --global user.name "John Doe"
❯ git config --global user.email "John.Doe@gmail.com"
```

This will set your username and email address for the current repository only:
```
❯ git config user.name "John Doe"
❯ git config user.email "John.Doe@gmail.com"
```

The later one will overwrite the global settings!

<!-- end_slide -->

# Our first Promise: Reverting changes

One of the promises of Git is that we can revert changes easily without relying on 
the mercy of our text editor! For that, we need to know the **history** of our
commits to pick one to go back to.

We can easily do that using 

```
❯ git log
commit 764307dd560a27bb4c0d6477745851922b3d26f0 (HEAD -> main)  <-- this is the commit hash
Author: v4nderstruck <zensayyy@gmail.com>
Date:   Fri Oct 6 14:48:43 2023 +0200

    much cooler change                                          <= this is the commit message

commit 9d26ee1a739b18fb0c345750e3ef09aca5f6644b                 <-- this is the commit hash
Author: v4nderstruck <zensayyy@gmail.com>
Date:   Fri Oct 6 12:43:27 2023 +0200

    cool changes                                                <= this is the commit message
```

<!-- end_slide -->

Here, we have the history of 2 commits with their commit message, author and date.
Note that there also is a **commit hash** (the long string of numbers and letters). 
We can use this hash to reference the commit we want to go back to.

Let's say we want to go back to the commit with the message `cool changes`. We can do
that like so:

```
❯ git reset 9d26ee1                <-- dont have to type the whole hash, just enough to be unique (use TAB)
HEAD is now at 9d26ee1 cool changes
```
This will undo all the changes after the commit with the given hash. You can undo a 
reset with `git reset HEAD@{1}`.

> Question:  How do we know what a good commit to go back is?

<!-- end_slide -->

# Our second Promise: Effective Collaboration

Great! We can now revert changes but what about working with others? But how
can we overcome our organizational problems?

## Branching

When working in a group, ideally, group members want to work on different
things at the same time since this parallelizes work! Git allows us to do that
using **branches**.

> A branch is a history or timeline of commits.

Naturally, there must be one branch (often referred to as `main`) because a
branch is a history of commits!

<!-- end_slide -->

We can view all branches using 

```
❯ git branch
* main           <-- this is the current the repository is set to, indicated by *
```

In other words, here all commits you create will be added to the `main` branch or
`main` timeline. With this concept, each group member can work on their own
branch from now on. For example, we may end up in a situation like this:

```
                                             +--------------+    
                                             |              |    
                              branch-b      /-   commit#3   |    
                                          /- |              |    
                                       /--   +--------------+    
                                     /-                          
          +--------------+  +--------------+                     
          |              |  |              |                     
 main     |   commit#1   |  |   commit#2   |                     
          |              |  |              |                     
          +--------------+  +-------\------+                     
                                     -\                          
                                       --\   +--------------+    
                                          -\ |              |    
                              branch-a      --   commit#3   |    
                                             |              |    
                                             +--------------+
```

> Question: Remember reverting? Could we revert branch-a to `commit#2`?

<!-- end_slide -->

# Creating branches & switching between them 

To create a branch of our own, we can use the following command:
```
❯ git checkout -b branch-a
Switched to a new branch 'branch-a'
```

The flag `-b <name>` will create a new branch and set our current active branch to
our new branch. Hence, if we run `git branch` again:

```
❯ git branch
* branch-a                        <-- we are now on branch-a
  main
```

Remember, all commits will be added to the current active branch. So, with this 
configuration, all commits will be added to `branch-a` instead of `main`.

But how would one go back to the `main` branch? We can simply use: 

```
❯ git checkout main
Switched to branch 'main'
```

You could imagine that another collaborator would create `branch-b` and work on
it instead, while you can work (and commit!) to your branch `branch-a` without
running into any conflicts.

> Question: What would happen with our modification and commits when we switch branches?
Are they gone??

<!-- end_slide -->

# Merging branches

Now, let's we are is done with our work. In this case, we want our changes to 
- be added to a branch that everybody agrees to be the 'this is what we want'
- shared with other collaborators so that they can benefit from our work

<!-- end_slide -->

The first one is quite easy! Typically, the `main` branch is the one that everybody 
agrees on to be the 'this stuff here is working'. Hence, we would only have to merge
our `branch-a` to `main`.

```
                                             +--------------+                                            
                                             |              |                                            
                              branch-b      /-   commit#3   |                                            
                                          /- |              |                                            
                                       /--   +--------------+                                            
                                     /-                                +-------------------+             
          +--------------+  +--------------+                           |                   |             
          |              |  |              |                           |   commit#3        |             
 main     |   commit#1   |  |   commit#2   |---------------------------|   from branch-a   |             
          |              |  |              |                        -/ |                   |             
          +--------------+  +-------\------+                      -/   +-------------------+            
                                     -\                          /                                       
                                       --\   +--------------+  -/                                        
                                          -\ |              |-/                                          
                              branch-a      --   commit#3   /   MERGED to main                           
                                             |              |                                            
                                             +--------------+                                            
```


<!-- end_slide -->

We will show how to do this next...

But let's think about how to we can satisfy the second goal? It turns out that
so far, we have never really add other collaborators to our own repository. In
fact, everything that happened so far was done locally on our own machine.
Hence, there is no proper way to share our code!

> Question: How would `branch-b` now merge to `main` (after `branch-a` already did)? 

<!-- end_slide -->

# Remote Repositories

The later problem is so common that there are services that provide a way to
solve this. Most prominent examples are [Github](https://github.com) or
[GitLab](https://gitlab.com"). (We use Github at TechLabs Aachen!)

To be able to share our code, we must link our local repository to a remote repository!
There are two main ways to do this:
- create a remote repository and clone it to your PC 
- create a local repository and link/push it to a remote repository

<!-- end_slide -->

## Cloning

Following this approach, one would create or find an existing remote repository
e.g. using the Github website. Then, we would simply do 

```
❯ git clone <url>                <-- url of the remote repository found on the website
```

This will create a new folder with the name of the repository and copy the
remotely stored files into your local folder. This is the easiest way to get
started!

<!-- end_slide -->

## Adding Remote Repositories

We could also go the other way and create a local repository on our PC and link it 
to the remote repository. We know that we can create a local repository using `git init`.
To link this repository to a remote repository, we can use:

```
❯ git remote add origin <url>
```

Note that we must still create the remote repository on Github first (to get a
`url` that we can link to)!

> Question: Why do we need the second method??

<!-- end_slide -->

# Syncing with Remote Repositories

Now, that we understand the concept of remote repositories, we need a way to 
- get changes from the remote to our local repository
- push changes from our local to the remote repository

Remember, this only works properly after we linked our local repository to a remote.

<!-- end_slide -->

## Getting changes from the remote repositories

"Getting changes" is somewhat ambiguous tho. We know that there are commits
stored in branches. So what do we mean by "getting changes"? 
- We could mean that we want to get the commits of a remote branch and apply it
to our local branch.
- We could also mean that we want to get the commits of a remote branch only!

To achieve the first one, we can use 

```
❯ git pull
```

This looks up any commits in the remote repositories on our branch, collects them and 
copies them to our local branch advancing your commit history. This only
adds commits to your local branch, so `pull` will not add commits on any other
branch on your local repository but only the active one. 

<!-- end_slide -->

For our second options, we can use 
```
❯ git fetch
remote: Counting objects: 43, done.
remote: Compressing objects: 100% (36/36), done.
remote: Total 43 (delta 10), reused 31 (delta 5)
Unpacking objects: 100% (43/43), done.
From https://github.com/paulboone/ticgit
 * [new branch]      branch-b     -> origin/branch-b     <--- now we can access branch-b from our teammate!
```

This will only find new branches and commits on the remote repository and copy
that information to your local repository without advancing your local
branches! (Actually, that's a lie, but this is is good enough for us now!) 
Internally, `pull` will also perform a `fetch` first!

> Question: When would we want to use `fetch` over `pull`?

> Question: How would we switch to `branch-b` now?

<!-- end_slide -->

# Pushing our changes to the remote repository

Only one more concept left! We want to push our changes to the remote
repository so that others can sync their local repository with our changes. That's 
rather easy! We can use

```
❯ git push
```

This will take all commits we added to our local active branch and push them to the 
linked remote branch (rather the new commits). Again, this synchronizes only 
the **commits**  NOT e.g. modified files (You should understand the difference now!).

Anyhow, there is one caveat! You can only push to a remote branch if they are linked!
We already showed you how to link local repositories to remote repositories. Similarly, 
we can link local branches to remote branches using:
- by pushing our local branch first and pushing it to the remote branch
- by creating the remote branch first and checking it out

Let's start with the first one. We can push a local branch to a remote branch like so:
```
❯ git push -set-upstream origin branch-a
```
Btw: this your git will also give you this tip if you forget to do this! It will create 
the remote branch named `branch-a` and apply your commits to it. 

<!-- end_slide -->

Alternatively, we can visit e.g. GitHub and create a remote branch in their web
interface. You should know how checkout this branch!

> Question: How would you switch to that branch?

> Question: When would you want to use the second method over the first one?

<!-- end_slide -->

# TLDR; Wrapping up everything

## Getting Git Repositories

- Using the remote repository
  - create a remote repository or find an existing one
  - Clone the remote repository to your local machine `git clone <url>`
  - NOTE: will create a local directory with the name of the remote repository
- Using the local repository
  - Create a local repository `git init`
  - Create a remote repository 
  - Link it to a remote repository `git remote add origin <url>`
- set your identity using 
  - `git config --global user.name "John Doe"`
  - `git config --global user.email "John.Doe@gmail.com"`
  - or
  - `git config user.name "John Doe"`
  - `git config user.email "John.Doe@gmail.com"`

## Basic workflow

- Make changes to your files
- Stage your files `git add .` or `git add <file>`
- Commit your files `git commit -m "commit message"`
- Push your changes to the remote repository `git push`
  - alternatively, your need to `git push -set-upstream origin <branch>` if
  there is no linked remote branch


## Undoing changes

- view history of commits using `git log`
- Undo changes to a file using `git reset <hash>`

## Branching & Remote Repositories

- Switch between existing branches using `git checkout <branch>`
- Create a branch 
  - using `git checkout -b <branch>` to create a local branch 
  - using the web interface of your remote repository (then `fetch` and `checkout`)
- Getting changes from the remote repository
  - `git pull` to get changes from the remote repository and merge changes on current branch
  - `git fetch` to get changes from the remote repository only
- Pushing changes to the remote repository
  - `git push` to push commits of the current branch to the remote repository (already linked)
  - `git push -set-upstream origin <branch>` to create a remote branch and push commits to it


