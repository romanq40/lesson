// console.log(document.body.childNodes)
console.log(getChildren(document.body))


function getChildren(element,spaces = 0){ // возращает все дочерные элементы 
    let result = ''
    for (let el of element.children){
        result += ' '.repeat(spaces) + el.nodeName + '\n'
        if (el.hasChildNodes())
            result +=getChildren(el,spaces + 2)
    }
    return result
}