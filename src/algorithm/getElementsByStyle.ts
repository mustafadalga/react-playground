export default function getElementsByStyle(root: Element, property: string, value: string) {
    const elements: Element[] = []
    if (root instanceof Element) {
        const styles = getComputedStyle(root)
        const prop = getCssProperty(property) as keyof CSSStyleDeclaration

        if (styles[prop] == value) {
            elements.push(root)
        }

        for (const row of root.children) {
            elements.push(...getElementsByStyle(row, property, value))
        }

    }

    return elements
}

function getCssProperty(property: string) {
    const parts = property.split("-")
    if (parts.length === 1) return property
    return parts[0] + parts[1][0].toUpperCase() + parts[1].slice(1)
}

function parse(htmlString: string) {
    return new DOMParser().parseFromString(htmlString,
        'text/html',
    );
}

function parseHTML(htmlString: string): HTMLElement {
    const container = document.createElement('div'); // temporary container
    container.style.display = 'none';                // hide it
    container.innerHTML = htmlString;
    document.body.appendChild(container);           // attach to live DOM for getComputedStyle
    return container;
}

function cleanup(container: HTMLElement) {
    container.remove();
}

function test1() {
    const container = parseHTML(`
    <div>
      <span style="font-size: 12px">Span</span>
      <p style="font-size: 12px">Paragraph</p>
      <blockquote style="font-size: 14px">Blockquote</blockquote>
    </div>
  `);

    const received = getElementsByStyle(container, 'font-size', '12px');
    const expected = container.getElementsByTagName('span');

    for (let i = 0; i < expected.length; i++) {
        console.log("did found", received.some(found => found.isEqualNode(expected[i])))
    }

    cleanup(container);
}

function test2() {
    const doc = parse(`
      <div>
        <span style="font-size: 12px">Span</span>
        <p>Paragraph</p>
        <div></div>
      </div>`)

    const content = doc.body.firstChild
    if (content instanceof Element) {
        document.body.appendChild(content)
        const els = getElementsByStyle(content, 'font-size', '12px');
        const expected = document.getElementsByTagName('span')
        console.log(els, expected)
    }
}

test1()
test2()
