const contents = [
  {
    header: "About Us",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nesciunt quam at illo consectetur asperiores harum, voluptatem natus quo quaerat. Ratione in quas expedita nostrum ullam molestias id ipsa vero.",
    buttonText: "Read More",
    variant: 1,
  },
  {
    header: "Menu",
    paragraph:
      "This is the space to introduce the restaurant’s menu. Briefly describe the types of dishes and beverages offered and highlight any special features. Encourage site visitors to view the whole menu by exploring the menu page.",
    buttonText: "View Menu",
    variant: 2,
    color: "bg-primary",
  },
  {
    header: "Location",
    paragraph:
      "Located along the Ozamiz–Oroquieta National Highway, just beside 7-Eleven Clarin, our place is easy to find and perfect for quick stopovers. Whether you’re passing through Clarin or exploring Misamis Occidental, we’re in a convenient spot close to local shops and transportation hubs.",
    variant: 2,
    buttonText: "Get Directions",
    onClick: () => {
      const googleMapsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=8.1945863,123.8591501";

      const proceed = window.confirm(
        "This will open Google Maps in a new tab for directions. Continue?"
      );
      if (proceed) {
        window.open(googleMapsUrl, "_blank");
      }
    },
    color: "bg-secondary",
  },
];

export default contents;
