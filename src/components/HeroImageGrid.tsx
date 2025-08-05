import dubaiSkyline from "@/assets/dubai-skyline.jpg";
import dubaiFinancial from "@/assets/dubai-financial.jpg";
import dubaiMarina from "@/assets/dubai-marina.jpg";
import dubaiDifc from "@/assets/dubai-difc.jpg";

export const HeroImageGrid = () => {
  const images = [
    { src: dubaiSkyline, alt: "Dubai Skyline" },
    { src: dubaiFinancial, alt: "Dubai Financial District" },
    { src: dubaiMarina, alt: "Dubai Marina" },
    { src: dubaiDifc, alt: "Dubai International Financial Centre" },
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`grid-image fade-in-up stagger-${index + 1}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};