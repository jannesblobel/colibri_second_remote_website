import Image from "next/image";

const data = {
  title: "Features",
  description: "Everything you get from Google Docs, but integrated into your markdown workflows.",
  features: [
    {
      title: "Live collaboration",
      description: "Work seamlessly together.",
      src: "/collab.png",
      width: 284,
      height: 395,
    },
    {
      title: "Share with anybody",
      description: "No account required, just send it over.",
      src: "/share.png",
      width: 284,
      height: 157,
    },
    {
      title: "Git sync",
      description: "Frictionless Github workflow.",
      src: "/git.png",
      width: 284,
      height: 106,
    },
    {
      title: "Inline Comments",
      description: "For async workflows and reviews.",
      src: "/comments-feature.png",
      width: 284,
      height: 126,
    }
  ],
};

const Features = () => {
  const columns = [[0], [1, 2], [3]];

  return (
    <div className="w-full flex flex-col gap-4 items-center mt-32">
      <h2 className="text-4xl font-semibold">{data.title}</h2>
      <h3 className="text-lg font-regular text-muted-foreground max-w-[450px] mx-auto text-center">{data.description}</h3>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-4">
            {column.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col gap-2 bg-white rounded-2xl p-5">
                <Image src={data.features[row].src} alt={data.features[row].title} width={data.features[row].width * 2} height={data.features[row].height * 2} />
                <h4 className="text-lg font-semibold pt-[15px]">{data.features[row].title}</h4>
                <p className="text-sm font-regular text-muted-foreground leading-[0.8rem]">{data.features[row].description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;