const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },

    get mains() {
      return this._courses.mains;
    },

    get desserts() {
      return this._courses.desserts;
    },


    set appetizers(appetizer) {
      this._courses.appetizers = appetizers;

    },

     set mains(mains) {
      this._courses.mains = mains;

    },

     set desserts(desserts) {
      this._courses.desserts = desserts;

    },

     set appetizers(appetizers) {
      this._courses.appetizers = appetizers;

    },

    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,

      };

    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = { 
          name: dishName,
          price: dishPrice,
      };
     

      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const meals = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + meals.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${meals.name}, ${desserts.name}, and the total price is ${totalPrice}.`;
      
    },

};

menu.addDishToCourse('appetizers', 'salad', 4.59);
menu.addDishToCourse('appetizers', 'chicken nibbles', 6.99);
menu.addDishToCourse('appetizers', 'chips', 3.59);

menu.addDishToCourse('mains', 'burger and chips', 7.99);
menu.addDishToCourse('mains', 'pizza', 8.99);
menu.addDishToCourse('mains', 'quorn sausages', 6.99);

menu.addDishToCourse('desserts', 'ice cream', 4.49);
menu.addDishToCourse('desserts', 'chocolate cake', 5.99);
menu.addDishToCourse('desserts', 'carrot cake', 3.59);

let meal = menu.generateRandomMeal();
console.log(meal);