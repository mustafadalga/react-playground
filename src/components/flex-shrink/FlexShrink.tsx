import "./style.css"


String.raw`
Main point:
flex-shrink defines how much an item shrinks when the container is too small (not enough space for all items).
Higher numbers = shrink more; lower numbers = shrink less.

**Example:**

\`\`\`html
<div class="container">
  <div class="item a">1</div>
  <div class="item b">2</div>
  <div class="item c">3</div>
</div>
\`\`\`

\`\`\`css
.container {
  display: flex;
  width: 300px; /* smaller than total basis */
  border: 2px solid black;
}

.item {
  flex-basis: 200px; /* total 600px → needs to shrink */
  border: 1px solid red;
}

/* Shrink ratios */
.a { flex-shrink: 1; background: lightblue; }
.b { flex-shrink: 2; background: lightgreen; }
.c { flex-shrink: 3; background: lightcoral; }
\`\`\`

**Result:**

* Total base = 600px → need to fit into 300px → must shrink 300px total.
* Shrink ratio = 1+2+3 = 6 parts → each part = 50px shrink.
* Final widths:

  * A = 200 - 50 = 150px
  * B = 200 - 100 = 100px
  * C = 200 - 150 = 50px


`

export default function FlexShrink() {
    return (
        <div>
            <h3>flex-shrink demo</h3>
            <div className="shrink-container">
                <div className="shrink-item item1">1</div>
                <div className="shrink-item item2">2</div>
                <div className="shrink-item item3">3</div>
            </div>
        </div>
    );
};