function whosPaying(names) {
      
    var length = names.length;
    var randomIndex = Math.floor(Math.random() * length);
    var selectedName = names[randomIndex];
        
    return selectedName + " is going to buy lunch today!";
}

var names = ["Reetta", "Pekka", "Roosa"];
console.log(whosPaying(names));
