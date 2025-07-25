const contents = [
  {
    header: "About Us",
    paragraph:
      "This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.  Define the qualities and values that make it unique.",
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
  {
    header: "Our Story",
    paragraph: [
      "This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company's history or highlight a particular feature that sets it apart from competitors.",
      "Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.",
    ],
    variant: 1,
  },
];

export default contents;
