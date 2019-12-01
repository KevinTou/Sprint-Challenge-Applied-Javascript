class Carousel {
  constructor(props) {
    // Assign this.props to props for DOM reference
    this.props = props;
    // console.log("this.props: ", this.props);

    // Selects all the images from the parent carousel
    this.images = props.querySelectorAll("img");
    // console.log("this.images: ", this.images);

    // Selects the left button from the parent carousel
    this.leftButton = props.querySelector(".left-button");
    // console.log("this.leftButton: ", this.leftButton);

    this.leftButton.style.zIndex = "3";

    // Selects the right button from the parent carousel
    this.rightButton = props.querySelector(".right-button");
    // console.log("this.rightButton: ", this.rightButton);

    // Initial index to display
    this.currentIndex = 0;

    // Displays the first image
    this.images[0].style.display = "block";

    this.leftButton.addEventListener("click", () => {
      this.rotateLeft();
    });

    this.rightButton.addEventListener("click", () => {
      this.rotateRight();
    });
  }

  // Rotate carousel to the left and reset index to the last index when it reaches the front
  rotateLeft() {
    this.images[this.currentIndex].style.display = "none";
    this.images[this.currentIndex].classList.remove(
      "animated",
      "slideInLeft",
      "slideInRight",
      "faster"
    );
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
      this.images[this.currentIndex].classList.add(
        "animated",
        "slideInLeft",
        "faster"
      );
      this.images[this.currentIndex].style.display = "block";
    } else {
      this.currentIndex -= 1;
      this.images[this.currentIndex].classList.add(
        "animated",
        "slideInLeft",
        "faster"
      );
      this.images[this.currentIndex].style.display = "block";
    }
  }

  // Rotate carousel to the right and reset index back to 0 when it reaches the end
  rotateRight() {
    this.images[this.currentIndex].style.display = "none";
    this.images[this.currentIndex].classList.remove(
      "animated",
      "slideInRight",
      "slideInLeft",
      "faster"
    );
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
      this.images[this.currentIndex].classList.add(
        "animated",
        "slideInRight",
        "faster"
      );
      this.images[this.currentIndex].style.display = "block";
    } else {
      this.currentIndex += 1;
      this.images[this.currentIndex].classList.add(
        "animated",
        "slideInRight",
        "faster"
      );
      this.images[this.currentIndex].style.display = "block";
    }
  }
}

// Gets a specific .carousel element
let carousel = document.querySelector(".carousel");
// console.log("carousel", carousel);
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
