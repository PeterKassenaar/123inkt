# 123inkt

Slides ande example code on the the training Angular Advanced by Peter Kassenaar

## Links

- General Angular Fundamentals Repo: https://github.com/PeterKassenaar/angular-fundamentals
- General Angular Advanced Repo: https://github.com/PeterKassenaar/AngularAdvanced
- [Github Copilot general instructions](.github/copilot-instructions.md).
- Angular Pro's:
    - Joshua Morony (USA): https://www.youtube.com/@JoshuaMorony
    - Manfred Steyer (AUT): https://www.angulararchitects.io/en/
    - Matt Pocock (GB, TypeScript): https://www.youtube.com/@mattpocockuk/playlists

## Suffixes

From the Angular Blog documentation:

"Starting in Angular v20, by default Angular CLI will not generate suffixes for your components, directives, services,
and pipes. For existing projects, ng update will enable suffix generation by updating your angular.json. To enable
suffix generation in new projects, use the following schematic configuration:"

```json
{
  "projects": {
    "app": {
      ...
      "schematics": {
        "@schematics/angular:component": { "type": "component" },
        "@schematics/angular:directive": { "type": "directive" },
        "@schematics/angular:service": { "type": "service" },
        "@schematics/angular:guard": { "typeSeparator": "." },
        "@schematics/angular:interceptor": { "typeSeparator": "." },
        "@schematics/angular:module": { "typeSeparator": "." },
        "@schematics/angular:pipe": { "typeSeparator": "." },
        "@schematics/angular:resolver": { "typeSeparator": "." }
      },
  ...
}
```

Questions? Email me at info@kassenaar.com.

Cheers!
Peter.
