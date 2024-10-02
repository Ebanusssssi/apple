import { Html } from '@react-three/drei';

Html;

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full text-2xl text-white/20 text-center">
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;
