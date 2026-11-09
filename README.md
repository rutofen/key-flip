# KeyFlip ⌨️

> 🚧 **Work in progress.** So far only the project setup is in place.

A Chrome extension that will detect text typed in the wrong keyboard layout
(for example, Hebrew typed while the keyboard is set to English) and fix it.

## Plan

- Map Hebrew and English characters by key position
- Detect wrong-layout words with a dictionary and simple heuristics
- Listen to text fields on the page (input, textarea, contenteditable) and offer the fix

## Tech

TypeScript · Chrome Extension Manifest V3 · Vite · CRXJS · Vitest
