const isString = (nodo) => typeof nodo === 'string';
const isText = (nodo) => nodo instanceof Text;
const isTag = (nodo) => nodo instanceof Tag;
const isAttr = (nodo) => typeof nodo === 'object' && !Array.isArray(nodo) && !isTag(nodo);
const attrToString = (attrs) => Object.keys(attrs).map(attr => `${attr}="${attrs[attr].trim()}"`).join(' ');
const toNode = (node) => isString(node) ? new Text(node) : node;

class Text {
    constructor(texto) {
        this.texto = texto;
    }

    toString(indent='') {
        return `${indent}${this.texto.trim()}`;
    }
}

class Tag {
    constructor(nombre, atributos, contenido) {
        this.nombre = nombre;
        this.atributos = atributos;
        this.contenido = contenido;
    }

    static crear(...lista) { 
        const nombre    = lista.shift();
        const atributos = (lista.length > 0 && isAttr(lista[0])) ? lista.shift() : {};
        const hijos     = lista.map(toNode);

        return new Tag(nombre, atributos, hijos);
    }

    toString(indent = '') {
        const attrs = attrToString(this.atributos);

        const open = `${this.nombre} ${attrs}`.trim();
        const close = `${this.nombre}`;

        if (this.contenido.length === 0) { // Si no hay hijos hacer que la etiqueta sea auto-cerrada
            return `${indent}<${open}/>`;
        }

        if (this.contenido.length === 1 && isText(this.contenido[0])) { // Si solo hay un hijo y es texto mostrar todo en una línea
            return `${indent}<${open}>${this.contenido[0].toString()}</${close}>`;
        }

        const contenido = this.contenido.map(item => item.toString(`\t${indent}`).join('\n'));
        return `${indent}<${open}>\n${contenido}\n${indent}</${close}>`;
    }
}

// Hacemos constructores para las etiquetas más comunes
const html  = (...lista) => Tag.crear('html', ...lista);
const head  = (...lista) => Tag.crear('head', ...lista);
const title = (...lista) => Tag.crear('title', ...lista);
const body  = (...lista) => Tag.crear('body', ...lista);
const h1    = (...lista) => Tag.crear('h1', ...lista);
const h2    = (...lista) => Tag.crear('h2', ...lista);
const h3    = (...lista) => Tag.crear('h3', ...lista);
const p     = (...lista) => Tag.crear('p', ...lista);
const div   = (...lista) => Tag.crear('div', ...lista);
const span  = (...lista) => Tag.crear('span', ...lista);
const ul    = (...lista) => Tag.crear('ul', ...lista);
const ol    = (...lista) => Tag.crear('ol', ...lista);
const li    = (...lista) => Tag.crear('li', ...lista);
const a     = (...lista) => Tag.crear('a', ...lista);
const img   = (...lista) => Tag.crear('img', ...lista);

console.log('Ejemplo 4');

const pagina = html({ lang: 'es', meta: 'xxx' },
    head(title('Ejemplo 4')),
    body(
        'Texto libre',
        h1({style:'color:red'}, 'Título 1'),
        p('Texto del párrafo 1'),
        h2('Título 2'),
        'otro texto libre',
        p('Texto del párrafo 2'),
        div(
            h3('Título 3'),
            p('Texto del párrafo 3'),
            'Texto del párrafo 4',
        )
    )
)

console.log(pagina.toString());
