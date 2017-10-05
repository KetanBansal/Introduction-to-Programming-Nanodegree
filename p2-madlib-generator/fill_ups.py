# String and its Answers to be filled in easy level
string_1 = "Terence Lewis is an Indian dancer and _0_, specializing in _1_ dance. He was recently a judge of _2_, along with actress _3_ and film director Sajid Khan."
answer_1 = ["choreographer", "contemporary", "nach baliye", "shilpa shetty"]

# String and its Answers to be filled in medium level
string_2 = "Shreya Ghoshal is an Indian playback _0_. Ghoshal became the first Indian singer to have a wax figure of her in _1_. She won the singing reality show _2_. She was also featured five times in _3_ list of the top 100 celebrities of India."
answer_2 = ["singer", "madame tussauds museum", "sa re ga ma pa", "forbes"]

# String and its Answers to be filled in hard level
string_3 = "Varun Dhawan is an _0_ actor who appears in Hindi films. The son of film director _1_. Dhawan made his acting debut with Johar 2012 romantic comedy _2_, for which he received a _3_ nomination for Best Male Debut."
answer_3 = ["indian", "david dhawan", "student of the year", "filmfare"]

name = raw_input("Enter your name: ")
print (".:Welcome to Madlib Generator:. " + name)

#length of array of answers
length = 4

#function to select the difficulty level and will furthur call question
#input: number which is level of difficulty
def start():
    print("Press 1 for Easy, 2 for medium, 3 for hard" )
    ans= input("\n\n\tEnter the level of dificulty(1/2/3): ")
    if ans==1 or ans==2 or ans==3 :
        # Sends the selected level to ques function
        levelQues(ans)
    else:
        print("\n\tWrong Selection!!! Try again")
        # Asks for level again if the user enters wrong level.
        start()

# Comparing with the answer and overriding the question
#functions to check whether the strings matched or not
def check(blank,guess,question,level):
    while blank < length:
        #Prompts the user for answers
        answer = raw_input("Please fill your option ")
        #Here we compare the answer entered by user to correct answer
        if answer.lower() == eval("answer_"+str(level))[blank]:
            #if the answer is correct, we replace the blank with correct ans
            question = question.replace("_"+str(blank)+"_",answer);
            print(question)
            blank = blank + 1        
        else:
            #checks if guesses are left
            if(guess==0):
                print("\n\n\tGame Over!!!")
                return
            guess = guess-1
            print("\n\tWrong Answer!!! Try again("+str(guess)+" guess(es) left)")
    print("\n\n\tCongratulations!!! You Won!!!")

# outputs the question and calls for check()
#function to call the check function
def levelQues(level):
    #initially blank = 0
    blank=0;
    #total no. of guesses is 3
    guess=3;
    #prints quiz accordingly
    print(eval("string_"+str(level)))
    check(blank,guess,eval("string_"+str(level)),level)

start()
