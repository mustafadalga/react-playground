import "./style.css"


String.raw`


**Main point:**
\`flex-grow\` defines **how much extra space** an item takes up **when the container has free space** (after all items get their base widths).
Higher numbers = larger share of remaining space.

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
  width: 600px;
  height: 100px;
  border: 2px solid black;
}

.item {
  flex-basis: 100px; /* Each starts at 100px */
  border: 1px solid red;
}

/* Only grow ratio differs */
.a { flex-grow: 1; background: lightblue; }
.b { flex-grow: 2; background: lightgreen; }
.c { flex-grow: 3; background: lightcoral; }
\`\`\`

**Result:**

* Total base = 300px → 300px free space.
* Grow ratio = 1+2+3 = 6 parts.
* Extra space per part = 300 / 6 = 50px.
* Final widths:

  * A = 100 + 50 = 150px
  * B = 100 + 100 = 200px
  * C = 100 + 150 = 250px

`

export default function FlexGrow() {
    return (
        <div>
            <div className="container">
                <div className="item a">1</div>
                <div className="item b">2</div>
                <div className="item c">3</div>
            </div>

        </div>
    );
};