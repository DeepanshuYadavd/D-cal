const input = document.getElementById("input-display");
      const button = document.querySelectorAll("button");
      var string = "";
      let i;

      // console.log(button);
      button.forEach((buttons) => {
        buttons.addEventListener("click", function (e) {
          // string += e.target.innerHTML;
          //         input.value = string;
          // console.log(e.target.innerHTML);
          if (e.target.innerHTML === "=" && input.value != "") {
            string = eval(string);
            input.value = string;
          } else if (e.target.innerHTML === "ac") {
            input.value = "";
            string = "";
          } else if (e.target.innerHTML === "del") {
            string = string.substring(0, string.length - 1);
            input.value = string;
          }
          // control the repetition of arithmetic operator:
          else if (
            e.target.innerHTML === "+" ||
            e.target.innerHTML === "-" ||
            e.target.innerHTML === "/" ||
            e.target.innerHTML === "*" ||
            e.target.innerHTML === "."
          ) {
            string += e.target.innerHTML;
            for (i = 0; i < string.length - 1; i++) {
              if (string[0] == "+" || string[0] == "*" || string[0] == "/") {
                string = "";
                input.value = string;
              } else if (
                (string[i] == "+" && string[i + 1] == "+") ||
                (string[i] == "-" && string[i + 1] == "-") ||
                (string[i] == "/" && string[i + 1] == "/") ||
                (string[i] == "*" && string[i + 1] == "*") ||
                (string[i] == "." && string[i + 1] == ".")
              ) {
                string = string.substring(0, string.length - 1);
                input.value = string;
              } else if (
                (string[i] == "+" && string[i + 1] == "*") ||
                (string[i] == "*" && string[i + 1] == "+") ||
                (string[i] == "+" && string[i + 1] == "/") ||
                (string[i] == "/" && string[i + 1] == "+") ||
                (string[i] == "*" && string[i + 1] == "-") ||
                (string[i] == "-" && string[i + 1] == "*") ||
                (string[i] == "*" && string[i + 1] == "/") ||
                (string[i] == "/" && string[i + 1] == "*")
              ) {
                string = string.substring(0, string.length - 1);
                input.value = string;
              } else {
                input.value = string;
              }
            }
          }

          //  stop the zero repition
          else if (e.target.innerHTML >= "0" || e.target.innerHTML == "00") {
            string += e.target.innerHTML;

            if (string[0] == "0" && string[1] == "0" && string[2] != "0") {
              console.log("this is 1st" + string);
              string = string.substring(0, string.length - 1);
              console.log("this is 2nd" + string);
              input.value = string;
            } else if (
              string[0] == "0" &&
              string[1] == "0" &&
              string[2] == "0"
            ) {
              string = string.substring(0, string.length - 2);
              input.value = string;
            } else {
              input.value = string;
            }
          } else {
            string += e.target.innerHTML;

            input.value = string;
          }
        });
      });

      window.addEventListener("keydown", function (e) {
        if ((e.key === "=" && input.value != "") || e.key === "Enter") {
          string = eval(string);
          input.value = string;
        } else if (e.key === "Delete") {
          input.value = "";
          string = "";
        } else if (e.key === "Backspace") {
          string = string.substring(0, string.length - 1);
          input.value = string;
        } else if (
          e.key === "+" ||
          e.key === "-" ||
          e.key === "/" ||
          e.key === "*" ||
          e.key === "."
        ) {
          string += e.key;
          for (i = 0; i < string.length - 1; i++) {
            if (string[0] === "+" || string[0] === "*" || string[0] === "/") {
              string = "";
              input.value = string;
            } else if (
              (string[i] == "+" && string[i + 1] == "+") ||
              (string[i] == "-" && string[i + 1] == "-") ||
              (string[i] == "/" && string[i + 1] == "/") ||
              (string[i] == "*" && string[i + 1] == "*") ||
              (string[i] == "." && string[i + 1] == ".")
            ) {
              string = string.substring(0, string.length - 1);
              input.value = string;
            } else if (
              (string[i] == "+" && string[i + 1] == "*") ||
              (string[i] == "*" && string[i + 1] == "+") ||
              (string[i] == "+" && string[i + 1] == "/") ||
              (string[i] == "/" && string[i + 1] == "+") ||
              (string[i] == "*" && string[i + 1] == "-") ||
              (string[i] == "-" && string[i + 1] == "*") ||
              (string[i] == "*" && string[i + 1] == "/") ||
              (string[i] == "/" && string[i + 1] == "*")
            ) {
              string = string.substring(0, string.length - 1);
              input.value = string;
            } else {
              input.value = string;
            }
          }
        } else if (e.key >= 0) {
          string += e.key;
          if (string[0] == "0" && string[1] == "0") {
            string = string.substring(0, string.length - 1);
            input.value = string;
          } else {
            input.value = string;
          }
        }
      });