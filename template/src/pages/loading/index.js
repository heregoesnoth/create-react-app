import React, { useContext } from 'react'
import { RingLoader } from 'react-spinners';
import { AppContext } from '../../components/app/context';

const Loading = props => {
  const { isLoading, setLoading } = useContext(AppContext)

  return (
    <div>
      <button onClick={() => setLoading(true)} >
        Start Loading
      </button>
      
      <button onClick={() => setLoading(false)} >
        Stop Loading
      </button>

      <RingLoader
        sizeUnit={'px'}
        size={75}
        loading={isLoading}
      />
    </div>
  )
}

export default Loading;