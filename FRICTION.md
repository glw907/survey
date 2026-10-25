# Friction log

A project that builds on Survey records each gap it finds here: a value that fails contrast, a
component state Survey doesn't style, or a place the motion or writing rules don't cover. The
project works around the gap in its own CSS and names the entry, so the override comes out when
Survey ships the fix. A Survey pass triages each entry: it fixes it and deletes it, or moves it to
`BACKLOG.md` with a reason.

Each entry names the component or rule, what was measured or seen, and the fix the finder used.

## Open

- **Inactive daisyUI tabs on the light header** (2026-10-25). An inactive `.tab` measures 2.99:1
  (#888989 on base-200 #eeede6), under WCAG 1.4.3's 4.5:1. Dark measures 4.33:1. The finder set
  inactive tabs to `--color-muted`, which gives 5.52:1 light and 6.86:1 dark, and the active tab
  still reads by its ink and underline.
- **Soft warning and success badges** (2026-10-25). In light, `badge-soft badge-warning` text
  measures 2.34:1 (#c9952e on #f4efe5) and `badge-soft badge-success` 4.49:1. The finder used the
  alert inks, `--cairn-warning-ink` and `--cairn-success-ink`, which give 5.85:1 and 6.37:1. Dark
  already passes.
- **A list row's hover in the motion guide** (2026-10-25). `DESIGN.md`'s "Place by place" covers
  link and button hover but not a list row's hover background. A 150ms fade on a contact list's
  rows read as too slow, since it plays on every row the pointer crosses. The finder made it
  instant, which "When to leave motion out" supports for a frequent interaction.
