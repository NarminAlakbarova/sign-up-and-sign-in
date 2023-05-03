const books = [
  {
    id: 23,
    title: "How to win friends and influence people",
    authors: ["Dale Carnegie"],
    publisher: "Pocket Books",
    year: "1936",
  },
  {
    id: 33,
    title: "Management: tasks, responsibilities, practices",
    authors: ["Peter F. Drucker"],
    publisher: "Harper Business",
    year: "1985",
  },

  {
    id: 13,
    title: "Strength finder 2.0",
    authors: ["Tom Rath"],
    publisher: "Gallup Press",
    year: "2007",
  },
  {
    id: 243,
    title: "In search of excellence: Lessons from America's best-run companies",
    authors: ["Thomas Peters", " Robert H. Waterman"],
    publisher: "Harper Collins",
    year: "1982",
  },
  {
    id: 88,
    title: "Built to last: Successful habits of visionary companies",
    authors: ["James C. Collins", "Jerry I. Porras"],
    publisher: "Harper Collins",
    year: "1994",
  },
  {
    id: 343,
    title: "Reengineering the corporation: A manifesto for business revolution",
    authors: ["Michael Hammer", "James A. Champy"],
    publisher: "Harper Collins",
    year: "1993",
  },
  {
    id: 777,
    title:
      "Competitive advantage: Creating and sustaining superior performance",
    authors: ["Michael E. Porter"],
    publisher: "Free Press",
    year: "1998",
  },
  {
    id: 923,
    title:
      "Crossing the chasm: Marketing and selling technology products to mainstream customers",
    authors: ["Geoffrey A. Moore", "Regis McKenna"],
    publisher: "Pocket Books",
    year: "1936",
  },
  {
    id: 2222,
    title:
      "7 habits of highly effective people: Powerful lessons in personal change",
    authors: ["Stephen R. Covey"],
    publisher: "Simon and Shuster",
    year: "1990",
  },
  {
    id: 935,
    title: "The Six Sigma Way",
    authors: ["Peter S. Pande et al", "Robert P. Neuman", "Roland R. Cavanagh"],
    publisher: "McGraw Hill",
    year: "2000",
  },
  {
    id: 2232,
    title:
      "The innovator's dilemma: When new technologies cause great firms to fail",
    authors: ["Clayton M. Christensen"],
    publisher: "Harvard Business School Press",
    year: "1997",
  },
  {
    id: 111,
    title: "The Essential Drucker",
    authors: ["Peter F. Drucker"],
    publisher: "Harper Business",
    year: "2001",
  },
];

let row = document.querySelector(".row");
let allBooks = JSON.parse(localStorage.getItem("favoritedBooks")) || [];

books.forEach((item) => {
  row.innerHTML += `
    <div class="col-3 my-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
         Publisher: ${item.publisher}
        </p>
         <i><p>Year: ${item.year}</p></i>
        <button class="btn btn-primary" id=${item.id}>Go somewhere</button>
      </div>
    </div>
  </div>
    `;
});

let allAddBtns = document.querySelectorAll(".btn-primary");
let calc=document.querySelector("#calc")
let count=0
allAddBtns.forEach((item) => {
  item.addEventListener("click", function () {
    let selcObj = books.find((obj) => obj.id == item.id);
    allBooks.includes(selcObj)
    if (!allBooks.includes(selcObj)) {
      let favoritedBooks = books.find((elem) => elem.id == item.id);
      allBooks.push(favoritedBooks);
      localStorage.setItem("favoritedBooks", JSON.stringify(allBooks));
      count=allBooks.reduce((sum,book)=>sum+ +book.year,0)
      calc.innerText=count
    }
    else(
      alert('You have already added this book!!"')
    )
  });
});
