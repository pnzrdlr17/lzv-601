import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="bg">
      <h1 className="this-h1">Lempel - Ziv Algorithm Visualizer</h1>

      <div className="container">
        <div className="cardx">
          <h3 className="this-h3">History</h3>
          The Lempel-Ziv (LZ) algorithm is a lossless data compression algorithm
          developed by Abraham Lempel and Jacob Ziv in the 1970s. It is one of
          the most widely used compression algorithms and has been employed in
          various applications such as image, audio, and video compression, as
          well as in file compression software. It was a key component of the
          popular UNIX compression program "compress".
        </div>

        <div className="cardx">
          <h3 className="this-h3">Working</h3>
          The algorithm works by finding repetitive patterns in the input data
          and replacing them with shorter codes. It is achieved by building a
          dictionary of previously seen patterns, and then encoding the input
          data using the dictionary. It works independent of the distribution of
          data. The resulting compressed data then can be decoded by the
          recipient using the same dictionary.
        </div>

        <div className="cardx">
          <h3 className="this-h3">Pros</h3>
          LZ Algorithm has been widely used in the compression of files, images,
          audio, and video. It has also been employed in network protocols, such
          as the Zmodem protocol for file transfer. Moreover, it has been the
          basis for other compression algorithms, such as the LZ77 and LZ78
          algorithms, which have been developed to improve their compression
          efficiency and speed.
        </div>

        <div className="cardx">
          <h3 className="this-h3">Cons</h3>
          Limitations, such as its inability to compress highly random data or
          data with no repeated patterns. In addition, the LZ algorithm is not
          suitable for real-time applications or for compressing large amounts
          of data. However, its ability to adapt to changing input data and its
          relatively fast compression and decompression speeds really
          out-weighs.
        </div>

        {/* <div className="cardx">
          In conclusion, the Lempel-Ziv algorithm is an important data
          compression algorithm that has been widely used in various
          applications for several decades. While it has its limitations, its
          adaptability and speed make it a popular choice for compression tasks.
        </div> */}
      </div>
      <div className="footer">
        Made with ♥ by&nbsp;
        <a className="a-tag" href="https://github.com/pnzrdlr17">
          Fayez Anwar
        </a>
      </div>
    </div>
  );
};

export default About;
