# MongoDB-Fundamentals-
Overview
This project demonstrates core MongoDB operations including CRUD, advanced queries, aggregation pipelines, and indexing on a plp_bookstore database.

Assignment Parts
1. Data Insertion
Inserted sample book documents into the books collection.

Script: insert_data.js (optional but recommended to populate the database).

2. Basic CRUD Operations
Find books by genre, author, and publication year.

Update book prices.

Delete books by title.

3. Advanced Queries
Filter books by stock availability and publication date.

Projection to select specific fields.

Sorting results by price.

Pagination using limit and skip.

4. Aggregation Pipelines
Calculate average book price by genre.

Find author with the most books.

Group books by publication decade.

5. Indexing
Created indexes on title and a compound index on author and published year.

Used .explain("executionStats") to demonstrate index usage.

How to Run
Open MongoDB Shell (mongosh).

Switch to the database:

shell
Copy
Edit
use plp_bookstore
(Optional) Load sample data:

shell
Copy
Edit
load('insert_data.js')
Run all queries:

shell
Copy
Edit
load('queries.js')
Observe the output in the shell for each query.

Files in the Repository
queries.js: Contains all MongoDB queries for the assignment.

insert_data.js: Inserts sample book documents into the books collection.

README.md: This report explaining the assignment and how to run it.

