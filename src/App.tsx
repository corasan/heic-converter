import './App.css'
import Upload from './components/Upload'
import { useDropzone } from 'react-dropzone'
import heic2any from 'heic2any'
import { useCallback, useState } from 'react'

function App() {
  const [image, setImage] = useState<Blob | Blob[]>()

  const onDrop = useCallback(async acceptedFiles => {
    if (acceptedFiles.length > 0) {
      const res = await heic2any({
        blob: acceptedFiles[0],
        toType: 'image/jpeg',
        quality: 1,
      })
      setImage(res)
    }
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="App">
      <Upload getInputProps={getInputProps} getRootProps={getRootProps} />
    </div>
  )
}

export default App
