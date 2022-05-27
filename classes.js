// Step 1: Create a base class called ZooAnimal that can store the animal name, animal type, and adoption date. It can also print these details to the console when needed through a function named "printDetails".



// Step 2: Create extended classes off ZooAnimal called ZooBird and ZooMammal that can automatically store the animal type without passing it in. You will need to create constructors for ZooBird and ZooMammal that only take the animal name and adoption date, and then use the "super" keyword inside them to utilize the ZooAnimal constructor to store the data.



// Step 3: Modify ZooAnimal to use a static variable in its constructor to track how many Zoo Animals have been adopted, and update that variable any time a new Zoo Animal is created. Also use a static method to add the ability to print this info to the console when needed through a function named "printAmount". Because the "super" keyword was used earlier to utilize the ZooAnimal constructor, the static variable will be updated automatically.



// Step 4: Modify ZooBird and ZooMammal to similarly track how many birds and mammals have been adopted using static variables in their constructors, and add the ability to print this info to the console when needed



// Step 5: Run the code with Node.js, and note that the console should print out the following:
// Crocodile / Reptile / Jan 22, 2022
// Flamingo / Bird / Feb 20, 2022
// Tiger / Mammal / Feb 12, 2022
// 3 animals
// 1 birds
// 1 mammals

// Step 6: If the above is printed out correctly, you're done. If the above is not printed to the console correctly, debug your code to find out how to resolve that.


// Review the code below but don't remove, modify, or add to it. It is used to create zoo animals from your above code and print details to the console
let crocodile = new ZooAnimal("Crocodile", "Reptile", "Jan 22, 2022");
let flamingo = new ZooBird("Flamingo", "Feb 20, 2022");
let tiger = new ZooMammal("Tiger", "Feb 12, 2022");

crocodile.printDetails();
flamingo.printDetails();
tiger.printDetails();

ZooAnimal.printAmount();
ZooBird.printAmount();
ZooMammal.printAmount();