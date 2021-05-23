## single-spa Demo 2 > A tasks related showcase

This demo includes two single-spa parcels, displayed horizontally within "/" route.

These two parcels that are loaded as JS modules in the browser at page load time.

```
 .------------------------------------.
 |                                    |
 |      .-------.   .-----------.     |
 |      | Tasks |   | Task Edit |     |
 |      '-------'   '-----------'     |
 |                                    |
 |                                    |
 | App Shell (single-spa root config) |
 '------------------------------------'
```

### Run

Two start all three parts - the app shell and the two parcels - use these (as examples using `yarn`):

| part                 | run using                |
| -------------------- | ------------------------ |
| `sspa-d2-shell`      | `yarn start`             |
| `sspa-d2-tasks-list` | `yarn serve --port 8081` |
| `sspa-d2-task-edit`  | `yarn serve --port 8082` |

<br/>
