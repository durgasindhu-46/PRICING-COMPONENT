const toggle = document.getElementById('toggle');
const show = document.getElementById('show');
/*show monthly*/
toggle.addEventListener('change', e => {
	show.classList.toggle('show-monthly');
});
