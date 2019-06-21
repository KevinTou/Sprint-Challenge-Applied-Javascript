class Carousel {
  constructor(props) {
    this.props = props;
    // console.log("this.props: ", this.props);

    this.images = props.querySelectorAll("img");
    // console.log("this.images: ", this.images);

    this.leftButton = props.querySelector(".left-button");
    // console.log("this.leftButton: ", this.leftButton);

    this.rightButton = props.querySelector(".right-button");
    // console.log("this.rightButton: ", this.rightButton);

    this.currentIndex = 0;

    this.images[0].style.display = "block";

    this.leftButton.addEventListener("click", () => {
      this.rotateLeft();
    });

    this.rightButton.addEventListener("click", () => {
      this.rotateRight();
    });
  }

  rotateLeft() {
    this.images[this.currentIndex].style.display = "none";
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
      this.images[this.currentIndex].style.display = "block";
    } else {
      this.currentIndex -= 1;
      this.images[this.currentIndex].style.display = "block";
    }
  }

  rotateRight() {
    this.images[this.currentIndex].style.display = "none";
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
      this.images[this.currentIndex].style.display = "block";
    } else {
      this.currentIndex += 1;
      this.images[this.currentIndex].style.display = "block";
    }
  }
}

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
