import Image from 'next/image';



const Home = () => {
  return (
    <div className="flex w-full pb-[50vh]">
      <video
        autoPlay
        muted
        loop
        // width="640"
        // height="400"
      >
        <source src="/laPerlaVideoHome.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default Home;
