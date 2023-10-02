import React from 'react';
import { Rings } from  'react-loader-spinner';

const Loading = () => {
  return (
    <div className="w-100 vh-100">
        <div className="d-flex align-items-center justify-content-center">
            <Rings
                height="280"
                width="280"
                color="#fdd835"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    </div>
  )
}

export default Loading