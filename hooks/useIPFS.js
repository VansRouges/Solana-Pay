// const useIPFS = (hash, filename) => {
// return `https://gateway.pinata.cloud/ipfs/${hash}?filename=${filename}`
// };

// export default useIPFS;

import { useState, useEffect } from 'react';

const useIPFS = (hash, filename) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    setFile(`https://gateway.ipfscdn.io/ipfs/${hash}?filename=${filename}`);
  }, []);

  return file;
};

export default useIPFS;
