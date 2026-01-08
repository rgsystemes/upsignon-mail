# upsignon-mail

Templates d'emails pour UpSignOn.

## Exemples

```typescript
import { buildEmail } from 'upsignon-mail'

const { html, text, object } = await buildEmail({
  templateName: 'trialWelcome',
  locales: 'fr',
  args: {
    trialEndDate: '2024-12-31',
    activationLink: 'https://app.upsignon.eu/activate',
    consoleLink: 'https://app.upsignon.eu/console',
  },
})

// html   → contenu HTML de l'email
// text   → version texte brut
// object → sujet de l'email
```
