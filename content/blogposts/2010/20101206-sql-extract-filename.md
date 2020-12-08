---
title: SQL to select filename component of path
createdAt: 2010-12-06
description: A test for syntax coloring on this blog.
category: misc
---
The following works on MySQL to extract base filename component of a complete file path.

```sql
SELECT REVERSE(
  SUBSTRING(
    REVERSE(filepath),1,
      LOCATE("/",REVERSE(filepath)
    ) - 1
 )
) as basename
FROM Table
```