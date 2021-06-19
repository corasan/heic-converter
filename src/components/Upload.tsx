import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'
import { ReactComponent as FileUploadIcon } from '../assets/file-upload-filled.svg'

const Upload = ({ getRootProps, getInputProps }: UploadProps) => (
  <div {...getRootProps()}>
    <input {...getInputProps()} />
    <div className="icon-btn">
      <FileUploadIcon width={82} height={82} />
    </div>
    <p>
      Drop your <span style={{ fontWeight: 'bold' }}>HEIC</span> file here
    </p>
  </div>
)

interface UploadProps {
  getInputProps: (props?: DropzoneInputProps | undefined) => DropzoneInputProps
  getRootProps: (props?: DropzoneRootProps | undefined) => DropzoneRootProps
}

export default Upload
