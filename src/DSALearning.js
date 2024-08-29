/*
geeksforgeeks

Last Updated : 06 Jun, 2024
Array reverse or reverse a array means changing the position of each number of the given array to its opposite position from end, i.e. if a number is at position 1 then its new position will be Array.length, similarly if a number is at position 2 then its new position will be Array.length – 1, and so on.

Array Reverse in C/C++/Java/Python/JavaScript
Array Reverse in C/C++/Java/Python/JavaScript

Given an array (or string), the task is to reverse the array/string.

Examples:

Input: original_array[] = {1, 2, 3} Output: array_reversed[] = {3, 2, 1}

Input: original_array[] = {4, 5, 1, 2}
Output: array_reversed[] = {2, 1, 5, 4}

Table of Content

1. Array Reverse Using an Extra Array (Non In-place):
2. Array Reverse Using a Loop (In-place):
3. Array Reverse Inbuilt Methods (Non In-place):
4. Array Reverse Recursion (In-place or Non In-place):
5. Array Reverse Stack (Non In-place):
1. Array Reverse Using an Extra Array (Non In-place):
Create a new array of the same size as the original array.
Copy elements from the original array to the new array in reverse order.
Below is the implementation of the above approach:


function reverseArrayExtraArray(arr) {
    const reversedArr = arr.slice().reverse();

    // Print reversed array
    process.stdout.write("Reversed Array: ");
    reversedArr.forEach(element => process.stdout.write(element + " "));
}

// Example usage:
const originalArr = [1, 2, 3, 4, 5];
reverseArrayExtraArray(originalArr);

Output
Reversed Array: 5 4 3 2 1 
Time Complexity: O(n)
Copying elements to a new array is a linear operation.
Auxiliary Space Complexity: O(n)
Additional space is used to store the new array.
2. Array Reverse Using a Loop (In-place):
Iterate through the array using two pointers (start and end).
Swap elements at the start and end pointers.
Move the start pointer towards the end and the end pointer towards the start until they meet or cross each other.
reverse-a-number

Below is the implementation of the above approach : 


// Iterative Javascript program to reverse an array 

 Function to reverse arr[] from start to end
function reverseArray(arr,start,end) 
{ 
    while (start < end) 
    { 
        var temp = arr[start]; 
        arr[start] = arr[end]; 
        arr[end] = temp; 
        start++; 
        end--; 
    } 
}     

 Utility function to print an array 
function printArray(arr,size) 
{ 
for (var i = 0; i < size; i++){ 
console.log(arr[i]); 
} 
} 

 Driver function to test above functions 
    var arr= [1, 2, 3, 4, 5, 6]; 
    var n = 6; 
    // To print original array 
    printArray(arr, n); 
    
    // Function calling 
    reverseArray(arr, 0, n-1); 
    
    console.log("Reversed array is"); 
    printArray(arr, n); 

  

Output
1 2 3 4 5 6 
Reversed array is
6 5 4 3 2 1 

Time Complexity: O(n)
The loop runs through half of the array, so it’s linear with respect to the array size.
Auxiliary Space Complexity: O(1)
In-place reversal, meaning it doesn’t use additional space.
3. Array Reverse Inbuilt Methods (Non In-place):
Use inbuilt methods like reverse in Python or Array.Reverse in C#.
Below is the implementation of the above approach : 


let originalArray = [1, 2, 3, 4, 5];

// Using inbuilt method in JavaScript
let reversedArray = originalArray.slice().reverse();

// Print the reversed array
console.log(reversedArray);

Output
5 4 3 2 1 
Time Complexity: O(n) The reverse method typically has linear time complexity.
Auxiliary Space Complexity: O(n)
Additional space is used to store the reversed array.
4. Array Reverse Recursion (In-place or Non In-place):
Define a recursive function that takes an array as input.
Swap the first and last elements.
Recursively call the function with the remaining subarray.
Below is the implementation of the above approach : 


// Recursive Javascript program to reverse an array 

 Function to reverse arr[] from start to end
function reverseArray(arr,start,end) 
{ 
    var temp = arr[start]; 
    arr[start] = arr[end]; 
    arr[end] = temp; 
    
// Recursive Function calling 
    if (start+1<end-1){ 
    reverseArray(arr, start + 1, end - 1); 
    } 
}     
 Utility function to print an array 
function printArray(arr,size) 
{ 
for (var i = 0; i < size; i++){ 
console.log(arr[i]); 
} 
} 

/* Driver function to test above functions 

    var arr= [1, 2, 3, 4, 5, 6]; 
    
    // To print original array 
    printArray(arr, 6); 
    
    // Function calling 
    reverseArray(arr, 0, 5); 
    
    console.log("Reversed array is"); 
    
    // To print the Reversed array 
    printArray(arr, 6); 

Output
1 2 3 4 5 6 
Reversed array is
6 5 4 3 2 1 

Time Complexity: O(n). The recursion goes through each element once, so it’s linear.
Auxiliary Space Complexity: O(n) for non in-place, O(log n) for in-place (due to recursion stack).
5. Array Reverse Stack (Non In-place):
Push each element of the array onto a stack.
Pop elements from the stack to form the reversed array.
Below is the implementation of the above approach : 


function reverseArrayUsingStack(arr) {
    let stack = [];
    
    // Push elements onto the stack
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    // Pop elements from the stack to reverse the array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
reverseArrayUsingStack(arr);
console.log("Reversed Array:", arr);

Output
Reversed Array: 5 4 3 2 1 
Time Complexity: O(n)
Pushing and popping each element onto/from the stack requires linear time.
Auxiliary Space Complexity: O(n)
Additional space is used to store the stack.
6.Two Pointer approach
Set start to 0 and end to size – 1.
Swap Elements until Pointers Meet: While start is less than end, swap arr[start] with arr[end].
Swap arr[start] with arr[end].
Increment start and decrement end.
Continue swapping and moving pointers until start crosses end.

#include <bits/stdc++.h>

void reverseArrayTwoPointer(int arr[], int size)
{
    int start = 0;
    int end = size - 1;

    while (start < end) {
        // Swap elements at start and end positions
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move start forward and end backward
        start++;
        end--;
    }
}

int main()
{
    int arr[] = { 1, 2, 3, 4, 5 };
    int size = sizeof(arr) / sizeof(arr[0]);

    reverseArrayTwoPointer(arr, size);

    std::cout << "Reversed Array: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }

    return 0;
}
Output:

Reversed Array: 5 4 3 2 1 
Time Complexity: O(n) – This algorithm iterates through the array once, performing a constant number of operations for each element, resulting in linear time complexity.

Space Complexity: O(1) – The algorithm reverses the array in place without using any additional data structures, thus requiring constant space regardless of the size of the input array.





https://media.geeksforgeeks.org/auth/avatar.png
GeeksforGeeks

Previous Article
Searching in Array
Next Article
Program for array left rotation by d positions.
Similar Reads
Count of unique pairs (i, j) in an array such that sum of A[i] and reverse of A[j] is equal to sum of reverse of A[i] and A[j]
Given an array arr[] consisting of N positive integers, the task is to find the count of unique pairs (i, j) such that the sum of arr[i] and the reverse(arr[j]) is the same as the sum of reverse(arr[i]) and arr[j]. Examples: Input: arr[] = {2, 15, 11, 7}Output: 3Explanation:The pairs are (0, 2), (0, 3) and (2, 3). (0, 2): arr[0] + reverse(arr[2]) (
7 min read
Sort an array where a subarray of a sorted array is in reverse order
Given an array of N numbers where a subarray is sorted in descending order and rest of the numbers in the array are in ascending order. The task is to sort an array where a subarray of a sorted array is in reversed order. Examples: Input: 2 5 65 55 50 70 90 Output: 2 5 50 55 65 70 90 The subarray from 2nd index to 4th index is in reverse order. So
9 min read
Count number of common elements between a sorted array and a reverse sorted array
Given two arrays consisting of N distinct integers such that the array A[] and B[] are sorted in ascending and descending order respectively, the task is to find the number of values common in both arrays. Examples: Input: A[] = {1, 10, 100}, B[] = {200, 20, 2}Output: 0 Input: A[] = {2, 4, 5, 8, 12, 13, 17, 18, 20, 22, 309, 999}, B[] = {109, 99, 68
17 min read
Sum of integer value of input Array and reverse Array
Given an integer array of numbers num[], the task is to write a function to return the sum of the value of the array with its reverse value and then return the resulting array of digits. Examples: Input: num[] = [2, 5, 8, 2]Output: [5, 4, 3, 4]Explanation: Given array [2, 5, 8, 2], the numerical value is 2582 and the reverse value is 2852, so the s
11 min read
First string from the given array whose reverse is also present in the same array
Given a string array str[], the task is to find the first string from the given array whose reverse is also present in the same array. If there is no such string then print -1.Examples: Input: str[] = {"geeks", "for", "skeeg"} Output: geeks "geeks" is the first string from the array whose reverse is also present in the array i.e. "skeeg".Input: str
12 min read
View More Articles
Article Tags :
Amazon
CBSE - Class 11
Infosys
MAQ Software
+6 More
Practice Tags :
Amazon
Infosys
MAQ Software
Moonfrog Labs
+3 More
course-img
1195k+ interested Geeks
Data Structures and Algorithms - Self Paced
Explore
course-img
266k+ interested Geeks
Data Structures & Algorithms in Python - Self Paced
Explore
course-img
283k+ interested Geeks
Tech Interview 101 - From DSA to System Design for Working Professionals
Explore
geeksforgeeks-footer-logo
A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh - 201305
GFG App on Play Store
GFG App on App Store
Company
About Us
Legal
Careers
In Media
Contact Us
Advertise with us
GFG Corporate Solution
Placement Training Program
Explore
Job-A-Thon Hiring Challenge
Hack-A-Thon
GfG Weekly Contest
Offline Classes (Delhi/NCR)
DSA in JAVA/C++
Master System Design
Master CP
GeeksforGeeks Videos
Geeks Community
Languages
Python
Java
C++
PHP
GoLang
SQL
R Language
Android Tutorial
DSA
Data Structures
Algorithms
DSA for Beginners
Basic DSA Problems
DSA Roadmap
DSA Interview Questions
Competitive Programming
Data Science & ML
Data Science With Python
Data Science For Beginner
Machine Learning Tutorial
ML Maths
Data Visualisation Tutorial
Pandas Tutorial
NumPy Tutorial
NLP Tutorial
Deep Learning Tutorial
Web Technologies
HTML
CSS
JavaScript
TypeScript
ReactJS
NextJS
NodeJs
Bootstrap
Tailwind CSS
Python Tutorial
Python Programming Examples
Django Tutorial
Python Projects
Python Tkinter
Web Scraping
OpenCV Tutorial
Python Interview Question
Computer Science
GATE CS Notes
Operating Systems
Computer Network
Database Management System
Software Engineering
Digital Logic Design
Engineering Maths
DevOps
Git
AWS
Docker
Kubernetes
Azure
GCP
DevOps Roadmap
System Design
High Level Design
Low Level Design
UML Diagrams
Interview Guide
Design Patterns
OOAD
System Design Bootcamp
Interview Questions
School Subjects
Mathematics
Physics
Chemistry
Biology
Social Science
English Grammar
Commerce
Accountancy
Business Studies
Economics
Management
HR Management
Finance
Income Tax
Databases
SQL
MYSQL
PostgreSQL
PL/SQL
MongoDB
Preparation Corner
Company-Wise Recruitment Process
Resume Templates
Aptitude Preparation
Puzzles
Company-Wise Preparation
Companies
Colleges
Competitive Exams
JEE Advanced
UGC NET
UPSC
SSC CGL
SBI PO
SBI Clerk
IBPS PO
IBPS Clerk
More Tutorials
Software Development
Software Testing
Product Management
Project Management
Linux
Excel
All Cheat Sheets
Free Online Tools
Typing Test
Image Editor
Code Formatters
Code Converters
Currency Converter
Random Number Generator
Random Password Generator
Write & Earn
Write an Article
Improve an Article
Pick Topics to Write
Share your Experiences
Internships
@GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved
Lightbox
*/