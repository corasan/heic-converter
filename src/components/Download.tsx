import { ReactComponent as FileUploadIcon } from '../assets/file-download-filled.svg'

const Upload = ({ name, link }: DownloadProps) => (
  <div>
    <a href={link} className="icon-btn" download={name}>
      <FileUploadIcon width={82} height={82} />
    </a>
    <p>Download your JPEG image</p>
  </div>
)

interface DownloadProps {
  link: string | undefined
  name: string | undefined
}

export default Upload
