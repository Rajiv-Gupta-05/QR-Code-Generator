import QRCode  from "qrcode"
import { useState } from "react"

function App() {
	const [url, setUrl] = useState('')
	const [qrcode, setQrcode] = useState('')

	const GenerateQRCode = () =>{
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#fff',
				light: '#00000ff'
			}
		} ,(err, url) =>{
			if (err) return console.error(err)
			setQrcode(url)
		})

	}


	return (
		<div className="app">
			<h1>QR Code Generator</h1>
			<input
			    type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={(evt) => setUrl(evt.target.value)} />
				<button onClick={GenerateQRCode}>Generate</button>
				<>
					<img src={qrcode}  />
					<a href={qrcode} download="qrcode.png">Download</a>
				</>
				
		</div>
	)
}

export default App
