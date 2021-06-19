import { ScaleLoader } from 'react-spinners'
const Loading = () => (
  <div className="loader">
    <ScaleLoader height={40} width={4} radius={4} margin={2} color="#85D0CC" />
    <p>Converting</p>
  </div>
)

export default Loading
