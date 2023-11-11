 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  describe("function from untils.js", () => {
    it(" should format a title properly, by uppercasing every first letter", () => {
      const testTitle = testData.title;
      const formattedTitle = formatTitle(testTitle);
      expect(formattedTitle).toBe("Nulla Ac");
    });
    
    it("should return a shortened bio, with only the first line of the passed in file", ()=> {
      const testBioData = testData.bio
      const shortenedBio = shortenBio(testBioData);
      expect(shortenedBio).toBe(
        "About the Speaker: Nulla ut erat id mauris vulputate elementum. Nullam varius."
      );
    });
  });
