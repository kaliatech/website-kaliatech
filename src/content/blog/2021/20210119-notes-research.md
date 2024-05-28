---
title: Note Taking Software and Services 
createdAt: 2021-01-19
description: Research around note taking and synchronization software.
category: misc

photosNotebooks: [
{
  src: '/i/blog/2021/notes-research/notes-0.webp',
  caption: 'Old school - 15 years worth'
},
{
src: '/i/blog/2021/notes-research/notes-2.webp',
caption: 'Obviously an important meeting'
},
{
src: '/i/blog/2021/notes-research/notes-3.webp',
caption: 'In pencil!'
},
]

photosNoteshelf: [
{
src: '/i/blog/2021/notes-research/notes-4.webp',
caption: 'Handwritten notes with Noteshelf'
},
{
src: '/i/blog/2021/notes-research/notes-5.webp',
caption: 'Another page'
},
{
src: '/i/blog/2021/notes-research/notes-evernoteshelf.webp',
caption: 'Sync''d to Evernote'
},
]


photosEvernoteEncrypted: [
{
src: '/i/blog/2021/notes-research/notes-evernote-encrypted.webp',
caption: 'Encrypted text feature'
},
]


photosQuack: [
{
src: '/i/blog/2021/notes-research/notes-7.webp',
caption: 'Notes on obese bird/duck/chicken aerodynamics. Quack.'
},
]


---
## Contents
<blog-post-toc :toc=toc></blog-post-toc>

## Background
I am a prolific acquirer and creator of information. Much of it is useless, but still, I'm prolific. While I believe many people spend too much time acquiring vs. doing, myself included, I find that the act of taking notes and writing things down is in itself of value. Also, I can be scattered brained and having a place to store short and long term items is important to me.

Two decades ago, I would carry paper journals with me everywhere. I still have a stack of them. In some ways, I miss those days.

<blog-post-photos-simple :lightbox="true" :col-width="4" :photos=photosNotebooks></blog-post-photos-simple>

However, I moved to fully paperless sometime around 2010. In general, I try to stay platform agnostic and make sure I can create/retrieve my notes on any device. In recent years I've been using a combination of these apps and services:

 * [Evernote](https://evernote.com) <br/>
   My primary notes app, used for all daily to do items, short term references, longer term references, code snippets, command line references, scanned PDF documents, random ideas and thoughts, etc.

 * [Noteshelf](https://www.noteshelf.net/) <br/>
   For handwritten notes using a stylus. I use this for free-form thoughts, diagrams, sketches, etc. Especially useful when thinking away from a computer. The app is only available on iOS, but it automatically syncs PDF versions of the notes to an Evernote notebook so that I have them in read only, searchable, form everywhere.

<blog-post-photos-simple :lightbox="true" :col-width="4" :photos=photosNoteshelf></blog-post-photos-simple>

 * [Dropbox](https://www.dropbox.com/) / [Sync](https://www.sync.com/) / [S3](https://aws.amazon.com/s3/) <br/>
   I generally use a separate service for storing and synchronizing files, PDF documents, etc. When needed, I annotate PDFs using [GoodReader](https://goodreader.com/) on iPad. Although file attachments can be stored and annotated in Evernote, it gets unwieldy. I've never used it extensively for that purpose. I stopped using Dropbox a while ago when they started incorporating so many dark patterns around their upsells, but they do have some nice features. I now use sync.com. Similar, but more secure and not as feature rich. Another good option for many would be [Google Drive](https://drive.google.com) or [Microsoft OneDrive](https://onedrive.live.com). Google and Microsoft already have access to way more than enough of my digital life.
   
 * [Pinboard.in](https://pinboard.in) <br/>
   Used for storing bookmarks, along with short notes that go with those bookmarks. The owner, [Maciej Cegłowski](https://en.wikipedia.org/wiki/Maciej_Ceg%C5%82owski), is an interesting person. Pinboard will go down the day he gets [hit by a bus](https://twitter.com/pinboard/status/1350962218632937474), but that's a risk I'm willing to take with bookmarks.
   
 * [iThoughts](https://www.toketaware.com/) <br/>
   Cross platform mind mapping. Very useful for initial ideas, organization of larger concepts, and prioritization. At one time I thought of using mindmapping software for all of my notes. "[The Brain](https://www.thebrain.com/)" is especially well suited towards doing this. However, it never felt right to me. Mind mapping causes my brain to try thinking too much when all I want to do is jot down or review a quick note. 

 * [Lastpass](https://www.lastpass.com/) / [Bitwarden](https://bitwarden.com/) / [KeyPass](https://keepass.info/) / [VeraCrypt](https://www.veracrypt.fr/) <br/>
   For storing credentials, sensitive documents, financial data, etc.

This combination has worked well for my purposes, but in recent years I've started considering alternatives for three main reasons:

1. Evernote has *always* had a problematic editor. It's dumbed down and buggy, which is ironic for a NOTE TAKING APP. I have often wished it supported markdown for note entry. Some limited formatting of notes is often helpful, but it must be textual or available via shortcuts. Having to click a toolbar to get formatting is terrible. In addition, sometimes it would be nice to quickly diagram along side notes. (i.e. [Mermaid](https://mermaid-js.github.io/)) Evernote has periodically supported extensions/addons for this sort of thing, but they never worked well and haven't been long-lived. 

2. In recent years the Evernote business has gone through some significant upheavals. (One [example](https://techcrunch.com/2018/09/04/evernote-lost-its-cto-cfo-cpo-and-hr-head-in-the-last-month-as-it-eyes-another-fundraise/).) I am no longer sure that users like myself are Evernote's priority vs. their enterprise customers, and it remains to be seen if the new management can make it a reliable company again. I believe the recent major v10.x upgrade has been terrible so far from a user's point-of-view, even if I understand and agree with the larger reasoning behind it.

3. I do not want my notes tied up in a proprietary system that I will have to pay for until the end of time. I now have 10+ years of notes in Evernote. Admittedly, the majority of those notes could disappear and it wouldn't matter much. But, *some* of those "notes" are very important and useful. Being able to search, without thinking, to find something I know I wrote down a few years ago has proven useful many times.


## Options
I will not list all the potential note taking apps and services that are available. A person can spend hours searching, researching, and testing. I say that from personal experience. Note taking is contextual. A software developer is going to take different types of notes than an academic student. Some people prefer and need to work with certain platforms. For example, there are many beautiful note taking apps that work only on Apple devices. Note taking is also heavily influenced by individual preferences and workflows.

These are the options I eventually narrowed down and considered seriously for _myself_:

 * Text files ([Jrnl](https://github.com/jrnl-org/jrnl) / [Foam](https://foambubble.github.io/foam/) / [Obsidian](https://obsidian.md/) / [Emacs-OrgMode](https://orgmode.org/) / [StackEdit](https://stackedit.io/))
 * Wikis ([TiddlyWiki](https://tiddlywiki.com/) / [Confluence](https://www.atlassian.com/software/confluence) / [DokuWiki](https://www.dokuwiki.org/))
 * [Standard Notes App/Service](https://standardnotes.org/)
 * [Joplin](https://joplinapp.org/)
 * [Evernote](https://evernote.com/)

My notes on each are below, written here, so I can refer back to it a year or two from now when I will likely go through this again.

### Text Files with synchronization

---

Simple text files are underrated. Easy to edit, easy to synchronize, and they will never be unsupported. Of course, they require file attachments to be handled separately. Searching through them must also be handled separately. (Searching is easy on desktop, but less so on mobile.) Editing text files on mobile isn't always easy, especially in combination with synchronizing.

Some newer options, like Foam and Obsidian, are interesting. The underlying notes are plain text files, usually in Markdown, and the tool supports interlinking and other higher level features on top of those simple files.

A quick summary of the plain text options I researched:
 * [jrnl](https://github.com/jrnl-org/jrnl) - The command line tool, not the commercial service. Excellent on desktop and I've used it for quick notes anytime working on linux. No obvious way to use it easily on mobile. No support for attachments.
 * [Foam](https://foambubble.github.io/foam/) - Felt rough to me with VS Code, no obvious mobile option.
 * [Obsidian](https://obsidian.md/) - Interesting and has promise. Will review again when they release mobile apps.
 * [Emacs-OrgMode](https://orgmode.org/) - I'm a Vim person. (I would have learned Emacs just for the OrgMode, as some people swear by it, but there's no obvious mobile solution. That's my excuse.)
 * [StackEdit](https://stackedit.io/) - Probably useable for manual markdown based notes solution when synchronized with GoogleDrive or Github. I use StackEdit often, but didn't feel right to me for my overall notes solution.

In the end, as much as a like simple text files, I like certain higher level conveniences more. I'll probably check out Obsidian again in the future after the mobile apps are released. 

### Wikis

---

Using a wiki for notes seems a little heavy handed by some, but I've used wikis so much for years that I think it would be fine for me, and I've seriously considered this option for all my notes a few times. 

Quick summary of the wiki options I like:
 * [TiddlyWiki](https://tiddlywiki.com/) - TiddlyWiki is amazing and I spent more time trying to find a complete solution using it than I did with anything else. The newer TW5 version supports a server hosted variant (with node) that solved a lot of the problems I previously had with using TW as complete notes solution, especially on mobile. However, it needs to be hosted and I'm trying to simplify my life. So, less servers is better. The editing experience is not great on mobile, though doable. There was no obvious way to use it safely offline with the hosted server version, although the [TW5-Bob](https://github.com/OokTech/TW5-Bob) project added some of the missing pieces (along with 100 other pieces I did not want). In the end, I probably could make TW work, but would be too much work. It's so flexible, easy to extend, and customize. Truth is, it really appeals to my inner developer ...and I wasted so much time on it.
 * [Confluence](https://www.atlassian.com/software/confluence) - I wouldn't be averse to playing for a hosted confluence instance. I actually like Confluence for organized business wiki purposes. It just seemed overly heavy for personal notes, and there's no obvious offline option.
 * [DokuWiki](https://www.dokuwiki.org/) - Decent, but I don't want to self host if I can avoid it. I don't think I'd chose it over Confluence if I was going straight wiki for my notes. If I needed portable wiki then maybe, but then I'd probably choose TiddlyWiki.

### Standard Notes

---

I really liked [Standard Notes](https://standardnotes.org/) and almost purchased a 5-year subscription. Things I liked:
 * The developer's views and [longevity statements](https://standardnotes.org/longevity) resonate with me.
 * Simple, clean interfaces on desktop and mobile apps.
 * Supports simple editors with excellent markdown support

Things I did not like:
 * The separate file attachment solution ([FileSafe](https://standardnotes.org/help/44/filesafe-101)) seems a little cumbersome.
 * While I appreciate their approach to security, it also means performance is probably not going to be great on mobile with a large number of notes. I didn't verify, but antecdotal forum posts indicate that to be true.
 * There's no obvious way to organize notes in to separate contexts. They support tagging, and have an extension for folders (that is based on tags), but nothing beyond that. It probably wouldn't matter except for the previous point that larger note counts are going to result in slower performance.
 * There's no way to select multiple notes at one time. i.e. Batch retagging or deleting. According to [this issue](https://github.com/standardnotes/forum/issues/138), It's been an outstanding request for a few years. This, though seemingly non-important, is probably the main reason I decided to avoid Standard Notes. That seems like such as basic function that the developers do not feel the need to address.


### Joplin

---

[Joplin](https://joplinapp.org/) is impressive, especially considering it's open source and free. It checked a number of boxes for me. Notes are stored as individual plain text markdown. Attachments are stored nearby. Built in synchronization, including using AWS S3 as a backend (which seemed to work well). End-to-end encryption is available if desired. Joplin was easily the most similar to Evernote in terms of structure and functionality.

So why didn't select it?
 * Note files and attachments are named with opaque IDs and everything is stored in the same directory. This means that it's not easy to find notes or attachments in the storage system directly. This is a minor limitation, but ideally the notes could be visually scanned even without Joplin. (Still, it's much better than Evernote's implementations, old and new.)
 * There are more than few issues and antecdotal discussions about unreliability of the sync. I didn't notice any sync issues myself with S3 for the few days I used it, but there are enough recent issues logged and discussions to make me nervous.
 * Deleting doesn't seem to actually delete. Nor is there any way to recover things that I had deleted, AFAICT. It's possible this is related to the history feature and maybe the files would have been deleted eventually.
 * The mobile apps are a bit clunky. This is probably the main reason I decide not to go with Joplin. For now. I will revisit in the future.
    * In particular, I could find no way to access an attached photo on mobile devices, Android or iOS. So while I could view a photo attached to a note in Joplin, there was no obvious way to open or otherwise make use of it. Because Joplin is open source, I started going about setting up a dev environment to try fixing this...but then I realized, that was not simplifying my life.

#### Joplin's Evernote Import
As an aside, Joplin supports importing Evernote .enex files. It has the option to partially transform Evernote's strange markup in to markdown while importing. It worked well in my testing. Joplin can then export the notes back out as markdown files and other formats. It's probably the best way, at this time, to export evernote data for long term storage. Again, it's an impressive feature for a free tool.

### Evernote

---

Over the years, [Evernote](https://evernote.com) has been interesting to watch as a product and company. It has presented good, and bad, examples of modern software and related services. Most recently, Evernote decided to a major rewrite (v10). I understand the [reasoning](https://evernote.com/blog/2020-update-progress-road-ahead/) and believe it will eventually be worth it. But, I'm fairly certain the actual roll out is a case study in how NOT to roll out a new version. ([One example](https://discussion.evernote.com/forums/topic/129542-thoughts-about-v10-with-a-little-more-distance/)...from a selection of thousands.) From an end user standpoint, it has been rough.

Suffice to say, I have a love/hate relationship with Evernote.

Positive:
 * The synchronization has always worked reliably for me, across all devices. 
 * Offline capability can be really nice-to-have in no-internet situations. It was removed in the early v10 versions, but it seems to be coming back.
 * The overall UI tends to be polished and professional. The polished *look* of the v10 release is quite nice.
 * The web interface has always been a first class citizen and it's nice to have it available anywhere on the Internet using any device. This is something that Joplin does not provide.
 * Provides an API for 3rd party tools/services. For instance, the built-in synchronization from Noteself.
 * The web clipper is excellent, even though I no longer ever use it.

The downsides of Evernote:
 * The company's stability has come in to question in recent years.
 * Editor has always been buggy, usually around simple things in my experience. i.e. Soft returns in bulleted lists. Every major release I've been through with Evernote fixes some things while it breaks others.
 * The editor is WYSISWYG only and has limited text commands for formatting (although has improved, see notes below on v10)
 * I would never trust Evernote with private information. Early versions were especially slack on security and privacy.
 * Export options are somewhat limited. In current v10, only the .enex format is supported. (Text based XML. Easy to parse, but sometimes has uses strange formatting markup.)


What started me looking at alternatives again was the v10 release. When first released, the performance on an iPad made it almost unuseable. It would take multiple seconds to load, frequently crashed, and a required few seconds just to start creating a blank new note. Many months later it has improved... somewhat. The v10 version is still quite slow on all my devices. I believe it uses Electron underneath, but that's not an excuse. Other Electron based apps do not have this overall sluggishness. I'm not really sure what they are doing that makes it so slow, and why they can't fix it. The fact that it took multiple months to make the iPad version somewhat useable again is concerning. It doesn't point to a technical dev team that knows what they are doing. Specifically, that there might be problems with the underlying architecture or tech choices. The UI is nice....but that's only half the app.

Another recent example, is that after receiving a minor point upgrade on Windows 10, most of the keyboard shortcuts stopped working in the editor. I'm a heavy keyboard shortcut user. Checking forums showed [I wasn't the only one](https://discussion.evernote.com/forums/topic/133332-fixed-in-version-107-keyboard-shortcuts-not-working/). I've done software development. I get it. It's tricky sometimes. But, how did something like that get past the release QA? Again, concerning. And, because it is closed source and they don't share their bug tracking system, I have no view in to the internals. I tried getting some information via the official support channels, but I was only told that it was a known issue and to wait for the next upgrade. Exact time frame not available. An update was released a week later and keyboard shortcuts worked again. No specific mention in the release notes. Concerning. 


#### A note on Security 
It's important to note that I never store truly sensitive information in Evernote. I don't know that the latest version does, but early versions would store notes in plain text, and if I remember correctly, early versions even transferred data in the clear! (I might not remember that correctly.) Even now though, when using Evernote on a computer that's not entirely mine (i.e. a corporate workstation), I put the Evernote data folder inside a VeraCrypt volume. At least it did before v10, because v10 currently does not have an option to change the data folder location. Sigh.


#### Evernote's Encrypted Text Feature

Evernote has a feature I really liked for quickly encrypting a block of highlighted text. It prompts for a password and requires that password to be entered in order to decrypt at some later time. It ~is~ *was* a really nice feature for storing sensitive data alongside relevant notes, without having to encrypt the entire note. I haven't seen another note taking app that does this.

<blog-post-photos-simple :lightbox="true" :col-width="6" :center=true :photos=photosEvernoteEncrypted></blog-post-photos-simple>

The current implementation of it in v10 is not great. Specifically, once encrypted, it's no longer possible to add/modify text within the encrypted block. Hopefully they'll address that eventually. Regardless, I've moved away from using the feature frequently for two reasons:
- There is some period of time between when you enter text, and encrypt it, where the note could be sync'd to other devices. This is especially true now with the v10 limitation.
- AFAIK, there is no way to decrypt that text block outside of Evernote. Nor is there any way to decrypt in batch during an export. There were some forum posts about people trying to do so (the encrypted version of text is easily accessed in the exported .enex files), and it might actually be possible, but it's hard to say without proof or trying it.

#### A note on v10 Editor Improvements
I've always found the editor to be problematic in Evernote. However, so far, the v10 editor seems better to me. 

And I recently discovered that the v10 editor supports markdown like formatting commands. (Now documented in the keyboard shortcuts under "Auto formatting"). For example, starting a line with `##` and then pressing space, immediately changes to "medium header" style. Typing --- results in a horizontal line. Bullets (*), checkboxes ([]), code blocks(```) etc work in similar fashion. It's surprisingly intuitive, and the more I use it, the more I like it. ...although just now, I couldn't figure out a way to get back to "normal" text without clicking toolbar.

## Conclusion

Evernote. For now. Imperfect, but maybe it will get better. If it doesn't, there are other options that will probably as good, if not better, soon.

<blog-post-photos-simple :lightbox="true" :col-width="6" :center="true" :photos=photosQuack></blog-post-photos-simple>

