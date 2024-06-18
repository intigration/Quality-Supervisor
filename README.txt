## Quality Supervisor


```
$map($, function($Service) {
  $Service {
    "point": 'CWE-ID:' & $.'CWE-ID' &' '& $.Name,
    "priority":"Essential",
    "details":$.Description &'Guidelines:'& $.Notes,
    "howto": $.'Detection Methods'
  }
})

```
