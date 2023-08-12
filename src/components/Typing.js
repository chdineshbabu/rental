import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        'Get your Reantal Appartment',
        1000,
        'Get your Rental Home',
        1000,
        'Get your Personal Appartment',
        1000,
        'Get your Own Home',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default Typing;