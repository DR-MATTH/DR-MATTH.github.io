const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = error => reject(error)
})

async function handleArchivo(e) {
  const file = e.target.files[0]
  toBase64(file)
    .then(base64 => {
      console.log(base64)
      fetch(`https://api.imgbb.com/1/upload?key=96966ef8138bc841dfcf76c97b15aea0&image=${base64}&expiration=600`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    })
    .catch(e => console.log(e))

}

const btnArchivo = document.getElementById('file')
btnArchivo.addEventListener('change', handleArchivo)