## Bank Technical Test

# Requirements #
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

# Acceptance Criteria #
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date       |  credit |  debit | balance
|   ---    |    ---  |  ---   |   ---   |
14/01/2012 |         | 500.00 | 2500.00
13/01/2012 | 2000.00 |        | 3000.00
10/01/2012 | 1000.00 |        | 1000.00



# User Stories: #

As a user
So that I can add money to my bank account
I would like to deposit cash into my bank account

As a user
So that I can use cash to spend
I would like to withdraw cash from my bank account

As a user
So that I can see how much cash I have
I would like to be able to print my bank statement

As a user
So that I can see what dates my deposits were made
I would like to be able to see the dates on my bank statement

# Domain modelling #

Object - Bank 
Functions - Deposit
         - Withdraw 
         - Print 