export default function OurClients() {
  const data = [
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/xziedqb2kew6lowjta82.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/bubihcqnojis8ppwr8ad.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/akwieqysqfusanclphfx.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/hsybsrsslvdxnjz5xtqr.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/nl17zgt4f6glkcjiu8qf.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/oi3qrblxpnlhshmhwffn.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/m7pxhwraukljwj6bphlx.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/efsmagmmue5zdegnr6iw.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/yiqg19ogxpkvsjdmidoq.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/jkbxmyd4koedprlphpsm.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/r6kszgtfm8nvsa2demas.jpg",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dqurl8r48/image/upload/v1725362774/Clients/lcrarmh3i87htrr7etqc.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="h-fit w-[90%] pt-10 text-center ">
        <h1 className="text-4xl text-center font-bold mb-12">
          Our <span className="text-amber-500">Clients</span>
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          {data.map(({ imageLink }, index) => (
            <div key={index}>
              <img
                className="h-40 w-full max-w-full rounded-lg object-contain object-center"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
