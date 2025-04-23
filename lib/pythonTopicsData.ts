export interface Point {
  text: string;
  highlights?: string[];
  code?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  points: Point[];
}

export const pythonTopics: Topic[] = [
  {
    id: "google-colab",
    title: "Google Colab",
    description:
      "Colab is a hosted Jupyter Notebook service that requires no setup to use and provides free of charge access to computing resources, including GPUs and TPUs. Colab is especially well suited to machine learning, data science, and education.",
    points: [
      {
        text: "Google Colab is a free hosted Jupyter Notebook service that requires no setup to use and provides free of charge access to computing resources, including GPUs and TPUs.",
        highlights: ["free", "hosted", "Jupyter Notebook", "GPUs", "TPUs"],
      },
      {
        text: "In Google Colab the code run on the browser and the data is stored in the cloud.",
        highlights: ["browser", "cloud"],
      },
      {
        text: "Google Colab is sync with the google drive.",
        highlights: ["google drive"],
      },
      {
        text: "In Google Colab GPU and TPU are available for free.",
        highlights: ["GPU", "TPU"],
      },
      {
        text: "In Google Colab you can easily upload, download, and share your notebook with others.",
        highlights: ["upload", "download", "share"],
      },
      {
        text: "Google Colab support .ipynb files format.",
        highlights: [".ipynb"],
      },
      {
        text: "Google Colab features to export the notebook to other formats like HTML, PDF, and Python.",
        highlights: ["export", "HTML", "PDF", "Python"],
      },
      {
        text: "In Google Colab we can clear all the outputs by using Runtime > Clear all outputs.",
        highlights: ["clear", "Clear all outputs"],
      },
      {
        text: "Google colab offers auto save feature with Drive.",
        highlights: ["auto save", "Drive"],
      },
    ],
  },
  {
    id: "python-basics",
    title: "Introduction to Python",
    description:
      "Python is a versatile, high-level, interpreted programming language known for its readability and extensive libraries. It was created by Guido van Rossum in the late 1980s and first released in 1991. Python is used for various tasks, including data analysis, machine learning, web development, and automation",
    points: [
      {
        text: "Python is a high-level, interpreted programming language with easy syntax and dynamic semantics.",
        highlights: [
          "high-level",
          "interpreted",
          "easy syntax",
          "dynamic semantics",
        ],
      },
      {
        text: "Python is a beginner-friendly or readable language, making it easy to learn and use.",
        highlights: ["beginner-friendly", "readable", "easy to learn", " use"],
      },
      {
        text: "The extension of the python file is .py",
        highlights: [".py"],
      },
      {
        text: "Python is a dynamically typed language, which means that the type of the variable is determined at runtime.",
        highlights: ["dynamically typed"],
      },
      {
        text: "Python language was created by Guido van Rossum in 1991.",
        highlights: ["Guido van Rossum", "1991"],
      },
      {
        text: "Python follows an object-oriented approach to make code reusable and maintainable.",
        highlights: ["object-oriented", "reusable", "maintainable"],
      },
      {
        text: "Python is use for web development, data analysis, artificial intelligence, and scientific computing.",
        highlights: [
          "web development",
          "data analysis",
          "artificial intelligence",
          "scientific computing",
        ],
      },
      {
        text: "Python has 3 stable versions, 2.x, 3.x, and 3.10.x.",
        highlights: ["2.x", "3.x", "3.10.x"],
      },
      {
        text: "Python is best for scripting or automating tasks.",
        highlights: ["scripting", "automating tasks"],
      },
      {
        text: "Python use input() function to print the output.",
        highlights: ["print()"],
        code: "print('Hello, World!')",
      },
      {
        text: "Python use print() function to print the output.",
        highlights: ["print()"],
        code: "print('Hello, World!')",
      },
      {
        text: "In python the indentation (whitespace) is important and it is used to define code blocks instead of braces or keywords.",
        highlights: ["indentation", "whitespace", "code blocks"],
        code: "if x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is not greater than 5')",
      },
      {
        text: "Comments in Python start with the # character and extend to the end of the line.",
        highlights: ["#"],
        code: "# This is a comment\nx = 5  # This is also a comment",
      },
      {
        text: "Multi-line comments can be created using triple quotes (''' or \"\"\").",
        highlights: ["'''", '"""'],
        code: "'''\nThis is a\nmulti-line comment\n'''",
      },
    ],
  },
  {
    id: "data-types",
    title: "Data Types",
    description:
      "Data types in Python define the kind of value a variable can hold. Python is a dynamically typed language, meaning you don’t need to declare the type of a variable explicitly. It automatically detects the data type at runtime. ",
    points: [
      {
        text: "Python has several built-in data types including numbers, strings, lists, tuples, sets, and dictionaries.",
        highlights: [
          "numbers",
          "strings",
          "lists",
          "tuples",
          "sets",
          "dictionaries",
        ],
      },
      {
        text: "Python has 3 basic data types: int, float, str, and bool.",
        highlights: ["3 basic", "int", "float", "str", "bool"],
      },
      {
        text: "Python has 4 collection data types: list, tuple, set, and dictionary.",
        highlights: ["4 collection", "list", "tuple", "set", "dictionary"],
      },
      {
        text: "Python use type() function to get the type of the variable.  ",
        highlights: ["type()"],
        code: "print(type(10))  # <class 'int'>",
      },
      {
        text: "In python strings and tuples are immutable, Lists are mutable, Dictionaries are mutable and type are based on key-value pairs, Sets are mutable and does not allow duplicate values, Booleans are immutable and can only be True or False, None is a special type of its own and is immutable, and Typed conversion is possible with the int(), str() but in Functions.",
        highlights: [
          "tuples",
          "immutable",
          "Lists",
          "mutable",
          "Dictionaries",
          "Sets",
          "Booleans",
          "None",
          "Typed conversion",
        ],
        code: "#Tuple\nmy_tuple : tuple = (1, 2, 3)\n\n#List\nmy_list : list = [1, 2, 3]\n\n#Dictionary\nmy_dict : dict = {'name': 'John', 'age': 30, 'city': 'New York'}\n\n#Set\nmy_set : set = {1, 2, 3}\n\n#Boolean\nmy_bool : bool = True\n\n#None\nmy_none : None = None",
      },
      {
        text: "Numbers include integers (int), floating-point (float), and complex numbers.",
        highlights: ["integers", "floating-point", "complex numbers"],
        code: "x = 10       # int\ny = 10.5     # float\nz = 1+2j     # complex",
      },
      {
        text: "Strings are sequences of characters enclosed in single, double, or triple quotes.",
        highlights: [
          "sequences",
          "single quotes",
          "double quotes",
          "triple quotes",
        ],
        code: "name = 'John'\nmessage = \"Hello, World!\"\nparagraph = '''This is a\nmulti-line string'''",
      },
      {
        text: "Lists are ordered, mutable collections that can contain items of different data types.",
        highlights: ["ordered", "mutable", "different data types"],
        code: "my_list = [1, 'Hello', 3.14, True]",
      },
      {
        text: "Tuples are ordered, immutable collections similar to lists but cannot be modified after creation.",
        highlights: ["ordered", "immutable"],
        code: "my_tuple = (1, 'Hello', 3.14, True)",
      },
      {
        text: "Sets are unordered collections of unique elements.",
        highlights: ["unordered", "unique elements"],
        code: "my_set = {1, 2, 3, 4, 5}",
      },
      {
        text: "Dictionaries are unordered collections of key-value pairs.",
        highlights: ["unordered", "key-value pairs"],
        code: "my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}",
      },
    ],
  },
  {
    id: "operators-keywords-variables",
    title: "Operators, Keywords, and Variables",
    description:
      "Keywords are reserved words in Python that have special meanings and cannot be used as variable names. They are used to define the structure of the program and the operations that can be performed on the data.",
    points: [
      {
        text: "Python has 4 types of operators: Arithmetic, Assignment, Comparison, Logical.",
        highlights: ["Arithmetic", "Assignment", "Comparison", "Logical"],
      },
      {
        text: "Arithmetic operators are used to perform mathematical operations on numbers. And they are +, -, *, /, %, **, //.",
        highlights: [
          "Arithmetic",
          "operators",
          "+",
          "-",
          "*",
          "/",
          "%",
          "**",
          "//",
        ],
        code: "x + y  # Addition\nx - y  # Subtraction\nx * y  # Multiplication\nx / y  # Division\nx % y  # Modulus\nx ** y  # Exponentiation\nx // y  # Floor division",
      },
      {
        text: "Assignment operators are used to assign values to variables. And they are =, +=, -=, *=, /=, %=, **=, //=.",
        highlights: [
          "Assignment",
          "operators",
          "=",
          "+=",
          "-=",
          "*=",
          "/=",
          "%=",
          "**=",
          "//=",
        ],
        code: "x = y  # Assignment\nx += y  # Addition assignment\nx -= y  # Subtraction assignment\nx *= y  # Multiplication assignment\nx /= y  # Division assignment\nx %= y  # Modulus assignment\nx **= y  # Exponentiation assignment\nx //= y  # Floor division assignment",
      },
      {
        text: "Comparison operators are used to compare two values and return a boolean value (True or False). And they are ==, !=, >, <, >=, <=.",
        highlights: [
          "Comparison",
          "operators",
          "==",
          "!=",
          ">",
          "<",
          ">=",
          "<=",
        ],
        code: "x == y  # Equal\nx != y  # Not equal\nx > y  # Greater than\nx < y  # Less than\nx >= y  # Greater than or equal to\nx <= y  # Less than or equal to",
      },
      {
        text: "Logical operators are used to combine conditional statements. And they are and, or, not.",
        highlights: ["Logical", "operators", "and", "or", "not"],
        code: "x and y  # Logical AND\nx or y  # Logical OR\nnot x  # Logical NOT",
      },
      {
        text: "Keywords are reserved words in Python that have special meanings and cannot be used as variable names. They are used to define the structure of the program and the operations that can be performed on the data.",
        highlights: ["Keywords", "reserved words", "variable names"],
        code: "if, elif, else, for, while, def, return, import, from, as, in, is, not, and, or, True, False, None",
      },
      {
        text: "Variables are used to store data in Python. And they are defined using the = operator.",
        highlights: ["Variables", "="],
        code: "x = 10\ny = 20\nz = x + y",
      },
    ],
  },
  {
    id: "string-and-casting",
    title: "String and Casting",
    description:
      "Strings in Python are immutable sequences used to store text. Casting allows conversion between different data types, like numbers to strings.",
    points: [
      {
        text: "The text is written in the form of a string. And it is enclosed in single, double, or triple quotes.",
        highlights: ["String", "single", "double", "triple quotes"],
        code: "name = 'John' \t\t\t\t #single quote\nmessage = \"Hello, World!\" \t #double quote\nparagraph = '''This is a\nmulti-line string''' \t\t #triple quote",
      },
      {
        text: "String is a sequence of characters enclosed in single, double, or triple quotes.",
        highlights: [
          "String",
          "single quotes",
          "double quotes",
          "triple quotes",
        ],
        code: "name = 'John'\nmessage = \"Hello, World!\"\nparagraph = '''This is a\nmulti-line string'''",
      },
      {
        text: "In python the length of the string is found using the len() function.",
        highlights: ["len()"],
        code: "len(name)  #output: 4\nlen(My name is Ali)  #output: 11\nlen(I am web developer)  #output: 15",
      },
      {
        text: "In python string is immutable.",
        highlights: ["immutable"],
        code: "name = 'John'\nname[0] = 'A'  # This will raise an error",
      },
      {
        text: "In python + operator is used to concatenate two strings.",
        highlights: ["+", "concatenate"],
        code: "name = 'Ali'\nmessage = \"Hello, Dear!\"\nparagraph = 'I am a web developer' \n\nprint(message + I am + name + And + paragraph) \n\n#output: Hello, Dear! I am Ali And I am a web developer",
      },
      {
        text: "In python * operator is used to repeat the string.",
        highlights: ["*"],
        code: "name = 'Ali'\nprint(name * 3) \n\n#output: AliAliAli",
      },
      {
        text: "In python we use str.upper() to convert the string to uppercase and str.lower() to convert the string to lowercase.",
        highlights: ["str.upper()", "str.lower()"],
        code: "name = 'Ali'\nprint(name.upper()) \t\t #output: ALI \nprint(name.lower()) \t\t #output: ali",
      },
      {
        text: "In python we use str.replace() to replace the string.",
        highlights: ["str.replace()"],
        code: "name = 'Ali'\nprint(name.replace('Ali', 'Ahmed')) \n\n#output: Ahmed",
      },
      {
        text: "In python we use str.slice() to slice the string.",
        highlights: ["str.slice()"],
        code: "name = 'Ali Askari'\nprint(name[0:3]) \t\t #output: Ali",
      },
      {
        text: "In python we use str.split() to split the string.",
        highlights: ["str.split()"],
        code: "name = 'Ali'\nprint(name.split(' ')) \n\n#output: ['Ali']",
      },
      {
        text: "In python we use str.strip() to remove the leading and trailing whitespace from a string.",
        highlights: ["str.strip()"],
        code: "name = ' Ali '\nprint(name.strip()) \n\n#output: Ali",
      },
      {
        text: "In python we use str.join() to join the string.",
        highlights: ["str.join()"],
        code: "name = ['Ali', 'Askari']\nprint(' '.join(name)) \n\n#output: Ali Askari",
      },
      {
        text: "In python we use str.find() to find the index of the string.",
        highlights: ["str.find()"],
        code: "name = 'Ali'\nprint(name.find('A')) \n\n#output: 0",
      },
      {
        text: "In python we use str.count() to count the number of occurrences of a substring in a string.",
        highlights: ["str.count()"],
        code: "name = 'Ali'\nprint(name.count('A')) \n\n#output: 1",
      },
      {
        text: "In python we use in operator to check if a substring is present in a string.",
        highlights: ["in operator"],
        code: "name = 'Ali'\nprint('A' in name) \n\n#output: True",
      },
      {
        text: "In python we use in operator to check if a substring is present in a string.",
        highlights: ["in operator"],
        code: "name = 'Ali'\nprint('A' in name) \n\n#output: True",
      },
      {
        text: "In python Typecasting is the conversion of one data type to another data type.",
        highlights: ["Typecasting"],
        code: "name = 'Ali'\nprint(int(name)) \n\n#output: 1",
      },
      {
        text: "In python we use int() to convert the string to integer, float() to convert the string to float, str() to convert the string to string, bool() to convert the string to boolean, list() to convert the string to list, tuple() to convert the string to tuple, set() to convert the string to set, and dict() to convert the string to dictionary.",
        highlights: [
          "int()",
          "float()",
          "str()",
          "bool()",
          "list()",
          "tuple()",
          "set()",
          "dict()",
        ],
        code: "name = 'Ali'\n\nprint(int(name)) \t\t#output: 1 \n\nprint(float(name)) \t\t#output: 1.0 \n\nprint(str(name)) \t\t#output: Ali \n\nnprint(bool(name)) \t\t#output: True",
      },
      {
        text: "In python escape characters are used to escape the special characters in a string.",
        highlights: ["escape characters"],
        code: "name = 'Ali'\nprint('I'm a web developer') \n\n#output: I'm a web developer \n These are the Escape Characters: \n\n\\n \t\t#new line \n\\t \t\t#tab \n\\r \t\t#carriage return \n\\b \t\t#backspace",
      },
    ],
  },
  {
    id: "control-flow",
    title: "Control Flow",
    description: "Statements that control the flow of execution in Python",
    points: [
      {
        text: "Control flow is the order in which the statements are executed in a program.",
        highlights: ["Control flow"],
      },
      {
        text: "Conditional statements (if, elif, else) allow code to execute based on certain conditions.",
        highlights: ["if", "elif", "else"],
        code: "if age < 18:\n    print('Minor')\nelif age >= 18 and age < 65:\n    print('Adult')\nelse:\n    print('Senior')",
      },
      {
        text: "If statement is executed if the condition is true.",
        highlights: ["if"],
        code: "if age < 18:\n    print('Minor')",
      },
      {
        text: "Elif statement is executed when the if condition is false and the current condition is true.",
        highlights: ["elif", "if"],
        code: "elif age >= 18 and age < 65:\n    print('Adult')",
      },
      {
        text: "Else statement is executed when the if, and elif condition is false.",
        highlights: ["else", "if", "elif"],
        code: "else:\n    print('Senior')",
      },
      {
        text: "Logical operators are used to combine conditional statements. And they are and, or, not. ",
        highlights: ["Logical", "operators", "and", "or", "not"],
        code: "if age < 18:\n    print('Minor')\nelif age >= 18 and age < 65:\n    print('Adult')\nelse:\n    print('Senior')",
      },
      {
        text: "For loop is used to iterate over a sequence (like a list, tuple, dictionary, set, or string).",
        highlights: ["For loop", "iterate", "sequence"],
        code: "for i in range(5):\n    print(i)  # Prints 0, 1, 2, 3, 4",
      },
      {
        text: "While loop is used to execute a block of code repeatedly until a condition is met.",
        highlights: ["While loop", "execute", "block of code"],
        code: "while count < 5:\n    print(count)\n    count += 1",
      },
      {
        text: "break statement exits the loop prematurely.",
        highlights: ["break"],
        code: "for i in range(10):\n    if i == 5:\n        break\n    print(i)  # Prints 0, 1, 2, 3, 4",
      },
      {
        text: "Continue statement skips the current iteration and continues with the next.",
        highlights: ["continues"],
        code: "for i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i)  # Prints odd numbers: 1, 3, 5, 7, 9",
      },
      {
        text: "Pass is a dummy statement that does nothing. It is used to make the code syntactically correct.",
        highlights: ["Pass", "dummy"],
        code: "for i in range(10):\n    pass  # This will do nothing",
      },
      {
        text: "Nested Loop and conditions is possible in python.",
        highlights: ["Nested Loop", "conditions"],
      },
    ],
  },
  {
    id: "lists-tuples-dict",
    title: "Lists, Tuples, and Dictionaries",
    description: "Lists, Tuples, and Dictionaries in Python",
    points: [
      {
        text: "List is a collection of items that are ordered and mutable. And it is represented as [].",
        highlights: ["List", "collection", "[]"],
      },
      {
        text: "Tuple is a collection of items that are ordered and immutable. And it is represented as ()",
        highlights: ["Tuple", "collection", "()"],
      },

      {
        text: "Dictionary is a collection of key-value pairs. And it is represented as {}.",
        highlights: ["Dictionary", "collection", "{}"],
      },
      {
        text: "In list we can take the elements by using positive and negative index number.",
        highlights: ["positive", "negative", "index number"],
        code: "list = [1, 2, 3, 4, 5]\nprint(list[0]) \t\t#output: 1\nprint(list[-1]) \t\t#output: 5",
      },
      {
        text: "append() method is used to add an element to the end of the list.",
        highlights: ["append()"],
        code: "list = [1, 2, 3, 4, 5]\nlist.append(6)\nprint(list) \t\t#output: [1, 2, 3, 4, 5, 6]",
      },
      {
        text: "pop() method is used to remove an element from the list at a specific index.",
        highlights: ["pop()"],
        code: "list = [1, 2, 3, 4, 5]\nlist.pop(0)\nprint(list) \t\t#output: [2, 3, 4, 5]",
      },
      {
        text: "remove() method is used to remove an element from the list.",
        highlights: ["remove()"],
        code: "list = [1, 2, 3, 4, 5]\nlist.remove(3)\nprint(list) \t\t#output: [1, 2, 4, 5]",
      },
      {
        text: "insert() method is used to add an element to the list at a specific index.",
        highlights: ["insert()"],
        code: "list = [1, 2, 3, 4, 5]\nlist.insert(0, 0)\nprint(list) \t\t#output: [0, 1, 2, 3, 4, 5]",
      },
      {
        text: "extend() method is used to add multiple elements to the end of the list.",
        highlights: ["extend()"],
        code: "list = [1, 2, 3, 4, 5]\nlist.extend([6, 7, 8])\nprint(list) \t\t#output: [1, 2, 3, 4, 5, 6, 7, 8]",
      },
      {
        text: "Tuple is a collection of items that are ordered and immutable. And it is represented as ()",
        highlights: ["Tuple", "collection", "()"],
      },
      {
        text: "In Dictionary we use key and value to store the data.",
        highlights: ["key", "value"],
        code: "dict = {'name': 'Ali', 'age': 20, 'city': 'Tehran'}\nprint(dict['name']) \t\t#output: Ali",
      },
      {
        text: "In Dictionary every key is unique and immutable.",
        highlights: ["key", "unique", "immutable"],
      },
      {
        text: "IN operators check if a key is present in the dictionary.",
        highlights: ["IN operators"],
        code: "dict = {'name': 'Ali', 'age': 20, 'city': 'Tehran'}\nprint('name' in dict) \t\t#output: True",
      },
      {
        text: "Len() function is used to get the length of the dictionary.",
        highlights: ["Len()"],
        code: "dict = {'name': 'Ali', 'age': 20, 'city': 'Tehran'}\nprint(len(dict)) \t\t#output: 3",
      },
    ],
  },
  {
    id: "sets",
    title: "Sets",
    description:
      "Sets in Python are unordered collections of unique, immutable elements. They are defined using curly braces {} or the set() constructor. Sets are mutable, allowing addition and removal of elements, but the elements themselves must be immutable (e.g., numbers, strings, tuples). Sets are commonly used for membership testing, removing duplicates, and performing mathematical set operations like union, intersection, and difference.",
    points: [
      {
        text: "Set is a collection of items that are unordered and mutable.",
        highlights: ["Set", "unordered", "mutable"],
      },
      {
        text: "Set remove the duplicate elements from the list.",
        highlights: ["remove", "duplicate"],
        code: "list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]\nset = set(list)\nprint(set) \t\t#output: {1, 2, 3, 4, 5}",
      },
      {
        text: "In set we can use add() method to add an element to the set.",
        highlights: ["add()"],
        code: "set = {1, 2, 3, 4, 5}\nset.add(6)\nprint(set) \t\t#output: {1, 2, 3, 4, 5, 6}",
      },
      {
        text: "In set we can use remove() method to remove an element from the set.",
        highlights: ["remove()"],
      },
      {
        text: "In set we can use clear() method to remove all elements from the set.",
        highlights: ["clear()"],
        code: "set = {1, 2, 3, 4, 5}\nset.clear()\nprint(set) \t\t#output: set()",
      },
      {
        text: "In set we can use union() method to join two sets.",
        highlights: ["union()"],
        code: "set1 = {1, 2, 3, 4, 5}\nset2 = {6, 7, 8, 9, 10}\nprint(set1.union(set2)) \t\t#output: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
      },
      {
        text: "In set we can use intersection() method to find the common elements in two sets.",
        highlights: ["intersection()"],
        code: "set1 = {1, 2, 3, 4, 5}\nset2 = {6, 7, 8, 9, 10}\nprint(set1.intersection(set2)) \t\t#output: set()",
      },
      {
        text: "In set we can use difference() method to find the difference between two sets.",
        highlights: ["difference()"],
        code: "set1 = {1, 2, 3, 4, 5}\nset2 = {6, 7, 8, 9, 10}\nprint(set1.difference(set2)) \t\t#output: {1, 2, 3, 4, 5}",
      },
      {
        text: "Sets are mutable but the list of elements in the set must be immutable.",
        highlights: ["mutable", "immutable"],
        code: "set = {1, 2, 3, 4, 5}\nset.add(6) \t\t#output: {1, 2, 3, 4, 5, 6}",
      },
      {
        text: "In set IN Operators check if an element is present in the set.",
        highlights: ["IN Operators"],
        code: "set = {1, 2, 3, 4, 5}\nprint(1 in set) \t\t#output: True",
      },
      {
        text: "In set the order of the elements is not fixed.",
        highlights: ["order", "fixed"],
        code: "set = {1, 2, 3, 4, 5}\nprint(set) \t\t#output: {1, 2, 3, 4, 5}",
      },
      {
        text: "In set we can use len() function to get the length of the set.",
        highlights: ["len()"],
        code: "set = {1, 2, 3, 4, 5}\nprint(len(set)) \t\t#output: 5",
      },
      {
        text: "In set set() can convert the iterable to set.",
        highlights: ["set()"],
        code: "set = set([1, 2, 3, 4, 5])\nprint(set) \t\t#output: {1, 2, 3, 4, 5}",
      },
      {
        text: "In set we can use frozenset() to create an immutable set.",
        highlights: ["frozenset()"],
        code: "set = frozenset([1, 2, 3, 4, 5])\nprint(set) \t\t#output: frozenset({1, 2, 3, 4, 5})",
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    description:
      "Functions in Python are defined using the def keyword. They can take parameters and return values. Functions are used to organize code and make it reusable.",
    points: [
      {
        text: "Functions are declared using the def keyword.",
        highlights: ["def"],
        code: "def greet(name):\n    return f'Hello, {name}'",
      },
      {
        text: "Functions can take parameters(input) and return values(output).",
        highlights: ["parameters(input)", "return values(output)"],
        code: "def greet(name):\n    return f'Hello, {name}'",
      },
      {
        text: "Default parameters are the parameters that are assigned a default value.",
        highlights: ["default parameters"],
        code: "def greet(name='World'):\n    return f'Hello, {name}'",
      },
      {
        text: "We can return multiple values from a function.",
        highlights: ["multiple values"],
        code: "def add_sub(a, b):\n    return a+b, a-b",
      },
      {
        text: "keyword arguments improve the readability of the code.",
        highlights: ["keyword arguments"],
        code: "def greet(name='World', age=20):\n    return f'Hello, {name} and you are {age} years old'",
      },
      {
        text: "Function can be nested in another function.",
        highlights: ["nested", "function"],
        code: "def outer_function(): \n\tprint('This is the outer function.') \n\n\tdef inner_function(): \n\t\tprint('This is the inner function.') \n\n\t# Call the inner function \n\tinner_function() \n\n# Call the outer function \nouter_function() \n\n#output: \nThis is the outer function. \nThis is the inner(nested) function.",
      },
      {
        text: "Docstrings are used to describe the function.",
        highlights: ["Docstrings"],
        code: "def greet(name):\n    '''This function greets the user with a message.''' \n    return f'Hello, {name}'",
      },
      {
        text: "Lambda functions are small, anonymous functions that can have any number of arguments, but can only have one expression.",
        highlights: ["Lambda", "anonymous", "function"],
        code: "def square(x):\n    return x*x",
      },
      {
        text: "We can use the *args and **kwargs to pass a variable number of arguments to a function.",
        highlights: ["*args", "**kwargs"],
        code: "def add(*args):\n    return sum(args)\ndef add_sub(a, b):\n    return a+b, a-b",
      },
    ],
  },
  {
    id: "enums",
    title: "Enums",
    description: "Enums in Python are a way to define a set of named values that are immutable and can be used to represent a finite set of options.",
    points: [
      {
        text: "Enums are used to define a set of named values that are immutable and can be used to represent a finite set of options.",
        highlights: ["Enums"],
        code: "from enum import Enum\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3",
      },
      {
        text: "Enum are created by importing Enum class from enum module.", 
        highlights: ["import", "Enum"],
        code: "from enum import Enum",
      },
      {
        text: "Define enums by using Enum class.",
        highlights: ["Enum"],
        code: "from enum import Enum\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3",
      },
      {
        text: "Enum members have name and value.",
        highlights: ["name", "value"],  
        code: "from enum import Enum\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3",
      },
      {
        text: "Enum members can be accessed by their name.",
        highlights: ["name"],
        code: "from enum import Enum\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3",
      },
      {
        text: "Enum members can be accessed by their value.",
        highlights: ["value"],
      },
      {
        text: ""
      }
    ],
  },
  {
    id: "object-oriented",
    title: "Object-Oriented Programming",
    description: "Class-based object-oriented programming in Python",
    points: [
      {
        text: "Classes are created using the class keyword and can contain attributes and methods.",
        highlights: ["class", "attributes", "methods"],
        code: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, my name is {self.name}'",
      },
      {
        text: "The __init__ method initializes the object's attributes when the object is created.",
        highlights: ["__init__", "initializes"],
        code: "class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed",
      },
      {
        text: "Inheritance allows a class to inherit attributes and methods from another class.",
        highlights: ["Inheritance", "inherit"],
        code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def bark(self):\n        return 'Woof!'",
      },
      {
        text: "Encapsulation is the bundling of data and methods that operate on that data within a single unit (class).",
        highlights: ["Encapsulation", "bundling", "data and methods"],
      },
      {
        text: "Polymorphism allows methods to do different things based on the object they are acting upon.",
        highlights: ["Polymorphism"],
      },
    ],
  },
  {
    id: "modules",
    title: "Modules and Packages",
    description: "Organizing code into modules and packages",
    points: [
      {
        text: "A module is a file containing Python definitions and statements that can be imported and used in other Python programs.",
        highlights: ["module", "imported"],
      },
      {
        text: "Modules are imported using the import statement.",
        highlights: ["import"],
        code: "import math\nprint(math.sqrt(16))  # Output: 4.0",
      },
      {
        text: "Specific functions or objects can be imported from a module.",
        highlights: ["from", "import"],
        code: "from math import sqrt\nprint(sqrt(16))  # Output: 4.0",
      },
      {
        text: "Packages are collections of modules in directories that give a package hierarchy.",
        highlights: ["Packages", "collections of modules"],
      },
      {
        text: "The __init__.py file makes a directory a Python package.",
        highlights: ["__init__.py"],
      },
    ],
  },
  {
    id: "exception-handling",
    title: "Exception Handling",
    description: "Handling errors and exceptions in Python",
    points: [
      {
        text: "Exceptions are runtime errors that can be caught and handled in your code.",
        highlights: ["Exceptions", "runtime errors", "caught", "handled"],
      },
      {
        text: "The try block contains code that might raise an exception.",
        highlights: ["try"],
        code: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')",
      },
      {
        text: "The except block contains code that is executed if an exception occurs in the try block.",
        highlights: ["except"],
        code: "try:\n    num = int('abc')\nexcept ValueError:\n    print('Invalid conversion')",
      },
      {
        text: "The else block contains code that is executed if no exceptions occur in the try block.",
        highlights: ["else"],
        code: "try:\n    num = int('123')\nexcept ValueError:\n    print('Invalid conversion')\nelse:\n    print('Conversion successful')",
      },
      {
        text: "The finally block contains code that is always executed, regardless of whether an exception occurred.",
        highlights: ["finally"],
        code: "try:\n    file = open('file.txt', 'r')\nexcept FileNotFoundError:\n    print('File not found')\nfinally:\n    file.close()  # This will always be executed",
      },
    ],
  },
  {
    id: "file-handling",
    title: "File Handling",
    description: "Reading from and writing to files in Python",
    points: [
      {
        text: "The open() function is used to open a file, with modes like 'r' (read), 'w' (write), 'a' (append), etc.",
        highlights: ["open()", "'r'", "'w'", "'a'"],
        code: "file = open('file.txt', 'r')",
      },
      {
        text: "It's best to use the with statement when working with files as it automatically closes the file after use.",
        highlights: ["with statement", "automatically closes"],
        code: "with open('file.txt', 'r') as file:\n    content = file.read()",
      },
      {
        text: "read() method reads the entire file, readlines() reads all lines into a list, and readline() reads one line at a time.",
        highlights: ["read()", "readlines()", "readline()"],
      },
      {
        text: "write() method writes a string to the file, and writelines() writes a list of strings.",
        highlights: ["write()", "writelines()"],
        code: "with open('file.txt', 'w') as file:\n    file.write('Hello, World!')",
      },
      {
        text: "The 'a' mode appends to the file instead of overwriting it.",
        highlights: ["'a' mode", "appends"],
        code: "with open('file.txt', 'a') as file:\n    file.write('\\nNew line appended')",
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Python Concepts",
    description: "More complex Python features and techniques",
    points: [
      {
        text: "List comprehensions provide a concise way to create lists based on existing lists.",
        highlights: ["List comprehensions", "concise"],
        code: "squares = [x*x for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
      },
      {
        text: "Generators are iterators that generate values on-the-fly, saving memory.",
        highlights: ["Generators", "iterators", "on-the-fly", "saving memory"],
        code: "def count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1",
      },
      {
        text: "Decorators add functionality to an existing function without modifying it.",
        highlights: ["Decorators", "add functionality"],
        code: "@timer\ndef slow_function():\n    time.sleep(2)",
      },
      {
        text: "Context managers (using the with statement) simplify resource management.",
        highlights: [
          "Context managers",
          "with statement",
          "resource management",
        ],
      },
      {
        text: "Async programming with async/await allows efficient handling of I/O-bound operations.",
        highlights: ["Async", "async/await", "I/O-bound"],
        code: "async def fetch_data():\n    async with aiohttp.ClientSession() as session:\n        async with session.get('https://api.example.com/data') as response:\n            return await response.json()",
      },
    ],
  },
];
