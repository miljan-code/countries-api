import { FidgetSpinner } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-[5rem]">
      <FidgetSpinner height="80" width="80" />
    </div>
  );
};

export default Loading;
