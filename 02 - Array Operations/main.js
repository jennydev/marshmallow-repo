//1
// Some data you can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // 1. Filter the list of inventors for those who were born in the 1500's
  //1 
    const born = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    //console.table(born);

  // 2. Give us an array of the inventors' first and last names
  //2
    const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    //console.log(names);

  // 3. Sort the inventors by birthdate, oldest to youngest
  //3 
    const birthdates = inventors.sort(function(a, b){return a.year - b.year});
    //console.table(birthdates);

  // 4. How many years did all the inventors live?
  //4. 
    var total = 0;
    inventors.forEach (p => {
        total += p.passed - p.year;//(all ages sumed up)
       // console.log(p.passed - p.year);//(each individual's age)
    })
    //console.log(total);
   
  // 5. Sort the inventors by years lived
  //5
    const descending = inventors.sort(function(a, b){
        var ageA = (a.passed - a.year);
        var ageB = (b.passed - b.year);
        return ageA - ageB;
    });
    descending.forEach(x => {
        //console.log(x.first + " " + (x.passed - x.year));
    })
        //console.table(descending);

  // 6. Sort the people alphabetically by last name
  //6
    var lastNames = [];
    people.forEach(p => {
        var pNames = p.split(', ');
        lastNames.push(pNames[0]);
    })
    lastNames.sort();
    //console.log(lastNames);

  // 7. Sum up the instances of each of these
  //7

  //data ----------------------------------------------------
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const people2 = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
    
  // 8. Is at least one person 19 or older?
    people2.forEach(p => {
        if ((2018 - p.year) >= 19){
        //console.log(p);
        }
      })
    
  // 9. Is everyone 19 or older?
    people2.forEach(p => {
        if ((2018 - p.year) < 19){
        //console.log(p.name + " is " + (2018 - p.year) + " year(s)");
        }
      })
  
  // 10. Find the comment with the ID of 823423
  //10
    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];

    comments.forEach(comment => {
        if (comment.id === 823423){
        //console.log(comment.text + " : " + comment.id);
        }
    })

  // 11. Delete the comment with the ID of 823423
  //11
  comments.forEach(comment => {
    if (comment.id === 823423){
        var index = comments.indexOf(comment)
        comments.splice(index, 1)
    }
  })
  //console.table(comments);

  // Bonus algorithms:

  // 12. Write a function to reverse a string
    //reverseStr('hello') => 'olleh'

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    console.log(reverseString("hello"));
      