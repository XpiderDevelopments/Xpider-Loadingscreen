/* highrider#2873 @ 2021 */
Config = {}; // Do not touch

Config.Buttons = [
  {
    id: "about", // Button ID
    label: "About", // Button label
    default: true, // On page load which button is pre-selected?
  },
  {
    id: "support",
    label: "Support",
    default: false,
  },
  //   {
  //     id: "media",
  //     label: "Media",
  //     default: false,
  //   },
]; // Categories [on the top right corner in the left box], match the ID's with page ID's.

Config.Pages = [
  {
    id: "about",
    description:
      "please read rules so you could know what to do when you are in the city.",
  },
  {
    id: "support",
    description: "If you are in need of any support please join discord & make a ticket and staff will be with you",
  },
//   {
//     id: "media",
//     description:
//       "",
//   },
]; // Pages in the left screen box. "id" has to be set to one of the button's ID's, it'll open that page when you click on that button.

Config.MediaPage = "media"; // The page in which you'll be able to see gallery and video.
Config.Images = [
  // Gallery images, put them in assets/media/gallery folder.
  "1.png", // Obviously the first image will be the first image visible in the gallery on load.
  "2.png",
];
