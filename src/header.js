export default function header() {
    const content = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('h1');

    header.classList.add('header');
    logo.classList.add('header-logo');
    content.setAttribute('id', 'content');

    logo.textContent = 'ToDo List';

    header.appendChild(logo);
    content.appendChild(header);
    document.body.appendChild(content);
}