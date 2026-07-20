import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest({
  manifest_version: 3,
  name: 'מתקן שכבת מקלדת',
  description: 'מזהה טקסט שנכתב בשכבת מקלדת שגויה (עברית/אנגלית) ומציע תיקון מיידי.',
  version: '0.1.0',
  // icons: יוחזרו בשלב הפוליש, כרגע מוסר כדי לא לחסום את הבנייה
  action: {
    default_title: 'מתקן שכבת מקלדת',
  },
  background: {
    service_worker: 'src/background/background.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content/content-script.ts'],
      run_at: 'document_idle',
    },
  ],
  permissions: ['storage'],
});
