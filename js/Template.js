


export default class Template {
    constructor(templateFunction) {
        // store the template function for use in the render method
        this.templateFunction = templateFunction;
    }
    
    render(data) {
        const template = document.createElement('template');
        template.innerHTML = this.template(data);
        const fragment = template.content;
        const childNodes = fragment;
        return childNodes.length === 1 ? childNodes[0] : fragment;
    }
}