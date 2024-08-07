export default function handleFormToggle(e, form, input) {
    document.body.addEventListener('click', (e) => {
        form.style.display = 'none';
    })
    form.addEventListener('click', (e) => {
        e.stopPropagation();
    })
    if (form.style.display === 'flex') {
        form.style.display = 'none'
    } else {
        form.style.display = 'flex';
        input.focus();
    }
    e.stopPropagation()
}