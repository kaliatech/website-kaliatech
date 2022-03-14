---
title: "Reference: Software Testing"
createdAt: 2022-02-14
description: Informal notes for software dev team testing.
category: misc
---

# Thoughts on testing.

These are of my own notes regarding software testing. I've written some variant of these notes for multiple companies,
and I decided to post here for future reference. These are informal, include some opinions, and some arbitrary
nomenclature. These are meant only as guidelines to facilitate discussion, because every environment and team is
different.

## Contents

<blog-post-toc :toc=toc></blog-post-toc>

## Summary

1. Testing occurs at multiple levels and starts with development.
2. Ideally, tests should be added in parallel with features in a feature branch. That is not always possible to do.
3. 100% test coverage should not be a goal. Tests have costs, obvious and non-obvious, and should always be written
   intentionally and with purpose. Tests that serve no useful purpose should be removed. Tests must be maintained
   similar to how code must be maintained, and often with almost as much cost.
4. Higher level tests are sometimes written and executed by non-developers. The point is not for developers to shirk
   responsibility. Rather, having non-developers write tests provides a way to incorporate a different view in to a
   system. One that often more closely aligns to the customer and business views of the system. However, developers
   should not gain mindset where they build things and then let someone else tell them if it works or not.
5. Tests should be automated whenever possible. Most tests should be part of automatic continuous integration.
6. For some projects, with experienced teams, continuous deployment should be considered, in which case automated
   testing is a fundamental requirement.
7. Use separated environment(s) for integration testing. It should be possible to easily and quickly reset environments
   that are dedicated to testing.
8. Track bugs _and_ their resolutions.
9. Considering using acceptance tests to help flush out requirements, and then to later verify that those requirements
   have been met.
10. Keep metrics and logs of all errors found in production. Consider that many bugs and issues are never reported by
    end users.

## Levels of Testing

In some companies, and especially in smaller team environments, developers are responsible for end-to-end testing. Said
another way, the "Who" in the breakdown below, is sometimes always "Developers".

### Unit Testing

* **Who:**<br/>Developers
* **Purpose:**<br/>Ensure code meets developer expectations, especially after code changes and refactoring.
* **Time:**<br/>Very fast when run selectively. And ideally entire suite can be run in under a minute or two for any
  given project.
* **When:**<br/>Run manually as makes sense by developers before submitting PR. Maybe run automatically as part of PR
  process. Always run automatically as part of automated build pipeline.
* **Rerunning:**<br/>Always consistent and repeatable.
* **Randomness:**<br/>Unacceptable. Unit tests must be consistent 100% of the time, which can be tricky in asynchronous
  contexts.
* **Tradeoffs:**<br/>Developers should be smart about test coverage vs. the time to write tests, execute them, and
  maintain them. I do not personally subscribe to 100% coverage goals or TDD.

### Integration Testing

* **Who:**<br/>Developers (and possibly more technical Testers)
* **Purpose:**<br/>Ensure components work together per developer expectations.
* **Time:**<br/>Relatively fast when run selectively. Might take a while to run entire suite.
* **When:**<br/>Can be run manually as makes sense by developers before submitting a PR. Able to be run automatically,
  but when to actually run depends on build pipeline/deploy processes. Usually run automatically when deploying to an
  ALPHA environment.
* **Rerunning:**<br/>Always consistent and repeatable, without requiring a complete environment reset.
* **Randomness:**<br/>unacceptable. _Automated_ integration tests must be consistent 100% of the time.
* **Tradeoffs:**<br/>Integrations tests should be done prudently as they tend to take time to run and maintain. They do
  not always add significant value over Functional/Systems testing.

### Functional/Systems Testing

* **Who:**<br/>Testers (and Developers)
* **Purpose:**</br>Ensure components and configurations work together as expected. Validates live system functionality in a "clean room" type environment.
* **Time:**<br/>Takes some effort to setup. Takes a while to run entire suite.
* **When:**<br/>Should always be run ahead of any significant releases and before promoting to a BETA\GAMMA type
  environment. Probably automatically run when deploying to any TEST environment.
* **Rerunning:**<br/>Ideally these tests can rerun and or clean-up after themselves. But that is not always possible,
  and some tests could require an env reset. Generally, running these tests in a prod environment would not be
  acceptable.
* **Tradeoffs:**<br/>These tests tend to be very valuable and provide a lot of confidence. These tests are where most
  QA/Test automation effort should be spent. But, these tests are expensive to write, take time to run, and can be difficult to
  maintain (especially when there are larger system level changes and refactorings).
  
### Regression/Upgrade Testing

* **Who:**<br/>Testers
* **Purpose:**<br/>Ensure that newer changes do not cause problems with existing releases and deployments. Often
  includes testing of any upgrade (and possibly downgrade) procedures.
* **Time:**<br/>Time consuming. Not easy to automate.
* **When:**<br/>Should minimally be run before promoting to PROD, or before distributing new releases to existing
  customers.

### User Acceptance Testing

* **Who:**<br/>Testers and Stakeholders
* **Purpose:**<br/>Ensure systems meet business and end user requirements. Validates user level story completion.
  Verifies requirements.
* **Time:**<br/>Easy to run selectively. Takes a while to run entire suite. Might have some automated pieces, usually
  also has manual test plan pieces.
* **Rerunning:**<br/>Can probably not be easily rerun without an environment reset. Would probably not be run in PROD.

### Sanity Checking

* **Who:**<br/>Testers, Release Managers, Deployers
* **Purpose:**<br/>Quickly ensure systems are running as expected.
* **Time:**<br/>Fast and easy to run. Probably composed of both automated and manual procedures.
* **Rerunning:**<br/>Should be re-runnable at anytime, with no risk to system.

## Production Support, Debugging, Reporting

* **Who:**<br/>Testers and Support
* **Purpose:**<br/>Customer support, identifying issues, reporting/logging issues, full-cycle issue resolu tion,
  customer feedback, product enhancement, future work prioritization.

## Testing outside of CI/CD

There are numerous other layers and possible organization of testing concerns. Some of the more common:

* **Performance Testing**
  * Latency, Latency under load, etc
* **Load Testing**
  * How many clients
  * Automatic scaling
  * Cost alert and controls
  
* **A/B Testing**
* **Canary Testing**
  * **Who:** Testers, Subset of Customers
  * **Purpose:** Validate feature and new functionality before rolling out to all customers
  * **Time:** Normally not part of CI/CD
  * **Note:** Often managed with "[Feature Flags](https://martinfowler.com/articles/feature-toggles.html)", which can be an important part of many systems extending beyond testing.
  
## Physical Hardware and Testing

Projects involving hardware require additional considerations for testing. Examples include:
 * Mobile devices (android and ios)
 * Microcontrollers
 * Embedded firmware
 * Networks
 * FPGA and PLC based automation machines
 * Etc

Simulators and emulators can be helpful and a worthwhile investment when considering testing needs. Many scenarios, _that
should be tested_, are difficult to replicate in a real world environments without some level of simulation/emulation.