---
title: Reusable charts
description: Building chart classes that are reusable.
categories:
  - d3
  - javascript
---

## Reusable charts

```javascript
import * as d3 from 'd3';

d3.selection.prototype.appendSelect = function(element, classString) {
  const selected = classString ?
    this.select(`${element}.${classString.split(' ').join('.')}`) :
    this.select(element);

  if (selected.empty()) {
    return classString ?
      this.append(element).classed(classString, true) :
      this.append(element);
  }

  return selected;
};

export default d3;

```

TK TK TK
