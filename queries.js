// --- Task 2: Basic CRUD Operations ---

// 1. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" }).pretty();

// 2. Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } }).pretty();

// 3. Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" }).pretty();

// 4. Update the price of a specific book (e.g., "1984" price to 15.99)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 15.99 } }
);

// 5. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });

// --- Task 3: Advanced Queries ---

// 1. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
}).pretty();

// 2. Projection: return only title, author, price fields (example: all books)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).pretty();

// 3. Sorting by price ascending
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: 1 }).pretty();

// Sorting by price descending
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: -1 }).pretty();

// 4. Pagination: limit and skip (e.g., page 1 with 5 books per page)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
  .limit(5)
  .skip(0)
  .pretty();

// Page 2 (skip first 5 books)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
  .limit(5)
  .skip(5)
  .pretty();

// --- Task 4: Aggregation Pipeline ---

// 1. Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
]);

// 2. Find author with most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// --- Task 5: Indexing ---

// 1. Create an index on title
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Use explain() to demonstrate index usage for a query (example with title)
db.books.find({ title: "1984" }).explain("executionStats");

// Another explain example with author and year
db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats");
