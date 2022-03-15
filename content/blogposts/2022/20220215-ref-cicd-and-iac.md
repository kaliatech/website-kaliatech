---
title: 'Reference: CI/CD and Infrastructure-as-Code'
createdAt: 2022-02-15
description: Informal notes for CI/CD, IaC, and other development best-practices.
category: misc
---

# Thoughts on development

These are my own notes regarding software development. I've written some variant of these notes for multiple companies,
and I decided to post here for future reference. These are informal, include a few opinions, and some arbitrary
nomenclature. These are meant only as guidelines to facilitate discussion, because every environment and team is
different.

## Contents

<blog-post-toc :toc=toc></blog-post-toc>

## Overview

An all encompassing approach to build pipelines and environments organization that fits all types of projects is not
possible. My notes here _generally_ assume a project that is:

* A SaaS web type project that can be deployed.
    * Different pipelines are needed for desktop executables, native mobile apps, hardware integration libraries, etc.
* Has a CI pipeline that will compile, run unit tests, assemble a complete package, and then deploy or upload that
  package somewhere it can be accessed.
* Has some level of continuous deployment. It's project dependent on how automatic and extensive the continuous deploy
  process can be.
* Has multiple feature branches are being worked on simultaneously by multiple developers.
* Deployments to PROD that will usually require a manual approval.
* Require supporting multiple previous versions of components alongside the latest version.

Many of my thoughts follow the [12-factor app principles](https://12factor.net/), and if not familiar, I strongly
suggest reading through it even if it is becoming dated.

Everything should be managed in version control except for secrets and large binaries. This includes all configuration
variables across environments (that aren't secrets), code-as-infrastructure, container creations, and possibly even the
pipelines themselves (more on that below).

All configuration should be externalized such that a given runtime artifact can be configured to run in another
environment without a recompile.

## Development Workstations

Most Saas type projects should be able to be developed on OSX, Windows, Windows with WSL, Linux, etc. It should
generally be developer choice and preference. Making build processes and developer tools work across all platforms
sometimes takes a little extra effort, but I have found that it tends to result in more robust dev environments and
better CI/CD pipelines.

There are exceptions to this depending on project and team. For example:

- Use of docker for development environments can almost make workstation choice irrelevant. (But, using docker for dev
  can have some downsides too.)
- Similarly, the use of cloud based dev environments can make local workstation choice irrelevant.
- Certain projects are inherently platform specific. i.e. Native iOS development, native Windows graphics development,
  etc.
- The availability of WSL on Windows makes Windows specific support in build tools less important. Many teams can/should
  now expect Windows workstation developers do all build activities in WSL (or docker)

## Build Artifacts

Generally, a compiled build, or packaged artifact, should not be added to source control. Artifacts should always be
built automatically, ideally by an automated CI/CD pipeline, resulting in a versioned artifact. That versioned artifact
is then promoted up through the environments or referenced via dependency management. Built artifacts should not be
managed with source control.

Some environments will make use of dependency management systems. In those environments, teams should often consider
setting up a private repository for managing and sharing internally built dependencies.
i.e. [AWS CodeArtifact](https://aws.amazon.com/codeartifact/)
, [JFrog Artifactory](https://jfrog.com/artifactory/), etc.

## Versioning and Releases

Every build package should be [semantically versioned](https://semver.org/). i.e. MAJOR.MINOR.PATCH. How that actually
works is dependent on team and tech stack. I often put an incremental BUILD-NUMBER in place of PATCH, but there are
multiple options. The assigned build version should always be evident somehow and ideally encoded in to the package
name. If there's a UI component, the version should be visible in the UI. It should always be relatively easy for
anyone, even non-technical types, to say "I did/saw/experienced this while using **version X.Y.Z**". And all automatic
logging, error reporting, etc. should be able to include the version number.

There are various conventions that work, but roughly:

* Every shared build gets an incremental BUILDNUM (or incremented PATCH).
* Every "release" results in the MINOR getting incremented. What constitutes a release is dependent on project, but
  usually after something gets pushed to PROD, or is made available to customers, then the working source gets a version
  bump in prep for the next release.
* Very large feature changes, or large backwards incompatible or API breaking changes, should result in MAJOR getting
  incremented.

Note that products might be versioned separately from their components in more complex projects and organizations.

## Git Repo Setup

Projects needing to source control binary files of any significant size should make use
of [Git Large File Storage (LFS)](https://git-lfs.github.com/).

_All_ projects should include a [.gitattributes](https://git-scm.com/docs/gitattributes) file in their root. One reason
is to configure Git LFS, but just as important is to configure consistent and sane line ending handling by git. Or more
specifically, to disable Git's insane default line ending handling.

This is controversial to a few still, but [most would agree](https://stackoverflow.com/a/2361321/123378) that early Git
versions made a mistake by setting the default line ending handling to be "auto". This default makes working on code
across multiple platforms very frustrating, and it can be a hard to diagnose and later fix problem. In modern times,
all (non-windows-specific) source files should be using LF line endings. Every modern IDE supports it without issue.

This:

```gitattributes
*     text eol=lf
```

or _maybe_ this:

```gitattributes
*     text=input
```

but never this (which is the default):

```gitattributes
*     text=auto
```

Some teams expect developers to configure their git install appropriately with `git config --global core.autocrlf false`
, but by using a `.gitattributes`, it becomes a non-issue.

## Code Formatting and Conventions

It's my belief that most modern development environment setups should be able to automatically format and lint code
according to a configuration shared by everyone on the team. For instance, on my JavaScript/TypeScript projects, I will
usually add to source control the configuration files for prettier and eslint. Both VS Code and Intellij IDEA know how
to use them and can even be configured to automatically reformat upon save. The same rules can be applied at build time.
Some teams will even make running prettier/eslint a part of their PR approval process.

Code formatting and convention choices are almost a religious topic to some developers. Having worked across multiple
projects and teams over the years, I've become totally ambivalent. My only suggestions:

- Automate the formatting and any important rules enforcement as much as possible. But try not to over do it. Over
  bearing rules can have quickly diminishing returns and cause frustration.
- Reference an existing syntax/conventions document specific to the language being used. There's little reason to write
  one from scratch. Alternatively, specify team specific conventions only as exceptions to any of the default and common
  industry standard rules for the language/platform being used.

## Branching Patterns

The development world is generally heading towards a set of common patterns, so some of this might seem obvious. Other
parts are very arbitrary with multiple differing opinions that are almost religious.

I previously used GitFlow heavily, but gitflow can be complex to use, and is overkill for many projects. It's now
considered a legacy git workflow by most teams and there are multiple alternatives, with their own trade-offs. Git Flow
still has a place though for teams needing to support multiple product versions simultaneously.

* https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf

This an area where being clear about the distinctions between Cloud vs. Product vs. Continuous-Deployment best practices
and needs is important.

The general procedure though (for gitflow):

* A `/main` branch holds the gold copy of source. It generally represents the latest release. It should always be
  confidently deployable/releasable.

* A `/develop` branch holds the latest code changes shared by developers. Any merge to `/develop` will immediately and
  automatically be built/tested and then deployed to `ALPHA`.
* When needed (for long-lived releases and products), a `/release-x.y.z` branch is created for managing hotfixes, etc.
  This allows work to be done on a release without holding up ongoing development.
* Developers work on `/feature/xxx` and `/bugfix/xxx` branches.
* When a developer completes their unit of work, they submit a PR against `/develop`.
    * Some organizations will automatically run CI and unit tests against the PR when it is created. Many open source
      projects do this on Github.
* When it makes sense, the developer submitting the PR can assign it for review to a specific person. When there is no
  one specific person that should review it (which is ideal on an agile team), then anyone on the team should review
  when they have some time. It becomes a shared responsibility, and usually works well in small teams.
* Reviewer can supply comments, questions, suggestions on the PR. Sometimes a response from the developer is required,
  sometimes not.
* If/when reviewer feels it's acceptable to merge the PR, then they give a simple :thumbsup. At that point, developer
  can merge in with whatever way makes the most sense. (Sometimes as merge, sometimes as a rebase.)
* Developer can then close and delete PR. Most teams will delete the branch at that point, or soon after, too.

Any merge to the `/develop` branch is automatically versioned and built/unit-tested/deployed to the ALPHA environment.

Every build package should generally be available for some period of time. Release builds should be available until
there's no chance of them ever being referenced again.

A separate procedure is used by QA and/or release managers to promote a build to `TEST/BETA/PROD`. The version promoted
will have already been deployed to `ALPHA` first. There is no separate or new version made for releases. Part of the
formal release `PROD` procedure should result in the MINOR version getting incremented, and the BUILDNUM/PATCH reset to
0, for whatever comes next on the `/develop` branch. i.e. v1.0.325 gets released to customers, and at the same time, the
develop branch version gets incremented to 1.1.0.

## Continuous Integration(CI) and Continuous Deployment (CD)

The basic idea for CI is that every incoming unit-of-work from developers is automatically built/tested then made
available for upstream usages. A Jenkins server was commonly used for this in the past, but most modern solutions are
cloud based and much easier to work with. Some popular choices (the first two being ones I'm most familiar with):

* [GitHub Actions](https://github.com/features/actions),
* [AWS CodeBuild](https://aws.amazon.com/codebuild/) / [CodePipeline](https://aws.amazon.com/codepipeline/)
* [Gitlab](https://gitlab.com)
* [TravisCI](https://travis-ci.org/)
* [CircleCI](https://circleci.com/)
* [Atlassian Bamboo](https://www.atlassian.com/software/bamboo)
* [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/)
* [Jenkins](https://jenkins.io/)

Continuous deployment goes further and says that every incoming unit-of-work will get automatically deployed. Generally
teams that refer to CD mean automatically deployment all the way to production, assuming the build passes all the
automated tests along the way. It requires robust automated testing and an experienced team. A worthwhile goal, but not
easy, or common. Continuous deployment, in its truest sense, generally only makes sense for centralized cloud systems.
However, it can also make sense for on-premise products if those products include some sort of automatic built-in update
routine. Again, a worthwhile goal, but not easy, or common.

There are many in-between scenarios for CD. A common one being CI/CD up to a certain stage, but deployment to production
still gate checked by human operator.

## Infrastructure as Code (IaC)

Definition:


> &ldquo;Infrastructure as code, also referred to as IaC, is a type of IT setup wherein developers or operations teams automatically manage and provision the technology stack for an application through software, rather than using a manual process to configure discrete hardware devices and operating systems. Infrastructure as code is sometimes referred to as programmable or software-defined infrastructure.
>
> The concept of infrastructure as code is similar to programming scripts, which are used to automate IT processes. However, scripts are primarily used to automate a series of static steps that must be repeated numerous times across multiple servers. Infrastructure as code uses higher-level or descriptive language to code more versatile and adaptive provisioning and deployment processes.&rdquo;

<footer class="blockquote-footer">
<a href="https://searchitoperations.techtarget.com/definition/Infrastructure-as-Code-IAC">
  <cite title="Stephen J. Bigelow"> Stephen J. Bigelow </cite></a>
</footer>

I find the biggest differences between a collection of bash scripts, and an IaC approach, is the level of verboseness
and the repeatability. IaC approaches tend to be less verbose. But, not always. IaC tends to allow repeatability in that
the IaC toolset is responsible for setting things up in a way that the devops team specifies declaratively.

IaC generally has an emphasis on cloud type environments. Common IaC choices:

* [CloudFormation](https://aws.amazon.com/cloudformation/) (but only makes sense for AWS)
* [AWS CDK](https://aws.amazon.com/cdk/) (my favorite...but only for AWS)
* [Terraform](https://www.terraform.io/)
* [Ansible](https://www.ansible.com/)
* [Puppet](https://puppet.com/)
* [Chef](https://www.chef.io/)

From past experience, I would avoid Puppet and Chef. They are heavy-handed and require significant expertise. I don't
know Terraform or Ansible well enough to have strong opinions.

AWS CDK is especially interesting because it is programmatic. The result is ultimately CloudFormation, but generating it
can be done programmatically. That makes it more flexible, and importantly, it opens it up to easier reuse and certain
levels of automated testing. i.e. CDK constructs can be unit tested.

While IaC tends to emphasize cloud type environments, there are tools that might be considered IaC like for other types
of projects. For example, when building custom linux images/firmware:

- [Yocto](https://www.yoctoproject.org/), and
- [Buildroot](https://buildroot.org/)

## Local, Cloud, and Serverless

Many modern projects have components that exist only in the cloud. i.e. AWS Lambdas, DynamoDB, API Gateway, etc. Development
and testing around these types of components can be cumbersome. There are emerging solutions like [LocalStack](https://github.com/localstack/localstack), [aws-sdk-mock](https://github.com/dwyl/aws-sdk-mock), etc.

However, with a smart CDK based pipeline, another option is for developers to create _developer specific_ environments
as needed. I find this approach preferable to most mocking type solutions because it avoids the inevitable mismatch
between the facades and reality.

Most serverless architectures do this somewhat inherently. i.e [Serverless](https://www.serverless.com/)
, [AWS Amplify](https://aws.amazon.com/amplify/), etc.

## Containers

Containers have changed the modern development and deployment landscape. Modern teams should be well versed in the
advantages of using Docker, Docker Compose, and similar technologies for development, and testing, and deployment.
DevOps teams at operating at a larger scale will also want to be familiar with Kubernetes.

## Application Source vs IaC Source vs Pipeline Source
Consider that for a modern SaaS project, there might be three logical code bases:
 * **Application Source**
   * The source that gets compiled for an application bundle. Configurable at runtime per environment.
 * **Environment IaC**
   * The IaC for setting up an "environment". Often configurable for changing infrastructure size, costs, security, etc.
 * **Pipeline IaC**
   * The IaC for setting up a CI/CD pipeline. Perhaps multiple variants of a pipeline, or perhaps multiple pipelines. 

Many projects will put all of these in a single repository, and many more combine the environment and pipeline IaC (if
they use IaC for the pipeline), but they can be considered logically distinct code bases. One reason for considering
them distinct is that versioning and deployment aspects are sometimes different. For example, sometimes infrastructure
changes will be one-way only and destructive.

## Stages vs Environments vs Regions/Zones

This is my personal nomenclature because I don't know the industry standard naming around much of this. I'm not really a
DevOps expert, and I would generally recommend using naming according to the tools being used. I know that AWS CDK has a
specific nomenclature. i.e. Constructs, Stacks, Apps, Environments, etc. The AWS CDK notion of "environment" does not
map one-to-one with my naming of environment here.

**Stage**

A stage represents high level state in the sequence of a pipeline. A pipeline is implemented with steps that move a build
through stages. Example stages:

<mermaid cols="col-10 col-md-7" height="5rem" :center="false">
%%{init: {'theme': 'forest' } }%%
graph LR
  BUILD --> ALPHA
  ALPHA --> INTEGRATION
  INTEGRATION --> BETA
  BETA --> PROD
</mermaid>

**Environments**

An environment represents a complete and contained setup of a project, generally live and running. There will be often
be an almost one-to-one correspondence between pipeline stages and environments, but not always. Example environments:
<mermaid cols="col-12 col-md-9" height="5rem" :center="false">
%%{init: {'theme': 'forest' } }%%
graph LR
  DEV --> dc[DEV-CLOUD]
  dc --> ALPHA
  ALPHA --> TEST
  TEST --> BETA
  BETA --> PROD
</mermaid>

Advanced IaC setups allow for easy and creation (and teardown) of arbitrary new environments, such that perhaps each
developer will have their own DEV-CLOUD environment. Testers can create their own environments as needed, etc.

**Regions/Zones**

Related: distribution groups, rollout targets, availability zones, etc. At larger scales and for projects with uptime
requirements, redundancy needs, etc., a logical environment (i.e. PROD) might contain multiple subgroups organized by
region, spread, and other possibilities. An example regional organization:

<mermaid cols="col-10 col-sm-9" height="20rem" :center="false">
%%{init: {'theme': 'forest' } }%%
graph LR
    A[PROD] -->|Deploy1| B(North America)
    B --> G{Precheck}
    B --> C[West Coast]
    B --> D[East Coast]
    A -->|Deploy2| E(Europe)
    A -->|Deploy3| F(Asia)
</mermaid>

## AWS Account Management

Environments can be organized multiple ways in AWS. Examples:

* All environments in a single AWS account
* One AWS account per environment
* Multiple environments in a shared AWS account, but PROD in its own AWS account
* Accounts (and environments) created on demand (perhaps for developer or load testing)

In general, my recommendation is to use one AWS account per environment when the environment will be long-lived and
shared. And then one AWS account per developer/tester. reasons:

* It's easier to keep track of costs per environment (and per person) that way.
* Sometimes environments will have external dependencies, integrations, or differing infosec requirements that limit
  what an environment can contain.
* Giving each developer/tester their own account provides a lot of freedom and flexibility, while still maintaining
  accountability.

Managing multiple environments in AWS has become much easier over the years, and is now generally considered a best
practice for most teams. Useful AWS services, with the first two being the ones I have the most experience with:

* [AWS Organizations](https://aws.amazon.com/organizations/)
* [AWS Single Sign-On](https://aws.amazon.com/single-sign-on/)
* [AWS Control Tower](https://aws.amazon.com/controltower/)
* [AWS Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/)

## Autoscaling, Metrics, and Logging

As a project gets deployed, being able to auto-scale up (and down!), metrics, logging, alerting, and notifications all
become more important. Depending on project and expectations, capabilities for handling those aspects should be
considered early on in the project life cycle, even if not needed initially.