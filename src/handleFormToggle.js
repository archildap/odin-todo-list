export default function handleFormToggle(e, form, input) {

    const handleClickAway = (e) => {
        form.style.display = 'none';
    }

    document.body.addEventListener('click', handleClickAway);

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