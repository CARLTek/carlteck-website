import GallerySwiper from "./GallerySwiper";
import PageHeading from "./PageHeading";

export default function GallerySection() {
  const mediaSet1: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/gallery/dha1.jpeg" },
    { type: "image", src: "/gallery/dha2.jpeg" },
    { type: "image", src: "/gallery/dha3.jpeg" },
    { type: "image", src: "/gallery/dha4.jpeg" },
  ];

  const mediaSet2: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/gallery/off1.jpeg" },
    { type: "image", src: "/gallery/off2.jpeg" },
    { type: "image", src: "/gallery/off3.jpeg" },
    { type: "image", src: "/gallery/work1.jpeg" },
    { type: "image", src: "/gallery/work2.jpeg" },
    { type: "image", src: "/gallery/work3.jpeg" },
    { type: "video", src: "/gallery/work4.mp4" },
  ];

  const mediaSet3: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/gallery/ba1.jpeg" },
    { type: "video", src: "/gallery/b11.mp4" },
    { type: "image", src: "/gallery/ba2.jpeg" },
    { type: "video", src: "/gallery/ba0.mp4" },
    { type: "image", src: "/gallery/ba3.jpeg" },
    { type: "image", src: "/gallery/ba4.jpeg" },
    { type: "image", src: "/gallery/ba5.jpeg" },
    { type: "image", src: "/gallery/ba6.jpeg" },
    { type: "video", src: "/gallery/ba7.mp4" },
    { type: "video", src: "/gallery/ba20.mp4" },
    { type: "image", src: "/gallery/ba10.jpeg" },
  ];

  return (
    <div className="px-10 lg:px-20 bg-no-repeat pb-20 dr-screen">
      <PageHeading title="Our Gallery" />

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row gap-25 lg:gap-10 justify-end items-center pt-30">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold">
            Ad Rover Live at BA Mall – Positive Engagement and Feedback
          </h2>
          <p>
            The Ad Rover is currently deployed at BA Mall, where it is receiving
            great attention and engagement from the public. The response has
            been highly encouraging, and early results show promising
            interactions. We also had a valuable meeting with the CEO of BA
            Mall, who expressed keen interest and appreciation for the
            initiative.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <GallerySwiper media={mediaSet3} />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row gap-25 lg:gap-10 justify-end items-center pt-30">
        <div className="w-full lg:w-1/2">
          <GallerySwiper media={mediaSet1} />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold">
            Ad Rover Deployed at DHA Central Park – Quetta Eats Festival 2025
          </h2>
          <p>
            Our team successfully deployed the Ad Rover at DHA Central Park
            during the Quetta Eats Festival 2025. We had the honor of meeting
            the Administrator of DHA Quetta, who appreciated the innovation and
            showed great interest in our project.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row gap-25 lg:gap-10 justify-end items-center pt-30">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold">
            Strategic Discussions and Enhancements in Ad Rover Development
          </h2>
          <p>
            Highlighting our team’s technical discussions and collaborative
            efforts to improve the Ad Rover. We focused on identifying key
            enhancements, addressing technical challenges, and ensuring the
            system is optimized for real-world deployment and user engagement.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <GallerySwiper media={mediaSet2} />
        </div>
      </div>
    </div>
  );
}
