# Part 3. Debugging using the DevTools
## DevTools - Debugging
1. num1 and num2 were being treated as strings, so the "+" operator was being treated as a string concatenation rather than an addition between two numbers. 
2. To fix this bug, num1 and num2 need to be ensured that they are being treated as numbers. Therefore, using the parseInt() method, num1 and num2 are converted from a string variable to an integer variable. Now that the variables are of the correct type, the "+" operator performs addition rather than concatenation.

## DevTools - Network Tab
3. citylots.json
4. part2.js
5. 11.7 mb
6. 1.86 seconds
7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData