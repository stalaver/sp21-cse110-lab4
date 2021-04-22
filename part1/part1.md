# Part 1a. A Quick Introduction...
1. values added: 20
2. final result: 20
3. values added: 20
4. There is an error in line 13 where result is not defined because result is defined in the if block.
5. There is an error because result is being assigned another value, which is not allowed because result is a constant value.
6. There is an error because, like the let keyword, const is only defined in its block.
   
# Part 1b. A Little More of a Challenge...
1. At line 12, 3 is printed because that is the value of i after all the iterations in the for loop are done. This is because the length of prices is 3, but since it is post increment, it increments once more after the for loop.
2. Line 13 outputs 150, and this is possible because discountedPrice uses the var keyword and therefore is available throughout the whole function. 
3. Line 14 outputs 150, and this is true because finalPrice uses the var keyword and is therefore available throughout the whole function. This outputs the same as discountedPrice because the multiplication of 100 and division of 100 cancel each other out, resulting in the same value after rounding.
4. This function returns [ 50, 100, 150 ], which is a listed of discounted prices. This is because after the prices are discounted by 50%, they are pushed into the var discounted list and returned by the end of the function.
5. At line 12, an error occurs because i is not defined outside of its for loop block due to it using the let keyword, and is out of scope by line 12.
6. At line 13, an error occurs because discountedPrice is not defined outside of its for loop block due to it using the let keyword, and is out of scope by line 12.
7. 150 is outputted at line 14 because finalPrice is defined in a block where it can be accessed everywhere despite its let keyword.
8. This function returns [ 50, 100, 150 ], which is a listed of discounted prices. This is because after the prices are discounted by 50%, they are pushed into the var discounted list and returned by the end of the function.
9. At line 11, there is an error because i is only defined within the for loop block due to its let keyword and is out of scope outside of the for loop.
10. 3 is outputted because it is just outputting the constant length of the prices array.
11. This function returns [ 50, 100, 150 ], which is a listed of discounted prices. This is because after the prices are discounted by 50%, they are pushed into the var discounted list and returned by the end of the function. This works with constant because we are not reassigning or redeclaring the constant, it is already declared and assigned and we are just adding to the list that the constant points to.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '32' because with the + operator, JS treats this as a string concatenation. Therefore, the result is a string.
    B. 1 because you cannot perform subtraction on strings, so when using the - operator it converts the string to a number and does arithmetic subtraction.
    C. 3 because with null, we are adding 3 and 0 because null gets converted numerically to 0 so the result is 3.
    D. '3null' because '3' is a string, so the + operator is being treated as a string concatenation.
    E. 1 because true maps to the number 1, and null  maps to 0, so we are adding 1 and 0 which equals 1.
    F. 0 because false maps to the number 0, and null  maps to 0, so we are adding 0 and 0 which equals 0.
    G.'3undefined' because "3" is a string, so the + operator is being treated as a string concatenation.
    H. NaN because you cannot subtract strings, so "3" is converted to a number and when subtracting undefined, it is not a number, so the result is NaN.
14. A. true because when comparing values of different types, JS converts the values to numbers.
    B. false because in lexographical order, 2 is greater than 12.
    C. true because when comparing values of different types, JS converts the values to numbers, and 2 is equal to 2.
    D. false because the strict equality operator === immediately sees that the types are different.
    E. false because true maps to 1, so true is not equivalent to 2.
    F. This is false because Boolean(2) maps to true, and because they are both of the same type Boolean, then they are strictly equivalent.
15. == checks to see if two values are equal after converting them to numbers. === is a strict equality operator which does not do type conversion, therefore will automatically return false if the types are different.
17. The result will be [2, 4, 6] because when the array item is being pushed into the new array, the item is being passed into doSomething at the same time which multiplies the item by 2. Therefore, each item is being multiplied by 2 right as they are being pushed into the new array.
19. 1
    4
    3
    2
