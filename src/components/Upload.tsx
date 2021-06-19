
import { ReactComponent as FileDownloadFilledIcon } from '../assets/file-download-filled.svg'
import { ReactComponent as FileUploadIcon } from '../assets/file-upload-filled.svg'

const Upload  = () => (
  <div>
    <FileUploadIcon width={60} height={60} />
    <FileDownloadFilledIcon width={60} height={60} />
    <p>Upload your HEIC file</p>
  </div>
)

export default Upload
