// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sharp = require("sharp");

const compositeImages = async () => {
  try {
    await sharp("underwater.png")
      .composite([
        {
          input: "sammy-transparent.png",
          top: 50,
          left: 50,
        },
      ])
      .toFile("sammy-underwater.png");
  } catch (error) {
    console.log(error);
  }
};

compositeImages();

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
