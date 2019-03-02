var contenido = document.querySelector('#contenido')

function traer()
{
	//contenido.innerHTML= `fafaffs`

	fetch('texto.txt')
	.then(data => data.text())
	.then(data => {
		console.log(data)
		contenido.innerHTML = `${data}`
	})
}