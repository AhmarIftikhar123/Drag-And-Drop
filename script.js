let left_box = document.querySelector(".left_box"),
  right_box = document.querySelector(".right_box"),
  lists = document.querySelectorAll(".list");

lists.forEach((li) => {
  li.addEventListener("dragstart", (e) => {
    var selected = e.target;

    right_box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    left_box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    right_box.addEventListener("drop", () => {
      if (selected !== null) {
        right_box.appendChild(selected);
        selected = null;
      }
    });
    left_box.addEventListener("drop", () => {
      if (selected !== null) {
        left_box.appendChild(selected);
        selected = null;
      }
    });
  });
});

// With for loop

// for (let list of lists) {
//   list.addEventListener("dragstart", (e) => {
//     let selected = e.target;

//     right_box.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });
//     right_box.addEventListener("drop", () => {
//       if (selected !== null) {
//         right_box.appendChild(selected);
//         selected = null;
//       }
//     });

//     left_box.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });
//     left_box.addEventListener("drop", () => {
//       if (selected !== null) {
//         left_box.appendChild(selected);
//         selected = null;
//       }
//     });
//   });
// }
