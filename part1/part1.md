1. It would print the last value of i to the console, which is price.length
2. It would print the last value of discountedPrice to the console
3. It would print the last value of finalPrice to the console
4. The function prints 3, 150, 150, and returns [50,100,150]. This is because we had discount to be .5, so the final price would be half of the original price that we input. 
5. Line 11 would generate an error, *i is not defined*, because unlike *var*, which has no block scope, *let* declared *i* inside the for-loop, so it is not accessible at line 11, which is out of the for-loop.
6. Line 12 would also generate the error *variable not defined*, with the same reason as in Q5. discountedPrice is declared inside the for-loop and is not accessible outside the block.
7. Line 13 would print the last value of finalPrice to the console, same as in Q3. This is because the variable *finalPrice*, although declared using *let*, is declared in the same block as the log function. So we would have access to it.
8. The function would still return [50,100,150]. This is because discounted is declared in the same block as the return statement. 
9. Line 11 did not get executed since we are trying to assign different value to constant variable finalPrice in line 7. If we ignore this issue, we would get the same answer as in Q5, where the program generates an error since i is defined by let so the log statement is not in the scope of i.
10. Same reason as 9, line 12 did not get executed due to issues with *const*. If we ignore this, we would have the same scope error as in Q6.
11. Same reason as 9, line 13 did not get executed due to issues with *const*. If we ignore this, we would get the same output as in Q7.
12. The function would return [50,100,150] if we change the definition of discounted and finalPrice to *let* or *var*. But discountedPrice declared as a const does not generate error, because if we enter a new iteration of the for-loop, we enter a new block, so we can define a constant variable with the same name as the previous block.
13. 
    A. student.name  
    B. student['Grad Year']  
    C. student.greeting()  
    D. student['Favorite teacher'].name  
    E. student.courseload[0]  
14. 
    A. 32. Concatenates 2 as a string to '3'.  
    B. 1. Interpret '3' as a number for mathematical operation.  
    C. 3. null becomes 0 when converted into number.
    D. 3null. null is converted to 'null' as string and performed string concatenation.  
    E. 4. true becomes 1 when converted into number.  
    F. 0. false and null both become 0 when converted into number.  
    G. 3undefined. undefined is converted to 'undefined' as string and performed string concatenation.  
    H. NaN. Can't perform subtraction between strings.  
15. 
    A. true. since '2' becomes number 2 when compared with 1.  
    B. false. strings are compared letter by letter. '2' is greater than '1', the first letter of '12'.  
    C. true. with non-strict check ==, '2' is compared as number 2.  
    D. false. with strict equality check ===, '2' is viewed as a string, and is thus not the same as a number.  
    E. false. true is converted to 1 as a number, not equal to 2.  
    F. true. 2 is a non-zero number, so would have boolean value true.  
16. "==" performs weak equality check which would convert the two variables to the same type and then compare if their values are equal. "===" performs strict equality check so that two variables are considered equal here if they have the same type and the same value.  
17. How are you got printed. Because in the if conditional, true is converted to 1 and got compared with 2, so they are not equal. In the else if conditional, 2 is converted into boolean true, so the else-if block got executed.  
18. js file
19. the function returns [6,8,10]. First the code enters the for-loop in line 3 and iterate through each the input array. Take i=0 as an example. The code enters line 4, since the callback function here is doSomething as by input parameter, the function calls doSomething with num = array[0] = 1, callback is the new function that is defined on line 4-5. Then in the doSomething function, it calls the function defined on line 4-5 with parameter 1+2=3, and that function returns 6, so doSomething returns 6. Then 6 is pushed to the newArr and we continue with the same procedure on the rest array element. So we got [(1+2)\*2, (2+2)\*2, (3+2)\*2], which is [6,8,10].
20. js file
21. 1 4 3 2, where 2 is printed 1 second after the previous three. 
