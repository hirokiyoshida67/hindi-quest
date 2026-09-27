# Hindi Quest — web demo

English-language Hindi learning game: 300 fixed vocabulary entries and 31 conversational replies. No AI API, key, login, backend, analytics SDK or npm installation required. Progress is stored in this browser; it is not synced across devices. Clearing browser storage removes progress.

## Publish with GitHub Pages

1. Create a public repository, for example `hindi-quest`.
2. Upload the contents of this folder, preserving the `docs` directory. Upload the extracted files, not the ZIP itself.
3. Open Settings → Pages → Build and deployment → Deploy from a branch.
4. Choose `main` and `/docs`, then Save.
5. GitHub will display the public website URL once deployment completes.

GitHub Pages serves the site on its free github.io domain. This package does not enable any paid service or custom Actions workflow. Do not upload credentials, local profiles or the desktop app binaries.

## Pronunciation

Listen and Slower use Hindi voices exposed by the browser's Web Speech API. On-device voices are preferred; browser-provided online voices are also available and labeled clearly. An online voice may send the displayed curriculum text to the browser provider and requires connectivity. This app has no developer-owned speech API, key or subscription. It cannot guarantee that a voice is installed on every device.

The open Pronunciation settings panel shows voice availability, a voice selector, Test Hindi audio, Refresh voices and Stop. The voice list updates when the browser finishes loading it. Missing voices, speech errors and an 8-second startup timeout appear next to the audio buttons, including inside the conversation dialog.

On macOS, add a Hindi system voice under Accessibility → Read & Speak (called Spoken Content in some versions), then restart your browser. You do not need to change the Mac's display language. Check system volume and audio output if playback is reported but you hear nothing. The original local-only filter could exclude browser-provided Hindi voices; this release fixes that restriction.

## Conversation access

All seven scenes are unlocked from the start. The suggested next quest still advances in order, but every map pin and scene card can be opened at any time. Existing progress and scoring are preserved.

## Validation and limits

Tested in Chromium with a simulated speech service: all 14 map/card entry points, 30 topic cards, missing voice guidance inside the dialog, asynchronously loaded online Hindi voice, Listen/Slower rates, voice selection, test/stop and reported playback errors. This does not verify audible playback on a physical Mac. Confirm with Test Hindi audio on your device before sharing the demo.

## Local preview

Serve the `docs` directory with any local static web server. Desktop functionality remains in the separately supplied Electron source; this package contains only the web demo.

## Privacy, scope and license

Learning history stays in browser localStorage. GitHub, as host, logs visitor IP addresses for security under its own privacy policy. There is no application account or server-side personal database. This is a learning prototype, not a teacher-reviewed course. No reuse license for the original code has been selected. Included fonts retain their SIL Open Font License; see `docs/fonts/`. The modern Delhi artwork was AI-generated for this project. It is a fictional composite, not a geographic map. See ARTWORK.md for the prompt.
