<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Rest</h1>
    <script>
      // //bind   -------------------------------------------
      const testBind = {
        myBind() {
          console.log("Bind ", this);
        },
      };
      testBind.myBind();
      const bindTest = testBind.myBind.bind(testBind);
      bindTest();
      // //filter   -------------------------------------------
      const job = [
        { id: 1, title: "JS", free: true },
        { id: 2, title: "PHP", free: true },
        { id: 3, title: "DevOps", free: false },
      ];
      const myFilter = job.filter((c) => c.id !== 2);
      console.log("filter ", myFilter);
      console.log(
        "filter JS  ",
        job.filter((c) => c.title == "JS")
      );

      // //map   -------------------------------------------
      const items = ["PHP", "JS", "React", "TypeScript"];
      const item = items.map((c) => c);
      console.log("map ", item);
      //Object Destructuring-------------------------------------
      let person = {
        firstName: "John",
        lastName: "Doe",
      };
      let { firstName: fname, lastName: lname } = person;
      console.log("Object Destructuring : ", fname, lname);
      // //Spread---------------------------------------------------
      const numbersOne = [1, 2, 3];
      const numbersTwo = [4, 5, 6];
      const numbersCombined = [...numbersOne, "This is Spread", ...numbersTwo];
      console.log("Spread : ", numbersCombined);
     //super---------------------------------------------------
      class Car {
        constructor(brand) {
          this.carname = brand;
        }
        present() {
          return "I have a " + this.carname;
        }
      }

      class Model extends Car {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        show() {
          return this.present() + ", it is a " + this.model;
        }
      }

      mycar = new Model("Ford", "Mustang");
      console.log("super : ", mycar.show());
    </script>
  </body>
</html>
