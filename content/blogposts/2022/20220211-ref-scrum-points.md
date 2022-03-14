---
title: "Reference: Scrum points"
createdAt: 2022-02-11
description: Informal notes for software development scrum.
category: misc
---

# Thoughts on Scrum

These are my own notes regarding scrum processes for software development. I am not an expert on Agile or Scrum
practices. I've written some variant of these notes for multiple companies, and I decided to post here for future
reference. These are informal, include some opinions, and some arbitrary nomenclature. These are meant only as
guidelines to facilitate discussion, because every environment and team is different. Some teams will be fine with
coarse, sprint long, stories, and other teams will need subtask granularity.

## Contents

<blog-post-toc :toc=toc></blog-post-toc>

## Point Guidelines

Reasons for estimating with points:

* As developers, we want to make sure we generally agree between ourselves on the level of effort needed to complete a
  given story.
* As managers and planners, point related metrics will eventually be useful to estimate and prioritize the work a team
  can get done in upcoming sprints and future projects.

Point values, velocity, & capacity are relative to a team and have little meaning outside of that team. I am providing
my suggestions here as a starting point for point values, but these are only suggestions. I like the Fibonacci
sequence (
or a doubling sequence) because it helps me remember that the point values are completely relative. Point values should
be representation of complexity and effort for the team to complete. They do not always map to time-to-complete, but in
practice, that's usually the most useful way to estimate.

### 1 Point

A story or task that needs to be tracked, but it will only take a minute or two for someone to complete. No risks. No
questions.

### 2 Points

Not 1 and not 3. Should only take a few minutes. Many teams don't bother using 2 point values in Fibonacci.

### 3 Points

Will usually take someone an hour or so. No risks. No questions.

### 5 points

Will usually take someone a few hours or full day to complete. Might have to ping someone else a few times. Little risk.
No real questions.

### 8 points

Probably take a few days, or even a full week to complete. Might involve more than person. Maybe some minor risks once
work is started. Not too many questions.

### 13 points

Probably take at least a week to complete. Might involve more than one person. Probably has risks and questions that
might develop after work begins.

### 21 points

Expect it will take the entire sprint. Might involve more than one person. Probably has risks and more questions once
work begins. However, this could also simply be an effort-intensive development task that needs the full sprint.

### 21+

Generally unused. If team can not estimate a story at 21 or less, then the story should be researched and/or broken down
further before being moved in to sprint.

### {SPIKE}

A story/task tracking the effort needed to better understand something before it can be estimated. Said another way, we
don't know what we don't know. This usually involves research or cross team commu-nications. Team might try assigning
point values based on a suggested time box.

### {BUG}

Sometimes the effort needed to address and fix a reported bug can be estimated, and sometimes it cannot. At least, not
until the underlying bug cause has been determined. Sometimes bugs are dependent on waiting for customer feedback and
follow-ups, which can also generally not be estimated.

## Related Thoughts

### Cross Product/Projects

Scrum is not great for working across multiple projects. Generally, scrum expects a cross-functional team (and
associated sprint board) to be working on a single project at a time. Reality is often different. But, I think that is
important to remember than when figuring out how best to apply Scrum based practices and tools in a team environment.

### Context Switching

Related to previous point, context switching often has a significant cost. A developer being asked to work across
multiple projects in a sprint will not be able to complete the same amount of work as when they are focused on a single
project. That is true for the team as a whole too. That should be considered in any future capacity planning.

### Spikes

It will often be the case, especially early on, that a team will have stories that can not be accurately estimated
because they don't know what they don't know. That makes it hard to assign points and track capacity/velocity. Teams
sometimes call stories of this sort "spikes". It has been recommended to me that when doing this, the spike be time
boxed. For example, do R&D for ~3 days and then report status and results so team can decide how best to continue.

### Tools

It is my belief that the available tools for scrum team management aren't great. They often add overhead and friction to
teams that need to be quickly adapting as projects continue to move forward and new information is gained. I try and
always remember that the goal with these processes is to be constantly moving forward, supporting management's need for
forward-looking planning, and trying not to stress too much. The goal should never be the process itself.

The limitations of the tools should be taken in to consideration when figuring how best to apply processes. There can be
a natural tension between wanting to do the work someone _knows_ needs to be done, and tracking that accurately
according to the work someone _said_ was going to be done.

### Point Accuracy

Assigning points to stories should be done by multiple developers looking at a story and providing their best guess as
to the complexity/required-effort for the team to complete the story. The estimate should be as if that story would be
the only focus within a sprint (even if that is almost never the case). Coming up with point values should not take a
significant amount of time and no one should expect point values to be overly accurate. The nature of software
development work makes consistently accurate estimates almost impossible.

When assigning points, playing poker should lead to more discussion only if the point ranges are exceptionally wide.
That could indicate the story is not clear. Otherwise, assign the average and quickly move on. What is ultimately
important to those concerned with capacity/velocity/burndowns is _point averages over time_. Generally, a team's current
capacity is calculated as the average of points completed over the last X sprints.

### Meeting and Ceremony Control

Everyone on team should strive to keep the purpose and context of various meetings and ceremonies in mind. Otherwise,
every meeting has potential of running over its allotted time and doing so repeatedly will cause compounding problems.
Most sprint planning related work should be done in backlog refinement. Subsequent meetings are then mostly painless.
...admittedly, I've rarely seen this done well. One reason is that in a fast-paced team, by the time a story moves from
backlog in to a sprint, the available information and requirements have already changed. But, that's what being agile is
about....and I try to remind myself it's only the processes that are having problems keeping up.

### Estimate High

Prefer to over estimate story points, at least initially. For multiple reasons, it is better for a team to end a sprint
with all stories completed early (uncommon) than it is to end a sprint with stories still-in-progress(very common) or
not started.

At higher levels, planners should generally aim for sprint point allocation at ~75% of average capacity. Developers are
asked to dedicate ~80% of time to project tasks, and leave ~20% for self-development and other important things, like
breathing. That doesn't show up in points (which are relative), but should be kept in mind when considering what can
actually get done in a sprint.

### Story Format

User stories should almost always use the format:

* "As a [persona], I [want to], [so that]."

If it's not written out explicitly, it should be easily inferred. Many teams do not do this and I've seen that it often
leads to confusion due to different viewpoints and expectations. This is especially true for people new to Scrum.

A personal practice is to use this even for technical enablement stories. For example:

* "As a DevOp, I want a CI/CD pipeline into Alpha, so that I have a shared environment for automated builds and unit
  tests."

### Change is Inevitable

Constant change is inevitable and reacting to it quickly is a good thing. Expect the process to have problems keeping
up.

## Common Questions

Common questions to be answered when a team adopts a scum approach.

Q) Who can/should create new stories in the backlog?

Q) Who can/should prioritize new stories in the backlog?

Q) How will new stories be brought to the attention of those prioritizing?

Q) What is the agreed upon hierarchy for epics, stories, tasks, and subtasks?

**Epic** - Estimated with t-shirt sizes<br/>
&nbsp;&nbsp;**Story** - Estimated with points<br/>
&nbsp;&nbsp;&nbsp;&nbsp;**Tasks** - Not estimated. Used to show todos/acceptance-criterias/requirements, and sometimes to show progress within a story. Sometimes useful for handling finer-grained pre-requisite relationships and blockers<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Subtasks** - Not used for any planning purposes.<br/> 

Q) Can the team add stories/bugs to an active sprint? Should the team modify sprint to reflect actual work?<br/>
_(My recommendation is that changes to active sprint be made infrequently if possible, with high priority bugs being an
exception)_

Q) Can we change point values of an active sprint story when new information becomes available?<br/>
_(My recommendation is that this is done rarely.)_

Q) When a sprint ends and story is not yet complete, will we move it forward to the next sprint and keep the point value
the same?<br/>
_(My recommendation is, yes, unless new information becomes available. Averages over multiple sprints are what matter.
When there are significant changes, generally better to break in to a new story instead.)_