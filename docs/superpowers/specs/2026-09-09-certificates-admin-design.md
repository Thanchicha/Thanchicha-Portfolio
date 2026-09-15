# Certificates and Local Admin Design

## Goal

Add a public certificates page and a private-in-navigation local editor so Thanchicha can maintain certificate records without exposing an admin link on the portfolio.

## Routes

- `/certificates` is public and displays certificate cards, category filters, and an empty state when no records are available.
- `/admin/certificates` is intentionally omitted from the Navbar and Home. It is a local editor, not an authenticated or secure admin system.

## Data model

Each certificate record has:

- `id`: stable string
- `title`: certificate or award name
- `issuer`: awarding institution or organisation
- `issuedDate`: month/year or year text
- `category`: `Certificate`, `Award`, or `Training`
- `description`: optional concise context
- `credentialUrl`: optional public verification URL
- `imageUrl`: optional publicly served image/PDF path or URL
- `featured`: optional boolean

The initial portfolio ships with an empty certificate list. No sample credentials are fabricated.

## Storage and data flow

The certificate store is client-side only:

1. The store reads its list from browser localStorage.
2. The admin can add, edit, or delete a record; every completed action overwrites the local stored list.
3. The public page reads the same local list in the same browser.
4. Export downloads a JSON backup. Import validates the file structure before replacing the current list.

Local storage cannot publish content to other visitors or reliably hold large certificate files. `imageUrl` is therefore a path/URL only. To show an image publicly, add it as a static asset to the project and enter its path in the editor; to publish edited records for everyone, import/export data then deliberately add it to versioned project content in a future task.

## Public page

The page uses existing visual tokens and has:

- heading and short explanation
- category filter buttons
- responsive card grid
- title, issuer, date, category, description
- optional links to credential or document
- clear empty state without placeholder certificates

## Admin page

The editor has:

- inline create/edit form with required title, issuer, date, and category
- optional description, credential URL, image/PDF URL, and featured checkbox
- list of current local entries with edit and delete actions
- confirmation before delete
- local status messages for save/import errors
- Export JSON and Import JSON controls

## Safety and accessibility

- No admin route is linked from public navigation.
- The page does not imply access control; anyone who knows the URL can edit their own browser copy.
- Inputs have labels, buttons have clear names, and external links use safe target/rel attributes.
- JSON imports reject malformed data rather than partially writing it.

## Verification

Automated tests cover storage round-trip, malformed import rejection, empty public state, and rendering a local certificate. Targeted lint and the relevant route tests run before review.
