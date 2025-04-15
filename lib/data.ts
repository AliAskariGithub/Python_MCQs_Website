import { MCQData } from "@/types";

export const mcqs: MCQData = {
  google_colab: {
    beginner: [
      {
        question: "Which of the following is NOT a basic data type in Python?",
        options: ["int", "str", "array", "bool"],
        answer: "array",
      },
      {
        question: "What is the data type of the value returned by type(3)?",
        options: ["int", "str", "type", "None"],
        answer: "type",
      },
      {
        question: "What is the data type of 3.14?",
        options: ["int", "float", "double", "decimal"],
        answer: "float",
      },
      {
        question: "What is the data type of True?",
        options: ["bool", "Boolean", "bit", "logical"],
        answer: "bool",
      },
      {
        question: "Which of the following is an immutable data type?",
        options: ["list", "dict", "set", "tuple"],
        answer: "tuple",
      },
      {
        question: "What is Google Colab?",
        options: [
          "A Python library",
          "A cloud-based Jupyter notebook environment",
          "A Python framework",
          "A programming language",
        ],
        answer: "A cloud-based Jupyter notebook environment",
      },
      {
        question: "Which company developed Google Colab?",
        options: ["Microsoft", "Amazon", "Google", "Facebook"],
        answer: "Google",
      },
      {
        question: "How do you install a package in Google Colab?",
        options: [
          "Using pip install",
          "Using conda install",
          "Using apt-get",
          "Packages cannot be installed in Colab",
        ],
        answer: "Using pip install",
      },
      {
        question: "How do you run a cell in Google Colab?",
        options: ["Ctrl+Enter", "Alt+Enter", "Shift+Enter", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "What shortcut creates a new code cell in Google Colab?",
        options: ["Ctrl+M A", "Ctrl+M B", "Ctrl+M I", "Ctrl+M J"],
        answer: "Ctrl+M B",
      },
      {
        question: "What file format does Google Colab use?",
        options: [".py", ".ipynb", ".colab", ".notebook"],
        answer: ".ipynb",
      },
      {
        question: "Where are Google Colab notebooks stored by default?",
        options: ["Local disk", "Google Drive", "GitHub", "Cloud Storage"],
        answer: "Google Drive",
      },
      {
        question: "What command displays an image in Google Colab?",
        options: ["display()", "show()", "image.show()", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which of the following is NOT a cell type in Google Colab?",
        options: ["Code", "Text", "Markdown", "HTML"],
        answer: "HTML",
      },
      {
        question: "How do you comment a line in Python?",
        options: ["// Comment", "/* Comment */", "# Comment", "-- Comment"],
        answer: "# Comment",
      },
      {
        question:
          "What does the following code do in Google Colab? %matplotlib inline",
        options: [
          "Imports matplotlib",
          "Displays plots in the notebook",
          "Creates a new matplotlib figure",
          "Sets the backend to inline",
        ],
        answer: "Displays plots in the notebook",
      },
      {
        question: "What is a magic command in Google Colab?",
        options: [
          "A special command starting with %",
          "A Python function",
          "A shell command",
          "A JavaScript function",
        ],
        answer: "A special command starting with %",
      },
      {
        question:
          "How do you access files from your local computer in Google Colab?",
        options: [
          "Using the files.upload() function",
          "Using the upload button",
          "Mount Google Drive and upload files there",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the default runtime type in Google Colab?",
        options: ["CPU", "GPU", "TPU", "None"],
        answer: "CPU",
      },
      {
        question:
          "How long can a Google Colab session stay idle before disconnecting?",
        options: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
        answer: "90 minutes",
      },
    ],
    intermediate: [
      {
        question:
          "What is the difference between a list and a tuple in Python?",
        options: [
          "Lists are mutable, tuples are immutable",
          "Lists can contain any data type, tuples cannot",
          "Tuples are faster than lists",
          "Lists have more built-in methods",
        ],
        answer: "Lists are mutable, tuples are immutable",
      },
      {
        question: "What does isinstance(value, type) do?",
        options: [
          "Converts value to type",
          "Checks if value is an instance of type",
          "Creates a new instance of value",
          "Returns the type of value",
        ],
        answer: "Checks if value is an instance of type",
      },
      {
        question: "What is the data type of None in Python?",
        options: ["NoneType", "null", "void", "empty"],
        answer: "NoneType",
      },
      {
        question: "How do you switch to a GPU runtime in Google Colab?",
        options: [
          "Runtime > Change runtime type > Hardware accelerator > GPU",
          "Edit > Notebook settings > Hardware accelerator > GPU",
          "Tools > Settings > GPU",
          "File > Preferences > Use GPU",
        ],
        answer: "Runtime > Change runtime type > Hardware accelerator > GPU",
      },
      {
        question:
          "What is the command to check if GPU is available in Google Colab?",
        options: ["!nvidia-smi", "!gpu-info", "!check-gpu", "!system-info"],
        answer: "!nvidia-smi",
      },
      {
        question:
          "What does the following command do in Google Colab? !pip install -q tensorflow",
        options: [
          "Installs tensorflow quietly",
          "Queries tensorflow version",
          "Installs tensorflow with dependencies",
          "Uninstalls tensorflow",
        ],
        answer: "Installs tensorflow quietly",
      },
      {
        question: "How do you mount Google Drive in Colab?",
        options: [
          "from google.colab import drive; drive.mount('/content/drive')",
          "import gdrive; gdrive.mount()",
          "from google import drive; drive.connect()",
          "!mount gdrive",
        ],
        answer: "from google.colab import drive; drive.mount('/content/drive')",
      },
      {
        question: "What is the purpose of the %%capture magic command?",
        options: [
          "To capture output from a cell",
          "To screen capture the notebook",
          "To record video",
          "To save the notebook",
        ],
        answer: "To capture output from a cell",
      },
      {
        question: "What does the %%time magic command do?",
        options: [
          "Shows execution time of the cell",
          "Sets a time limit for execution",
          "Schedules cell execution",
          "Shows current time",
        ],
        answer: "Shows execution time of the cell",
      },
      {
        question: "What is the purpose of !wget command in Google Colab?",
        options: [
          "To download files from the internet",
          "To search on the web",
          "To upload files",
          "To check internet connection",
        ],
        answer: "To download files from the internet",
      },
      {
        question: "What does the %%writefile magic command do?",
        options: [
          "Writes cell content to a file",
          "Creates a new notebook",
          "Exports the notebook as HTML",
          "Prints cell content",
        ],
        answer: "Writes cell content to a file",
      },
      {
        question: "How do you display an interactive widget in Google Colab?",
        options: [
          "Using the ipywidgets package",
          "Using HTML/JavaScript",
          "Using the widgets toolbar",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of %load magic command?",
        options: [
          "Loads a Python script into a cell",
          "Loads a module",
          "Loads data from a file",
          "Loads a saved model",
        ],
        answer: "Loads a Python script into a cell",
      },
      {
        question: "How can you display a progress bar in Google Colab?",
        options: [
          "Using tqdm library",
          "Using the progress widget",
          "Using sys.stdout.write()",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          'What does the following code do? %%javascript\\nalert("Hello")',
        options: [
          "Displays an alert dialog",
          "Runs JavaScript code",
          "Adds JavaScript to the notebook",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you share a Google Colab notebook?",
        options: [
          "File > Share",
          "Share button in the top-right corner",
          "Copy the URL",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          "What is the correct way to display multiple images in a grid in Google Colab?",
        options: [
          "Using matplotlib subplots",
          "Using display() multiple times",
          "Using HTML tables",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How do you clear the output of all cells in Google Colab?",
        options: [
          "Edit > Clear all outputs",
          "Runtime > Restart and clear all outputs",
          "Ctrl+M L",
          "Both A and B",
        ],
        answer: "Both A and B",
      },
      {
        question:
          "What is the maximum RAM available in a standard Google Colab instance?",
        options: ["8GB", "12GB", "16GB", "32GB"],
        answer: "12GB",
      },
      {
        question: "What is the purpose of %cd magic command?",
        options: [
          "Changes the current directory",
          "Creates a new directory",
          "Checks directory contents",
          "Compares directories",
        ],
        answer: "Changes the current directory",
      },
    ],
    advanced: [
      {
        question:
          "Which of the following is true about Python's complex numbers?",
        options: [
          "They are written as a+bj",
          "They cannot be used in mathematical operations",
          "They don't have built-in methods",
          "Python doesn't support complex numbers",
        ],
        answer: "They are written as a+bj",
      },
      {
        question: "What happens when you compare two dictionaries in Python?",
        options: [
          "It raises a TypeError",
          "It compares their memory addresses",
          "It compares their keys and values",
          "It only compares their keys",
        ],
        answer: "It compares their keys and values",
      },
      {
        question: "What is a TPU in Google Colab?",
        options: [
          "Tensor Processing Unit",
          "Total Processing Unit",
          "Turbo Processing Unit",
          "Text Processing Unit",
        ],
        answer: "Tensor Processing Unit",
      },
      {
        question: "How can you debug code effectively in Google Colab?",
        options: [
          "Using %debug magic command",
          "Using pdb module",
          "Using print statements",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you profile code performance in Google Colab?",
        options: [
          "Using %timeit magic command",
          "Using cProfile module",
          "Using the line_profiler extension",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          "What is the best way to handle large datasets in Google Colab?",
        options: [
          "Using generators",
          "Using cloud storage",
          "Using chunking techniques",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          "What is the purpose of @tf.function decorator in TensorFlow on Google Colab?",
        options: [
          "Creates a graph from the function",
          "Optimizes the function for TPU",
          "Reduces memory usage",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you implement distributed training in Google Colab?",
        options: [
          "Using TensorFlow distributed strategies",
          "Using PyTorch DistributedDataParallel",
          "Using Horovod",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          "What is the maximum time a Google Colab Pro notebook can run continuously?",
        options: ["12 hours", "24 hours", "48 hours", "72 hours"],
        answer: "24 hours",
      },
      {
        question:
          "How can you visualize neural network architecture in Google Colab?",
        options: [
          "Using TensorBoard",
          "Using matplotlib",
          "Using Keras plot_model",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of %env magic command?",
        options: [
          "Sets or queries environment variables",
          "Checks Python environment",
          "Creates a virtual environment",
          "Lists installed packages",
        ],
        answer: "Sets or queries environment variables",
      },
      {
        question: "How can you optimize TPU code in Google Colab?",
        options: [
          "Avoid dynamic shapes",
          "Use tf.function",
          "Optimize input pipeline",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of %%shell magic command?",
        options: [
          "Runs cell with shell",
          "Creates a new shell",
          "Installs shell extensions",
          "Checks shell version",
        ],
        answer: "Runs cell with shell",
      },
      {
        question: "How can you implement custom visualization in Google Colab?",
        options: [
          "Using Plotly",
          "Using Bokeh",
          "Using custom JavaScript",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of @numba.jit in Google Colab?",
        options: [
          "Just-in-time compilation for faster code",
          "JSON iteration tool",
          "JavaScript integration tool",
          "Java integration toolkit",
        ],
        answer: "Just-in-time compilation for faster code",
      },
      {
        question: "How can you access webcam in Google Colab?",
        options: [
          "Using cv2.VideoCapture()",
          "Using the google.colab.output.eval_js method",
          "Using JavaScript",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          "What is the best practice for hyperparameter tuning in Google Colab?",
        options: [
          "Using Keras Tuner",
          "Using Ray Tune",
          "Using custom grid search",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you implement A/B testing in Google Colab?",
        options: [
          "Using statsmodels",
          "Using scipy.stats",
          "Using custom implementations",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question:
          "What technique can you use to avoid losing work in Google Colab due to disconnections?",
        options: [
          "Regular saving to Google Drive",
          "Using checkpoint callbacks in models",
          "Using GitHub integration",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "How can you implement parallel processing in Google Colab?",
        options: [
          "Using concurrent.futures",
          "Using multiprocessing module",
          "Using joblib",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
    expert: [],
  },
  introduction_to_python: {
    beginner: [
      {
        question: "Which of the following is NOT a basic data type in Python?",
        options: ["int", "str", "array", "bool"],
        answer: "array",
      },
      {
        question: "What is the data type of the value returned by type(3)?",
        options: ["int", "str", "type", "None"],
        answer: "type",
      },
      {
        question: "What is the data type of 3.14?",
        options: ["int", "float", "double", "decimal"],
        answer: "float",
      },
      {
        question: "What is the data type of True?",
        options: ["bool", "Boolean", "bit", "logical"],
        answer: "bool",
      },
      {
        question: "Which of the following is an immutable data type?",
        options: ["list", "dict", "set", "tuple"],
        answer: "tuple",
      },
      {
        question: "What is the correct way to create a comment in Python?",
        options: ["/* comment */", "// comment", "# comment", "-- comment"],
        answer: "# comment",
      },
      {
        question: "How do you create a variable named x with the value of 10?",
        options: ["x := 10", "var x = 10", "x = 10", "int x = 10"],
        answer: "x = 10",
      },
      {
        question: "What is the result of 7 // 2 in Python?",
        options: ["3.5", "3", "4", "2"],
        answer: "3",
      },
      {
        question:
          "Which function is used to get the length of a string or list?",
        options: ["size()", "count()", "length()", "len()"],
        answer: "len()",
      },
      {
        question: 'What is the output of print("Hello" + " World")?',
        options: ["Hello World", "HelloWorld", "Hello + World", "Error"],
        answer: "Hello World",
      },
      {
        question: "What is the correct extension for Python files?",
        options: [".py", ".python", ".pt", ".pyt"],
        answer: ".py",
      },
      {
        question: "How do you create a list in Python?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
        answer: "[1, 2, 3]",
      },
      {
        question: 'What does the following code print? print(3 * "abc")',
        options: ["3abc", "abcabcabc", "abc3", "Error"],
        answer: "abcabcabc",
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "func", "def"],
        answer: "def",
      },
      {
        question: "What is the correct way to check if a variable x equals 5?",
        options: ["if x = 5:", "if x == 5:", "if x === 5:", "if x equals 5:"],
        answer: "if x == 5:",
      },
      {
        question: "Which symbol is used for indentation in Python?",
        options: [
          "Curly braces {}",
          "Semicolons ;",
          "Parentheses ()",
          "Spaces or tabs",
        ],
        answer: "Spaces or tabs",
      },
      {
        question: "What does the input() function do?",
        options: [
          "Prints text to the console",
          "Gets user input as a string",
          "Takes input from a file",
          "Inputs data into a database",
        ],
        answer: "Gets user input as a string",
      },
      {
        question: "What is the output of print(type([]))?",
        options: [
          "<class 'list'>",
          "<class 'array'>",
          "<class 'tuple'>",
          "<class 'set'>",
        ],
        answer: "<class 'list'>",
      },
      {
        question: "How do you create an empty dictionary in Python?",
        options: ["[]", "{}", "()", "dict()"],
        answer: "{}",
      },
      {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "*^", "pow()"],
        answer: "**",
      },
    ],
    intermediate: [
      {
        question:
          "What is the difference between a list and a tuple in Python?",
        options: [
          "Lists are mutable, tuples are immutable",
          "Lists can contain any data type, tuples cannot",
          "Tuples are faster than lists",
          "Lists have more built-in methods",
        ],
        answer: "Lists are mutable, tuples are immutable",
      },
      {
        question: "What does isinstance(value, type) do?",
        options: [
          "Converts value to type",
          "Checks if value is an instance of type",
          "Creates a new instance of value",
          "Returns the type of value",
        ],
        answer: "Checks if value is an instance of type",
      },
      {
        question: "What is the data type of None in Python?",
        options: ["NoneType", "null", "void", "empty"],
        answer: "NoneType",
      },
      {
        question:
          "What will be the value of x after executing the code: x = [1, 2, 3]; y = x; y.append(4)?",
        options: [
          "[1, 2, 3]",
          "[1, 2, 3, 4]",
          "[1, 2, 3]; [1, 2, 3, 4]",
          "Error",
        ],
        answer: "[1, 2, 3, 4]",
      },
      {
        question: "What is a list comprehension in Python?",
        options: [
          "A way to understand lists",
          "A condensed way to create lists",
          "A method to concatenate lists",
          "A built-in function",
        ],
        answer: "A condensed way to create lists",
      },
      {
        question: "What is the output of the code: print(list(range(5)))?",
        options: [
          "[0, 1, 2, 3, 4, 5]",
          "[1, 2, 3, 4, 5]",
          "[0, 1, 2, 3, 4]",
          "[5]",
        ],
        answer: "[0, 1, 2, 3, 4]",
      },
      {
        question:
          'How do you access the value of a dictionary with key "name" and provide a default value "Unknown" if the key doesn\'t exist?',
        options: [
          'dict["name" or "Unknown"]',
          'dict["name", "Unknown"]',
          'dict.get("name", "Unknown")',
          'dict.getOrDefault("name", "Unknown")',
        ],
        answer: 'dict.get("name", "Unknown")',
      },
      {
        question: "What does the `pass` statement do in Python?",
        options: [
          "It passes a value to the next function",
          "It skips the current iteration in a loop",
          "It acts as a placeholder (does nothing)",
          "It validates password input",
        ],
        answer: "It acts as a placeholder (does nothing)",
      },
      {
        question:
          "What will the following code print? x = 10; x += 5; print(x)",
        options: ["10", "15", "5", "Error"],
        answer: "15",
      },
      {
        question:
          "What is the purpose of the \"if __name__ == '__main__'\" statement?",
        options: [
          "To check if the name variable is equal to main",
          "To create a main function",
          "To determine if the script is being run directly or imported",
          "To set the program's entry point",
        ],
        answer: "To determine if the script is being run directly or imported",
      },
      {
        question: "What is a lambda function in Python?",
        options: [
          "A function defined using decorators",
          "A named function with multiple parameters",
          "An anonymous, inline function",
          "A recursive function",
        ],
        answer: "An anonymous, inline function",
      },
      {
        question: "What does the `continue` statement do in a loop?",
        options: [
          "Exits the loop completely",
          "Skips the current iteration and moves to the next",
          "Continues running the current iteration",
          "Pauses the loop execution",
        ],
        answer: "Skips the current iteration and moves to the next",
      },
      {
        question:
          "How do you remove duplicates from a list while preserving order?",
        options: [
          "Use the unique() function",
          "Convert to a set and back to a list",
          "Use list(dict.fromkeys(my_list))",
          "Use the distinct() method",
        ],
        answer: "Use list(dict.fromkeys(my_list))",
      },
      {
        question: "What does string slicing notation [start:end:step] do?",
        options: [
          "Extracts characters from start to end with the given step",
          "Splits the string into multiple parts",
          "Searches for a substring",
          "Replaces characters in a range",
        ],
        answer: "Extracts characters from start to end with the given step",
      },
      {
        question: "What is the purpose of the `with` statement in Python?",
        options: [
          "To create a code block with special context",
          "To restrict variable scope",
          "To implement conditional logic",
          "To improve performance",
        ],
        answer: "To create a code block with special context",
      },
      {
        question: "What does the `dir()` function do?",
        options: [
          "Changes the current directory",
          "Lists the attributes of an object",
          "Creates a new directory",
          "Provides documentation for a module",
        ],
        answer: "Lists the attributes of an object",
      },
      {
        question: "How are keyword arguments passed to a function?",
        options: [
          "Using positional ordering",
          "Using name=value syntax",
          "Using a list of values",
          "Using a tuple of values",
        ],
        answer: "Using name=value syntax",
      },
      {
        question: "What is the purpose of the `zip()` function?",
        options: [
          "To compress files",
          "To combine multiple iterables into a single iterable of tuples",
          "To encrypt data",
          "To speed up code execution",
        ],
        answer:
          "To combine multiple iterables into a single iterable of tuples",
      },
      {
        question: "What is a generator function in Python?",
        options: [
          "A function that generates random numbers",
          "A function that returns an iterator using yield",
          "A function that creates new objects",
          "A function with automatic memory management",
        ],
        answer: "A function that returns an iterator using yield",
      },
      {
        question: "What does the `any()` function do with an iterable?",
        options: [
          "Returns True if any element is truthy",
          "Returns the first truthy element",
          "Checks if any elements exist",
          "Returns the count of truthy elements",
        ],
        answer: "Returns True if any element is truthy",
      },
    ],
    advanced: [
      {
        question:
          "Which of the following is true about Python's complex numbers?",
        options: [
          "They are written as a+bj",
          "They cannot be used in mathematical operations",
          "They don't have built-in methods",
          "Python doesn't support complex numbers",
        ],
        answer: "They are written as a+bj",
      },
      {
        question: "What happens when you compare two dictionaries in Python?",
        options: [
          "It raises a TypeError",
          "It compares their memory addresses",
          "It compares their keys and values",
          "It only compares their keys",
        ],
        answer: "It compares their keys and values",
      },
      {
        question: "What is a decorator in Python?",
        options: [
          "A design pattern for GUI elements",
          "A function that takes another function and extends its behavior",
          "A class used for inheritance",
          "A tool for adding comments to functions",
        ],
        answer:
          "A function that takes another function and extends its behavior",
      },
      {
        question:
          "How does the Global Interpreter Lock (GIL) affect Python multithreading?",
        options: [
          "It allows multiple threads to execute Python bytecode simultaneously",
          "It limits only one thread to execute Python bytecode at a time",
          "It prevents memory leaks in threaded applications",
          "It has no effect on Python threads",
        ],
        answer:
          "It limits only one thread to execute Python bytecode at a time",
      },
      {
        question: "What is a metaclass in Python?",
        options: [
          "A class that inherits from multiple parent classes",
          "A class that creates classes",
          "A class with static methods only",
          "A class that cannot be instantiated",
        ],
        answer: "A class that creates classes",
      },
      {
        question: "What happens during Python's garbage collection?",
        options: [
          "Memory is manually freed by the programmer",
          "Objects with zero references are removed from memory",
          "All variables are reset to None",
          "Temporary files are deleted",
        ],
        answer: "Objects with zero references are removed from memory",
      },
      {
        question:
          "What is the difference between __str__ and __repr__ methods?",
        options: [
          "__str__ is for developers, __repr__ is for users",
          "__str__ is for printing, __repr__ is for debugging",
          "__str__ is faster, __repr__ is more detailed",
          "They are identical in functionality",
        ],
        answer: "__str__ is for printing, __repr__ is for debugging",
      },
      {
        question: "What does the @classmethod decorator do?",
        options: [
          "Makes a method accessible without creating an instance",
          "Makes a method that takes the class as its first parameter instead of self",
          "Restricts a method to be called only by the class",
          "Creates a static method",
        ],
        answer:
          "Makes a method that takes the class as its first parameter instead of self",
      },
      {
        question: "How does Python's memory management work?",
        options: [
          "It uses manual memory allocation and deallocation",
          "It uses reference counting and garbage collection",
          "It relies on the operating system for all memory management",
          "It uses a mark-and-sweep algorithm exclusively",
        ],
        answer: "It uses reference counting and garbage collection",
      },
      {
        question: "What is duck typing in Python?",
        options: [
          "A technique where animal classes inherit from a Duck class",
          "A typing system where variable types are explicitly declared",
          "A concept where the type or class of an object is less important than its methods",
          "A debugging technique",
        ],
        answer:
          "A concept where the type or class of an object is less important than its methods",
      },
      {
        question: "What is a context manager in Python?",
        options: [
          "A class that manages global context variables",
          "An object designed to be used with the with statement",
          "A tool for managing configuration contexts",
          "A decorator that provides context to functions",
        ],
        answer: "An object designed to be used with the with statement",
      },
      {
        question: "What is the purpose of `__slots__` in a Python class?",
        options: [
          "To define fixed attribute names and reduce memory usage",
          "To specify the order of attributes",
          "To mark private attributes",
          "To reserve method names",
        ],
        answer: "To define fixed attribute names and reduce memory usage",
      },
      {
        question: "What is a generator expression in Python?",
        options: [
          "A function that generates expressions",
          "A concise way to create generators, similar to list comprehensions",
          "A mathematical expression generator",
          "A way to dynamically generate code",
        ],
        answer:
          "A concise way to create generators, similar to list comprehensions",
      },
      {
        question:
          "What is the difference between deepcopy and copy in the copy module?",
        options: [
          "deepcopy creates a new reference, copy creates a new object",
          "copy creates a shallow copy, deepcopy creates a deep copy",
          "They are identical in functionality",
          "deepcopy is faster than copy",
        ],
        answer: "copy creates a shallow copy, deepcopy creates a deep copy",
      },
      {
        question: "What is the purpose of the `nonlocal` keyword?",
        options: [
          "To access global variables",
          "To declare a variable that isn't local or global",
          "To prevent a variable from being modified",
          "To create a variable that can't be accessed outside a function",
        ],
        answer: "To declare a variable that isn't local or global",
      },
      {
        question: "What is monkey patching in Python?",
        options: [
          "Debugging technique for finding errors",
          "Modifying or extending code at runtime",
          "Writing test cases for code",
          "Optimizing code for better performance",
        ],
        answer: "Modifying or extending code at runtime",
      },
      {
        question: "What is a descriptor in Python?",
        options: [
          "A class that defines __get__, __set__, or __delete__ methods",
          "A function that describes another function",
          "A documentation string",
          "A type of annotation",
        ],
        answer: "A class that defines __get__, __set__, or __delete__ methods",
      },
      {
        question:
          "What is the difference between a function and a method in Python?",
        options: [
          "Functions are faster than methods",
          "Methods belong to classes, functions do not",
          "Functions can take more parameters than methods",
          "Methods cannot be called directly",
        ],
        answer: "Methods belong to classes, functions do not",
      },
      {
        question:
          "What happens if you use `*args` and `**kwargs` in a function definition?",
        options: [
          "The function can only be called with keyword arguments",
          "The function accepts a variable number of positional and keyword arguments",
          "The function becomes a generator",
          "args must be a list and kwargs must be a dictionary",
        ],
        answer:
          "The function accepts a variable number of positional and keyword arguments",
      },
      {
        question:
          "What is the difference between a module and a package in Python?",
        options: [
          "Modules are written in C, packages are written in Python",
          "A module is a single file, a package is a directory containing modules",
          "Modules are for code, packages are for data",
          "Modules are imported directly, packages need to be installed first",
        ],
        answer:
          "A module is a single file, a package is a directory containing modules",
      },
    ],
    expert: [],
  },
  data_types: {
    beginner: [
      {
        question: "Which of the following is NOT a basic data type in Python?",
        options: ["int", "str", "array", "bool"],
        answer: "array",
      },
      {
        question: "What is the data type of the value returned by type(3)?",
        options: ["int", "str", "type", "None"],
        answer: "type",
      },
      {
        question: "What is the data type of 3.14?",
        options: ["int", "float", "double", "decimal"],
        answer: "float",
      },
      {
        question: "What is the data type of True?",
        options: ["bool", "Boolean", "bit", "logical"],
        answer: "bool",
      },
      {
        question: "Which of the following is an immutable data type?",
        options: ["list", "dict", "set", "tuple"],
        answer: "tuple",
      },
      {
        question: 'What is the result of type("Hello World")?',
        options: ["<class 'string'>", "<class 'str'>", "string", "text"],
        answer: "<class 'str'>",
      },
      {
        question: "What is the result of 5 + 3.0?",
        options: ["8", "8.0", "5.3", "Error"],
        answer: "8.0",
      },
      {
        question: "Which of the following creates a list in Python?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
        answer: "[1, 2, 3]",
      },
      {
        question: "What is the data type of {1, 2, 3}?",
        options: ["list", "dict", "set", "tuple"],
        answer: "set",
      },
      {
        question: 'What is the data type of {"name": "John", "age": 30}?',
        options: ["list", "dict", "set", "tuple"],
        answer: "dict",
      },
      {
        question: "What does the len() function return for a string?",
        options: [
          "The number of characters",
          "The number of words",
          "The memory size",
          "The Unicode value",
        ],
        answer: "The number of characters",
      },
      {
        question: "How would you check if a variable x is an integer?",
        options: [
          "x.isint()",
          "type(x) is int",
          "isinstance(x, int)",
          "x is int",
        ],
        answer: "isinstance(x, int)",
      },
      {
        question: "What is the data type of 5/2 in Python 3?",
        options: ["int", "float", "double", "division"],
        answer: "float",
      },
      {
        question: "What is the data type of 5//2 in Python?",
        options: ["int", "float", "double", "division"],
        answer: "int",
      },
      {
        question: "What is the result of 2 ** 3?",
        options: ["6", "8", "5", "23"],
        answer: "8",
      },
      {
        question: "What is the correct way to create an empty list?",
        options: ["list()", "[]", "{}", "list.new()"],
        answer: "[]",
      },
      {
        question:
          "What is the data type of the result when you access a single character from a string?",
        options: ["char", "String", "str", "Character"],
        answer: "str",
      },
      {
        question: 'What is the result of "Hello" + "World"?',
        options: ["HelloWorld", "Hello World", "Hello + World", "Error"],
        answer: "HelloWorld",
      },
      {
        question: "What is the output of len([1, 2, [3, 4]])?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
      {
        question:
          "What is the correct way to create a tuple with a single element?",
        options: ["(1)", "(1,)", "tuple(1)", "[1]"],
        answer: "(1,)",
      },
    ],
    intermediate: [
      {
        question:
          "What is the difference between a list and a tuple in Python?",
        options: [
          "Lists are mutable, tuples are immutable",
          "Lists can contain any data type, tuples cannot",
          "Tuples are faster than lists",
          "Lists have more built-in methods",
        ],
        answer: "Lists are mutable, tuples are immutable",
      },
      {
        question: "What does isinstance(value, type) do?",
        options: [
          "Converts value to type",
          "Checks if value is an instance of type",
          "Creates a new instance of value",
          "Returns the type of value",
        ],
        answer: "Checks if value is an instance of type",
      },
      {
        question: "What is the data type of None in Python?",
        options: ["NoneType", "null", "void", "empty"],
        answer: "NoneType",
      },
      {
        question: "What is the difference between is and == in Python?",
        options: [
          "They are exactly the same",
          "is checks for identity, == checks for equality",
          "is is faster than ==",
          "is works only for numbers",
        ],
        answer: "is checks for identity, == checks for equality",
      },
      {
        question: "What happens when you add a tuple to a tuple?",
        options: [
          "TypeError",
          "A new tuple with combined elements",
          "The second tuple becomes nested inside the first",
          "The tuples remain unchanged",
        ],
        answer: "A new tuple with combined elements",
      },
      {
        question: "What is a frozenset in Python?",
        options: [
          "A set that can't be modified after creation",
          "A set stored in cold storage",
          "A set limited to 32 elements",
          "A sorted set",
        ],
        answer: "A set that can't be modified after creation",
      },
      {
        question:
          "What happens when you use a mutable data type as a dictionary key?",
        options: [
          "It works fine",
          "It raises a TypeError",
          "It converts the key to string first",
          "The key becomes immutable",
        ],
        answer: "It raises a TypeError",
      },
      {
        question: "What operation does the | operator perform on two sets?",
        options: [
          "Intersection",
          "Union",
          "Difference",
          "Symmetric difference",
        ],
        answer: "Union",
      },
      {
        question:
          "What is the difference between a shallow copy and a deep copy?",
        options: [
          "Shallow copy doesn't copy all elements",
          "Shallow copy creates references to nested objects, deep copy creates new copies",
          "Deep copy takes more memory",
          "Shallow copy is slower",
        ],
        answer:
          "Shallow copy creates references to nested objects, deep copy creates new copies",
      },
      {
        question:
          "What will happen if you try to access a key that doesn't exist in a dictionary?",
        options: [
          "It returns None",
          "It creates the key with value None",
          "It raises a KeyError",
          "It returns an empty string",
        ],
        answer: "It raises a KeyError",
      },
      {
        question:
          "What method can be used to safely get a value from a dictionary without raising an error if the key doesn't exist?",
        options: [".find()", ".lookup()", ".get()", ".fetch()"],
        answer: ".get()",
      },
      {
        question: "What does the strip() method do to a string?",
        options: [
          "Removes all whitespace",
          "Removes leading and trailing whitespace",
          "Removes duplicate characters",
          "Converts to lowercase",
        ],
        answer: "Removes leading and trailing whitespace",
      },
      {
        question: "How do you convert a string to a list of characters?",
        options: [
          "string.toList()",
          "list(string)",
          'string.split("")',
          "chars(string)",
        ],
        answer: "list(string)",
      },
      {
        question:
          "What is the difference between append() and extend() for lists?",
        options: [
          "append() adds an element, extend() adds multiple elements",
          "append() adds to the end, extend() adds to the beginning",
          "append() adds an item, extend() adds elements from an iterable",
          "They are synonyms",
        ],
        answer:
          "append() adds an item, extend() adds elements from an iterable",
      },
      {
        question: "What is the output of [1, 2, 3] * 2?",
        options: [
          "[1, 2, 3, 1, 2, 3]",
          "[2, 4, 6]",
          "[[1, 2, 3], [1, 2, 3]]",
          "Error",
        ],
        answer: "[1, 2, 3, 1, 2, 3]",
      },
      {
        question: "What does sorted() return when applied to a dictionary?",
        options: [
          "A sorted dictionary",
          "A list of sorted values",
          "A list of sorted keys",
          "A list of sorted (key, value) tuples",
        ],
        answer: "A list of sorted keys",
      },
      {
        question: "What happens when you compare two sets with ==?",
        options: [
          "It checks if they have the same elements",
          "It checks if they have the same memory address",
          "It always returns False",
          "It raises a TypeError",
        ],
        answer: "It checks if they have the same elements",
      },
      {
        question: "What is the output of {1, 2, 3}.intersection({2, 3, 4})?",
        options: ["{1, 2, 3, 4}", "{1}", "{2, 3}", "{4}"],
        answer: "{2, 3}",
      },
      {
        question: "What does the enumerate() function return?",
        options: [
          "A list of tuples with index and value",
          "A dictionary with index as key and value as value",
          "An iterator that yields tuples of index and value",
          "A count of elements",
        ],
        answer: "An iterator that yields tuples of index and value",
      },
      {
        question: "What is the result of list(zip([1, 2], [3, 4], [5, 6]))?",
        options: [
          "[(1, 3, 5), (2, 4, 6)]",
          "[(1, 2), (3, 4), (5, 6)]",
          "[[1, 3, 5], [2, 4, 6]]",
          "[1, 2, 3, 4, 5, 6]",
        ],
        answer: "[(1, 3, 5), (2, 4, 6)]",
      },
    ],
    advanced: [
      {
        question:
          "Which of the following is true about Python's complex numbers?",
        options: [
          "They are written as a+bj",
          "They cannot be used in mathematical operations",
          "They don't have built-in methods",
          "Python doesn't support complex numbers",
        ],
        answer: "They are written as a+bj",
      },
      {
        question: "What happens when you compare two dictionaries in Python?",
        options: [
          "It raises a TypeError",
          "It compares their memory addresses",
          "It compares their keys and values",
          "It only compares their keys",
        ],
        answer: "It compares their keys and values",
      },
      {
        question:
          "What is the time complexity of dictionary key lookup in Python?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: "O(1)",
      },
      {
        question: "What is the maximum integer value in Python?",
        options: [
          "2^31 - 1",
          "2^63 - 1",
          "It depends on the system memory",
          "There is no fixed limit (arbitrary precision)",
        ],
        answer: "There is no fixed limit (arbitrary precision)",
      },
      {
        question:
          "What is the difference between bytearray and bytes in Python?",
        options: [
          "bytes is immutable, bytearray is mutable",
          "bytes is faster, bytearray is slower",
          "bytes is for ASCII, bytearray is for Unicode",
          "They are identical",
        ],
        answer: "bytes is immutable, bytearray is mutable",
      },
      {
        question: "Which of the following is NOT a valid way to define a set?",
        options: ["set()", "{}", "set([1, 2, 3])", "{1, 2, 3}"],
        answer: "{}",
      },
      {
        question:
          "What is the difference between del dict[key] and dict.pop(key)?",
        options: [
          "del is faster",
          "pop() returns the value, del doesn't",
          "del is for lists, pop() is for dictionaries",
          "They are identical",
        ],
        answer: "pop() returns the value, del doesn't",
      },
      {
        question: 'What would be the output of set("hello")?',
        options: [
          '{"hello"}',
          "{'h', 'e', 'l', 'o'}",
          "{'h', 'e', 'l', 'l', 'o'}",
          "Error",
        ],
        answer: "{'h', 'e', 'l', 'o'}",
      },
      {
        question: "What is the difference between is None and == None?",
        options: [
          "They are exactly the same",
          "is None is recommended, == None can be overridden",
          "is None compares identity, == None compares value",
          "is None is faster",
        ],
        answer: "is None is recommended, == None can be overridden",
      },
      {
        question: "What is the output of int('100', 2)?",
        options: ["100", "4", "2", "Error"],
        answer: "4",
      },
      {
        question:
          "What happens when you assign multiple variables at once like a, b, c = [1, 2, 3]?",
        options: [
          "a, b, and c all get the value [1, 2, 3]",
          "a=1, b=2, c=3 by unpacking",
          "It raises a ValueError",
          "a=[1, 2, 3], b and c are undefined",
        ],
        answer: "a=1, b=2, c=3 by unpacking",
      },
      {
        question:
          "What is the purpose of the __hash__ method in custom classes?",
        options: [
          "To encrypt data",
          "To allow instances to be used as dictionary keys or in sets",
          "To compute a checksum",
          "To optimize performance",
        ],
        answer: "To allow instances to be used as dictionary keys or in sets",
      },
      {
        question: 'What is the result of hash("hello") == hash("hello")?',
        options: ["True", "False", "None", "It depends on the Python version"],
        answer: "True",
      },
      {
        question: "What is the purpose of the collections.Counter class?",
        options: [
          "To count the number of CPU cycles",
          "To count elements in an iterable",
          "To track function calls",
          "To implement a countdown timer",
        ],
        answer: "To count elements in an iterable",
      },
      {
        question: "What is a defaultdict in Python?",
        options: [
          "A dictionary with default key-value pairs",
          "A dictionary that calls a factory function to supply missing values",
          "The default dictionary implementation",
          "A dictionary with automatic garbage collection",
        ],
        answer:
          "A dictionary that calls a factory function to supply missing values",
      },
      {
        question: "What is the output of bool([]) in Python?",
        options: ["True", "False", "None", "Error"],
        answer: "False",
      },
      {
        question:
          "What is the appropriate method to remove all elements from a list?",
        options: ["delete()", "clear()", "remove_all()", "erase()"],
        answer: "clear()",
      },
      {
        question: "What is an OrderedDict in Python?",
        options: [
          "A dictionary that maintains insertion order",
          "A dictionary with sorted keys",
          "A dictionary with sorted values",
          "A dictionary that can't have duplicate values",
        ],
        answer: "A dictionary that maintains insertion order",
      },
      {
        question:
          "Which method would you use to get all key-value pairs from a dictionary as a list of tuples?",
        options: [".keys()", ".values()", ".items()", ".pairs()"],
        answer: ".items()",
      },
      {
        question:
          "What is the key difference between arrays in the array module and lists?",
        options: [
          "Arrays are faster",
          "Arrays can hold only a single data type, lists can be heterogeneous",
          "Arrays are immutable",
          "Arrays use less memory",
        ],
        answer:
          "Arrays can hold only a single data type, lists can be heterogeneous",
      },
    ],
    expert: [],
  },
  operators_keywords_variables: {
    beginner: [
      {
        question: "Which of the following is an assignment operator in Python?",
        options: ["==", "=", "===", "!="],
        answer: "=",
      },
      {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "*^", "^^"],
        answer: "**",
      },
      {
        question: "What does the % operator do in Python?",
        options: [
          "Division",
          "Modulus (remainder after division)",
          "Percentage",
          "String formatting",
        ],
        answer: "Modulus (remainder after division)",
      },
      {
        question:
          "Which of the following is NOT a valid variable name in Python?",
        options: ["my_var", "_count", "2data", "totalSum"],
        answer: "2data",
      },
      {
        question: "What is the output of 5 // 2 in Python?",
        options: ["2.5", "2", "2.0", "3"],
        answer: "2",
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "func", "def"],
        answer: "def",
      },
      {
        question:
          "Which operator is used to check if two values are equal in Python?",
        options: ["=", "==", "===", "equals"],
        answer: "==",
      },
      {
        question: "What is the result of 3 + 4 * 2?",
        options: ["14", "11", "10", "7"],
        answer: "11",
      },
      {
        question:
          "Which keyword is used to create a loop that iterates over a sequence?",
        options: ["for", "while", "loop", "repeat"],
        answer: "for",
      },
      {
        question: 'What does the "in" operator do in Python?',
        options: [
          "Assigns values",
          "Checks membership in a sequence",
          "Increments a value",
          "Creates a loop",
        ],
        answer: "Checks membership in a sequence",
      },
      {
        question: "Which statement is used to exit a loop prematurely?",
        options: ["exit", "stop", "break", "return"],
        answer: "break",
      },
      {
        question: 'What does the "not" operator do?',
        options: [
          "Multiplies by -1",
          "Inverts a boolean value",
          "Performs bitwise negation",
          "Checks for inequality",
        ],
        answer: "Inverts a boolean value",
      },
      {
        question: "Which operator is used for string concatenation?",
        options: ["+", "&", "*", "."],
        answer: "+",
      },
      {
        question: "What is the output of 7 % 3?",
        options: ["2.33", "1", "2", "4"],
        answer: "1",
      },
      {
        question:
          "Which keyword is used to define a conditional statement in Python?",
        options: ["if", "when", "condition", "where"],
        answer: "if",
      },
      {
        question: 'What does the "or" operator return?',
        options: [
          "Always True",
          "Always False",
          "The first True value or the last value",
          "The first False value",
        ],
        answer: "The first True value or the last value",
      },
      {
        question: "Which operator has higher precedence: * or +?",
        options: [
          "*",
          "+",
          "Both have the same precedence",
          "It depends on the context",
        ],
        answer: "*",
      },
      {
        question: 'What does the "pass" keyword do?',
        options: [
          "Skips the current iteration",
          "Exits the loop",
          "Acts as a placeholder (does nothing)",
          "Passes a value to a function",
        ],
        answer: "Acts as a placeholder (does nothing)",
      },
      {
        question:
          "Which of the following is a valid way to increment a variable x by 1?",
        options: ["x++", "x = x + 1", "x += +", "increment(x)"],
        answer: "x = x + 1",
      },
      {
        question: "What is the result of True and False in Python?",
        options: ["True", "False", "0", "1"],
        answer: "False",
      },
    ],
    intermediate: [
      {
        question: "What will be the value of x after this code? x = 10; x += 5",
        options: ["10", "15", "5", "Error"],
        answer: "15",
      },
      {
        question: "What does the walrus operator (:=) do in Python?",
        options: [
          "Assignment",
          "Assignment and returns the value",
          "Equality check",
          "Inequality check",
        ],
        answer: "Assignment and returns the value",
      },
      {
        question: "Which operator is used for integer division?",
        options: ["/", "//", "div", "%"],
        answer: "//",
      },
      {
        question: 'What is the output of "Hello" * 3?',
        options: ["HelloHelloHello", "3Hello", "Hello3", "Error"],
        answer: "HelloHelloHello",
      },
      {
        question: 'What is the difference between "is" and "==" operators?',
        options: [
          "No difference",
          '"is" checks identity, "==" checks equality',
          '"is" checks equality, "==" checks identity',
          '"is" is for objects, "==" is for primitives',
        ],
        answer: '"is" checks identity, "==" checks equality',
      },
      {
        question: 'What does the "global" keyword do?',
        options: [
          "Creates a global variable",
          "Declares a variable as global within a function",
          "Imports global modules",
          "Makes a function globally available",
        ],
        answer: "Declares a variable as global within a function",
      },
      {
        question: "Which operator performs bitwise AND?",
        options: ["&", "&&", "AND", "|"],
        answer: "&",
      },
      {
        question: 'What is the result of "5" + "3" in Python?',
        options: ["8", "53", "5 + 3", "Error"],
        answer: "53",
      },
      {
        question: 'What does the "lambda" keyword do?',
        options: [
          "Creates an anonymous function",
          "Declares a variable type",
          "Imports a library",
          "Creates a class",
        ],
        answer: "Creates an anonymous function",
      },
      {
        question: "What is the output of 3 < 5 < 7 in Python?",
        options: ["True", "False", "Error", "None"],
        answer: "True",
      },
      {
        question: 'What does the "nonlocal" keyword do?',
        options: [
          "Declares a variable as not being global",
          "Declares a variable from the nearest enclosing scope",
          "Creates a local variable",
          "Prevents variable access from other modules",
        ],
        answer: "Declares a variable from the nearest enclosing scope",
      },
      {
        question: "Which operator is used for matrix multiplication in Python?",
        options: ["*", "**", "@", "#"],
        answer: "@",
      },
      {
        question: 'What does the "yield" keyword do?',
        options: [
          "Returns a value from a function",
          "Returns a value and pauses a generator function",
          "Assigns a value",
          "Exits a loop",
        ],
        answer: "Returns a value and pauses a generator function",
      },
      {
        question: "What is the output of [1, 2] + [3, 4]?",
        options: ["[4, 6]", "[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error"],
        answer: "[1, 2, 3, 4]",
      },
      {
        question: "What is short-circuit evaluation in Python?",
        options: [
          "Optimizing code by removing unused variables",
          "Skipping evaluation of expressions when the result is already determined",
          "Using fewer lines of code",
          "A method to handle exceptions",
        ],
        answer:
          "Skipping evaluation of expressions when the result is already determined",
      },
      {
        question: 'What is the purpose of the "with" keyword?',
        options: [
          "Creating loops",
          "Handling exceptions",
          "Context management (automatic resource cleanup)",
          "Defining functions",
        ],
        answer: "Context management (automatic resource cleanup)",
      },
      {
        question:
          'What operator would you use to get "World" from the string "Hello World"?',
        options: ["+", "*", "[6:]", "substring()"],
        answer: "[6:]",
      },
      {
        question:
          "What is the result of 13 ^ 7 in Python? (^ is the bitwise XOR operator)",
        options: ["91", "10", "20", "6"],
        answer: "10",
      },
      {
        question: 'What does the "del" keyword do?',
        options: [
          "Deletes a file",
          "Deletes a variable or object",
          "Deletes a function",
          "Deletes a module",
        ],
        answer: "Deletes a variable or object",
      },
      {
        question:
          "What will be the value of x after this code? x = [1, 2, 3]; y = x; x = [4, 5, 6]",
        options: [
          "[1, 2, 3]",
          "[4, 5, 6]",
          "Both x and y will be [4, 5, 6]",
          "Error",
        ],
        answer: "[4, 5, 6]",
      },
    ],
    advanced: [
      {
        question: "What is the difference between is None and == None?",
        options: [
          "No difference",
          "is None is the correct way, == None can be overridden",
          "is None checks identity, == None checks equality",
          "is None is faster",
        ],
        answer: "is None is the correct way, == None can be overridden",
      },
      {
        question:
          "What will be the output of this code?\n```python\nx = 5\nprint(x > 3 and x < 10)\n```",
        options: ["True", "False", "5", "Error"],
        answer: "True",
      },
      {
        question: "What does the @property decorator do?",
        options: [
          "Makes a method a class property",
          "Creates a getter method for a property",
          "Makes an attribute private",
          "Creates a static method",
        ],
        answer: "Creates a getter method for a property",
      },
      {
        question: "What is operator overloading in Python?",
        options: [
          "Using operators on operands with different types",
          "Defining how operators work for custom objects",
          "Using multiple operators in one expression",
          "Optimizing operator performance",
        ],
        answer: "Defining how operators work for custom objects",
      },
      {
        question: "What special method corresponds to the + operator?",
        options: ["__add__()", "__plus__()", "__sum__()", "__addition__()"],
        answer: "__add__()",
      },
      {
        question: "What is a decorator in Python?",
        options: [
          "A design pattern for modifying objects",
          "A function that modifies another function",
          "A class attribute",
          "An operator",
        ],
        answer: "A function that modifies another function",
      },
      {
        question: "What is the purpose of __slots__ in a class?",
        options: [
          "To define fixed attribute names and reduce memory usage",
          "To specify the order of attributes",
          "To mark private attributes",
          "To reserve method names",
        ],
        answer: "To define fixed attribute names and reduce memory usage",
      },
      {
        question: 'What does the "async" keyword do?',
        options: [
          "Makes a function run faster",
          "Defines an asynchronous function",
          "Makes a function run in a separate thread",
          "Optimizes function calls",
        ],
        answer: "Defines an asynchronous function",
      },
      {
        question:
          "What will be the output of this code?\n```python\nprint(1 < 2 > 3)\n```",
        options: ["True", "False", "Error", "None"],
        answer: "False",
      },
      {
        question: 'What is the purpose of the "yield from" statement?',
        options: [
          "To yield a value from a function",
          "To yield multiple values at once",
          "To delegate to a subgenerator",
          "To exit a generator",
        ],
        answer: "To delegate to a subgenerator",
      },
      {
        question: 'What does the "await" keyword do?',
        options: [
          "Pauses execution until an awaitable completes",
          "Waits for user input",
          "Creates a timed delay",
          "Waits for a thread to finish",
        ],
        answer: "Pauses execution until an awaitable completes",
      },
      {
        question: 'What is the purpose of the "__getattr__" method?',
        options: [
          "To get any attribute",
          "To handle attribute access for attributes that don't exist",
          "To make all attributes private",
          "To create new attributes",
        ],
        answer: "To handle attribute access for attributes that don't exist",
      },
      {
        question: "What is a metaclass in Python?",
        options: [
          "A class that inherits from multiple classes",
          "A class that creates classes",
          "A class with special methods",
          "A class that can't be instantiated",
        ],
        answer: "A class that creates classes",
      },
      {
        question:
          "What is the output of this code?\n```python\nclass A:\n    def __init__(self, v=1):\n        self.v = v\n    def __add__(self, other):\n        return A(self.v + other.v)\n\na = A(5)\nb = A(10)\nprint((a + b).v)\n```",
        options: ["5", "10", "15", "Error"],
        answer: "15",
      },
      {
        question: "What is monkey patching in Python?",
        options: [
          "Adding bugs to code",
          "Modifying classes or modules at runtime",
          "Testing with mocked objects",
          "Optimizing code performance",
        ],
        answer: "Modifying classes or modules at runtime",
      },
      {
        question: 'What is the purpose of the "reversed" keyword?',
        options: [
          "It's not a keyword, it's a function",
          "To reverse a string",
          "To iterate through a sequence in reverse",
          "To reverse the order of operations",
        ],
        answer: "It's not a keyword, it's a function",
      },
      {
        question: 'What is the difference between "and" and "&" operators?',
        options: [
          '"and" is for boolean operations, "&" is for bitwise operations',
          "No difference",
          '"and" works on all types, "&" only works on integers',
          '"and" is slower than "&"',
        ],
        answer:
          '"and" is for boolean operations, "&" is for bitwise operations',
      },
      {
        question: 'What is the purpose of the "__call__" method?',
        options: [
          "To call a function",
          "To make an object callable like a function",
          "To call the parent class constructor",
          "To check if an object can be called",
        ],
        answer: "To make an object callable like a function",
      },
      {
        question:
          "What will be the output of this code?\n```python\nx = [1, 2, 3]\nprint(id(x) == id(x[:]))\n```",
        options: ["True", "False", "Error", "None"],
        answer: "False",
      },
      {
        question: "What is descriptor protocol in Python?",
        options: [
          "A way to document code",
          "A formal specification for class attributes",
          "Methods that customize attribute access (__get__, __set__, __delete__)",
          "A method to describe objects",
        ],
        answer:
          "Methods that customize attribute access (__get__, __set__, __delete__)",
      },
    ],
    expert: [],
  },
  strings_casting: {
    beginner: [
      {
        question: 'What is the correct way to output "Hello World" in Python?',
        options: [
          'echo "Hello World"',
          'print("Hello World")',
          'printf("Hello World")',
          'Console.WriteLine("Hello World")',
        ],
        answer: 'print("Hello World")',
      },
      {
        question: "How do you convert a string to lowercase in Python?",
        options: ["lowercase()", "toLower()", "lower()", "str.downcase()"],
        answer: "lower()",
      },
      {
        question: 'What will "Hello"[1] return in Python?',
        options: ["H", "e", "He", "error"],
        answer: "e",
      },
      {
        question: "How do you convert an integer to a string in Python?",
        options: ["int(x)", "str(x)", "toString(x)", "cast(x, string)"],
        answer: "str(x)",
      },
      {
        question:
          "Which method can be used to remove whitespace from the beginning or end of a string?",
        options: ["strip()", "trim()", "removeWhitespace()", "clean()"],
        answer: "strip()",
      },
      {
        question: "How do you find the length of a string in Python?",
        options: [
          "string.length",
          "len(string)",
          "string.size()",
          "string.length()",
        ],
        answer: "len(string)",
      },
      {
        question: "How do you convert a string to uppercase in Python?",
        options: ["uppercase()", "toUpper()", "upper()", "str.upcase()"],
        answer: "upper()",
      },
      {
        question:
          "What is the correct way to check if a string starts with a specific substring?",
        options: [
          "startsWith()",
          "beginsWith()",
          "starts_with()",
          "startswith()",
        ],
        answer: "startswith()",
      },
      {
        question:
          "How do you check if a string contains only numeric characters?",
        options: [
          "str.isnumeric()",
          "str.isdigit()",
          "str.isnum()",
          "str.numeric()",
        ],
        answer: "str.isnumeric()",
      },
      {
        question: "What does the split() method do to a string?",
        options: [
          "Divides it into characters",
          "Splits it into substrings based on a delimiter",
          "Removes whitespace",
          "Converts it to uppercase",
        ],
        answer: "Splits it into substrings based on a delimiter",
      },
      {
        question: "How do you concatenate two strings in Python?",
        options: [
          "string1.append(string2)",
          "string1 + string2",
          "string1.concat(string2)",
          "merge(string1, string2)",
        ],
        answer: "string1 + string2",
      },
      {
        question:
          "Which method returns a copy of a string with the first character capitalized?",
        options: ["capitalize()", "title()", "upper()", "cap()"],
        answer: "capitalize()",
      },
      {
        question:
          "What happens when you try to access a character in a string using an index that is out of range?",
        options: [
          "Returns None",
          "Returns an empty string",
          "Raises an IndexError",
          "Wraps around to the beginning",
        ],
        answer: "Raises an IndexError",
      },
      {
        question:
          "How do you check if all characters in a string are alphabetic?",
        options: [
          "str.isalpha()",
          "str.alpha()",
          "str.isalphabet()",
          "str.ischar()",
        ],
        answer: "str.isalpha()",
      },
      {
        question: 'What is the output of "hello".count("l")?',
        options: ["0", "1", "2", "3"],
        answer: "2",
      },
      {
        question:
          "How do you convert a string to a floating-point number in Python?",
        options: [
          "float(string)",
          "toFloat(string)",
          "decimal(string)",
          "string.float()",
        ],
        answer: "float(string)",
      },
      {
        question: "What does the rstrip() method do?",
        options: [
          "Removes all whitespace",
          "Removes leading whitespace",
          "Removes trailing whitespace",
          "Removes spaces between words",
        ],
        answer: "Removes trailing whitespace",
      },
      {
        question: 'What is the output of "Hello" + " " + "World"?',
        options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
        answer: "Hello World",
      },
      {
        question: "How can you find the position of a substring in a string?",
        options: ["position()", "locate()", "find()", "search()"],
        answer: "find()",
      },
      {
        question:
          "What happens when you use the int() function on a string that contains non-numeric characters?",
        options: [
          "It returns 0",
          "It removes the non-numeric characters",
          "It raises a ValueError",
          "It returns None",
        ],
        answer: "It raises a ValueError",
      },
    ],
    intermediate: [
      {
        question: 'What is the output of 3 * "Python"?',
        options: ["PythonPythonPython", "Python 3", "3Python", "Error"],
        answer: "PythonPythonPython",
      },
      {
        question: "What is string interpolation in Python?",
        options: [
          "Inserting variables into strings",
          "Combining two strings",
          "Converting a string to a number",
          "Formatting a string",
        ],
        answer: "Inserting variables into strings",
      },
      {
        question: 'What is the output of "Hello".replace("l", "x")?',
        options: ["Hexxo", "Hexlo", "Hello", "Error"],
        answer: "Hexxo",
      },
      {
        question: 'What is the result of "".join(["Hello", "World"])?',
        options: ["HelloWorld", "Hello World", "Hello,World", "Error"],
        answer: "HelloWorld",
      },
      {
        question: "How do you create a raw string in Python?",
        options: [
          'str("string")',
          '"raw:string"',
          'r"string"',
          'raw("string")',
        ],
        answer: 'r"string"',
      },
      {
        question: "What does the ljust() method do?",
        options: [
          "Aligns the string to the left",
          "Converts string to lowercase",
          "Justifies the text in the console",
          "Returns a left-trimmed string",
        ],
        answer: "Aligns the string to the left",
      },
      {
        question: 'What is the output of "Hello World".title()?',
        options: ["hello world", "Hello world", "Hello World", "HELLO WORLD"],
        answer: "Hello World",
      },
      {
        question: "What is the purpose of the format() method in strings?",
        options: [
          "To format the appearance of a string",
          "To insert values into placeholders in a string",
          "To validate string format",
          "To standardize string encoding",
        ],
        answer: "To insert values into placeholders in a string",
      },
      {
        question: 'What will be the output of f"{10:04d}"?',
        options: ["10", "0010", "10.00", "Error"],
        answer: "0010",
      },
      {
        question: 'What is the output of "Hello".center(10, "*")?',
        options: ["**Hello***", "**Hello**", "*****Hello", "Hello*****"],
        answer: "**Hello***",
      },
      {
        question:
          "How would you convert a list of strings to a single string, separated by commas?",
        options: [
          '"".join(list)',
          '",".join(list)',
          "list.toString()",
          'list.join(",")',
        ],
        answer: '",".join(list)',
      },
      {
        question: "What does the zfill() method do?",
        options: [
          "Fills a string with zeros",
          "Pads the string with zeros on the left",
          "Replaces empty spaces with zeros",
          "Creates a string of zeros",
        ],
        answer: "Pads the string with zeros on the left",
      },
      {
        question:
          "What is the difference between str.isdigit() and str.isnumeric()?",
        options: [
          "No difference",
          "isdigit() only recognizes 0-9, isnumeric() recognizes other numeric characters",
          "isdigit() returns a bool, isnumeric() returns an int",
          "isdigit() can handle negative numbers, isnumeric() cannot",
        ],
        answer:
          "isdigit() only recognizes 0-9, isnumeric() recognizes other numeric characters",
      },
      {
        question: "What does the partition() method return?",
        options: [
          "A list with parts of the string",
          "A tuple with three elements: before, separator, and after",
          "A dictionary with string parts",
          "An array with character counts",
        ],
        answer: "A tuple with three elements: before, separator, and after",
      },
      {
        question:
          "How can you check if a string contains only whitespace characters?",
        options: [
          "str.isspace()",
          "str.iswhitespace()",
          "str.isblank()",
          "str.isempty()",
        ],
        answer: "str.isspace()",
      },
      {
        question: 'What is the output of "42".zfill(5)?',
        options: ["42000", "00042", "42.00", "00.42"],
        answer: "00042",
      },
      {
        question: 'What will be the output of "{:.2f}".format(3.14159)?',
        options: ["3.14", "3.14159", "3.142", "Error"],
        answer: "3.14",
      },
      {
        question:
          'What does the following f-string expression print? f"{5**2}"',
        options: ["5**2", "52", "25", "Error"],
        answer: "25",
      },
      {
        question:
          "What is the correct way to check if a string is a valid Python identifier?",
        options: [
          "str.isidentifier()",
          "str.isvalid()",
          "str.isname()",
          "str.isid()",
        ],
        answer: "str.isidentifier()",
      },
      {
        question:
          "What does the maketrans() and translate() methods do when used together?",
        options: [
          "Translate text to another language",
          "Convert string to bytes",
          "Replace characters according to a mapping table",
          "Format the string for output",
        ],
        answer: "Replace characters according to a mapping table",
      },
    ],
    advanced: [
      {
        question:
          "What is the difference between f-strings, %-formatting, and str.format() in Python?",
        options: [
          "f-strings are newer and more readable",
          "str.format() is faster",
          "%-formatting is more powerful",
          "There is no difference",
        ],
        answer: "f-strings are newer and more readable",
      },
      {
        question: "What does the encode() method do in Python strings?",
        options: [
          "Encrypts the string",
          "Converts the string into bytes",
          "Compresses the string",
          "Converts the string to uppercase",
        ],
        answer: "Converts the string into bytes",
      },
      {
        question:
          "What is the purpose of string unicode normalization in Python?",
        options: [
          "To ensure all strings use the same character set",
          "To standardize the representation of equivalent characters",
          "To compress strings for storage",
          "To compare strings in different languages",
        ],
        answer: "To standardize the representation of equivalent characters",
      },
      {
        question:
          "What happens when you call str.casefold() compared to str.lower()?",
        options: [
          "No difference",
          "casefold() is more aggressive for case-insensitive comparisons",
          "lower() converts to lowercase, casefold() removes all case distinctions",
          "casefold() works with Unicode, lower() only with ASCII",
        ],
        answer:
          "casefold() is more aggressive for case-insensitive comparisons",
      },
      {
        question: 'What is the output of "🐍".encode("utf-8")?',
        options: [
          "An error",
          "A bytes object representing the snake emoji",
          "The Unicode code point as an integer",
          "A string with Unicode escape sequence",
        ],
        answer: "A bytes object representing the snake emoji",
      },
      {
        question: "What is the purpose of the string module in Python?",
        options: [
          "It provides advanced string manipulation functions",
          "It contains constants and utility functions for strings",
          "It offers internationalization support for strings",
          "It provides compression algorithms for strings",
        ],
        answer: "It contains constants and utility functions for strings",
      },
      {
        question:
          'What happens in the following code?\n```python\ns = "Hello"\ns[0] = "J"\n```',
        options: [
          's becomes "Jello"',
          "Nothing, strings are immutable",
          "It raises a TypeError",
          'It creates a new string "Jello"',
        ],
        answer: "It raises a TypeError",
      },
      {
        question:
          "What is a memoryview in Python and how does it relate to string operations?",
        options: [
          "It allows direct access to an objects memory",
          "Its a specialized view of a string that allows faster operations",
          "Its a memory-optimized version of a string",
          "It caches string operations for faster access",
        ],
        answer: "It allows direct access to an objects memory",
      },
      {
        question:
          'What will the following code return?\n```python\nimport re\nre.sub(r"[aeiou]", "*", "Hello World")\n```',
        options: ["H*ll* W*rld", "*e**o *o**d", "Hello World", "H*ll* W*rl*"],
        answer: "H*ll* W*rld",
      },
      {
        question: "What is the difference between bytes and str in Python 3?",
        options: [
          "bytes is just an alias for str",
          "bytes represents sequences of integers, str represents sequences of characters",
          "str is ASCII only, bytes can handle Unicode",
          "bytes is faster for string operations",
        ],
        answer:
          "bytes represents sequences of integers, str represents sequences of characters",
      },
      {
        question:
          'What will the following expression return?\n```python\n"Hello".encode().decode()\n```',
        options: ["Hello", "HELLO", "An error", 'A bytes version of "Hello"'],
        answer: "Hello",
      },
      {
        question: "How would you handle multi-line strings in Python?",
        options: [
          "Using escape sequences like \\n",
          "Using triple quotes",
          "Using the multiline() function",
          "Concatenating strings with +",
        ],
        answer: "Using triple quotes",
      },
      {
        question: "What is the difference between str.find() and str.index()?",
        options: [
          "No difference",
          "find() returns -1 if not found, index() raises ValueError",
          "index() can search for multiple substrings",
          "find() is faster than index()",
        ],
        answer: "find() returns -1 if not found, index() raises ValueError",
      },
      {
        question: "What does the textwrap module do in Python?",
        options: [
          "It wraps text for output formatting",
          "It provides encryption for strings",
          "It converts between different text encodings",
          "It provides string interpolation",
        ],
        answer: "It wraps text for output formatting",
      },
      {
        question: "What is the purpose of the __format__() method in Python?",
        options: [
          "To define string representation of objects",
          "To format numbers as strings",
          "To customize how an object is formatted with format() or f-strings",
          "To ensure proper string encoding",
        ],
        answer:
          "To customize how an object is formatted with format() or f-strings",
      },
      {
        question: "What is Unicode normalization form C (NFC)?",
        options: [
          "A compression algorithm for Unicode strings",
          "Canonical decomposition followed by canonical composition",
          "A way to convert Unicode to ASCII",
          "A method to normalize all characters to a common width",
        ],
        answer: "Canonical decomposition followed by canonical composition",
      },
      {
        question:
          'Which is more memory efficient in Python 3?\n```python\n"Hello" * 1000\n```\nor\n```python\n"".join(["Hello"] * 1000)\n```',
        options: [
          "Both use the same memory",
          "The first example",
          "The second example",
          "Depends on the Python implementation",
        ],
        answer: "Both use the same memory",
      },
      {
        question: "What is the purpose of string interning in Python?",
        options: [
          "To ensure strings have proper grammar",
          "To optimize memory usage by reusing string objects",
          "To allow strings to be compared using the is operator",
          "Both B and C",
        ],
        answer: "Both B and C",
      },
      {
        question:
          'What will be output by the following code?\n```python\n"\\u03C0".encode("ascii", "namereplace")\n```',
        options: [
          'b"\\\\u03C0"',
          'b"\\\\N{GREEK SMALL LETTER PI}"',
          "UnicodeEncodeError",
          'b"pi"',
        ],
        answer: 'b"\\\\N{GREEK SMALL LETTER PI}"',
      },
      {
        question:
          'What is the result of adding two strings that contain numeric characters?\n```python\n"123" + "456"\n```',
        options: ["579", '"579"', '"123456"', "TypeError"],
        answer: '"123456"',
      },
    ],
    expert: [],
  },
  control_flow: {
    beginner: [
      {
        question:
          "Which statement is used for conditional execution in Python?",
        options: ["switch", "case", "if", "select"],
        answer: "if",
      },
      {
        question: "What is the correct syntax for a for loop in Python?",
        options: [
          "for i = 0 to 5",
          "for i in range(5):",
          "for (i=0; i<5; i++)",
          "foreach (i in 5)",
        ],
        answer: "for i in range(5):",
      },
      {
        question: "What statement is used to exit a loop prematurely?",
        options: ["exit", "return", "break", "stop"],
        answer: "break",
      },
      {
        question: 'What does the "else" clause in a for loop do in Python?',
        options: [
          "Executes if the loop body never executes",
          "Executes after the loop completes normally",
          "Executes if there's an error in the loop",
          "There is no else clause for loops",
        ],
        answer: "Executes after the loop completes normally",
      },
      {
        question: "Which of the following is not a loop statement in Python?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "do-while",
      },
      {
        question:
          "What is the purpose of the \"if __name__ == '__main__'\" statement in Python?",
        options: [
          "To check if the module is being run directly",
          "To declare the main function",
          "To define the main class",
          "To initialize the main variables",
        ],
        answer: "To check if the module is being run directly",
      },
      {
        question: "How do you write a single-line if-else statement in Python?",
        options: [
          "x = a if b else c",
          "x = a ? b : c",
          "x = if a then b else c",
          "x = a when b otherwise c",
        ],
        answer: "x = a if b else c",
      },
      {
        question:
          "Which of the following is used to skip the rest of the code inside a loop for the current iteration?",
        options: ["pass", "continue", "skip", "break"],
        answer: "continue",
      },
      {
        question:
          "What is the output of the following code?\n```python\nfor i in range(3):\n    print(i)\n```",
        options: ["0 1 2", "1 2 3", "Error", "0, 1, 2"],
        answer: "0 1 2",
      },
      {
        question:
          "Which loop in Python is guaranteed to execute at least once?",
        options: [
          "for loop",
          "while loop",
          "do-while loop",
          "None of the above",
        ],
        answer: "None of the above",
      },
      {
        question: "What does the range(5) function return?",
        options: [
          "[0, 1, 2, 3, 4]",
          "A sequence from 0 to 4",
          "A sequence from 0 to 5",
          "[1, 2, 3, 4, 5]",
        ],
        answer: "A sequence from 0 to 4",
      },
      {
        question: "What is the correct way to handle exceptions in Python?",
        options: [
          "try-catch-finally",
          "try-except-finally",
          "catch-try-finally",
          "try-except-catch",
        ],
        answer: "try-except-finally",
      },
      {
        question: "How do you create a nested if statement in Python?",
        options: [
          "Using indentation",
          "Using brackets {}",
          "Using parentheses ()",
          "Using begin-end keywords",
        ],
        answer: "Using indentation",
      },
      {
        question: 'What does the "pass" statement do in Python?',
        options: [
          "Skips to the next iteration",
          "Does nothing",
          "Exits the loop",
          "Passes control to another function",
        ],
        answer: "Does nothing",
      },
      {
        question:
          "What is the output of this code?\n```python\ni = 1\nwhile i < 3:\n    print(i)\n    i += 1\n```",
        options: ["1 2", "0 1 2", "Infinite loop", "Error"],
        answer: "1 2",
      },
      {
        question:
          "Which keyword is used to define a block of code that will be executed when an exception is raised?",
        options: ["catch", "except", "handle", "finally"],
        answer: "except",
      },
      {
        question:
          "What is the correct way to use the elif statement in Python?",
        options: [
          'if x > 0: print("Positive") elif x < 0: print("Negative")',
          'if x > 0: print("Positive") else if x < 0: print("Negative")',
          'if x > 0:\n    print("Positive")\nelif x < 0:\n    print("Negative")',
          'if x > 0 then print("Positive") elif x < 0 then print("Negative")',
        ],
        answer:
          'if x > 0:\n    print("Positive")\nelif x < 0:\n    print("Negative")',
      },
      {
        question:
          'What is the purpose of a "finally" block in a try-except statement?',
        options: [
          "To define another exception to catch",
          "To execute code regardless of whether an exception was raised",
          "To finalize the exception handling",
          "To check if any exceptions were raised",
        ],
        answer: "To execute code regardless of whether an exception was raised",
      },
      {
        question: "What happens if no exception is caught by any except block?",
        options: [
          "The program continues normally",
          "The program crashes",
          "The exception is ignored",
          "The exception propagates to the calling code",
        ],
        answer: "The exception propagates to the calling code",
      },
      {
        question:
          "What is the output of this code?\n```python\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)\n```",
        options: ["0 1 2", "0 2", "1", "Error"],
        answer: "0 2",
      },
    ],
    intermediate: [
      {
        question: "What does the continue statement do in a loop?",
        options: [
          "Exits the loop completely",
          "Skips the current iteration and continues with the next",
          "Pauses the loop execution",
          "Restarts the loop from the beginning",
        ],
        answer: "Skips the current iteration and continues with the next",
      },
      {
        question: "What is the purpose of the pass statement in Python?",
        options: [
          "It acts as a placeholder",
          "It exits the current function",
          "It skips the current iteration in a loop",
          "It passes a value to the next statement",
        ],
        answer: "It acts as a placeholder",
      },
      {
        question: "How can you implement a switch statement in Python?",
        options: [
          "Using the switch keyword",
          "Using if-elif-else chains",
          "Using dictionaries with functions as values",
          "Both B and C",
        ],
        answer: "Both B and C",
      },
      {
        question: "What is a generator in Python?",
        options: [
          "A function that creates iterators",
          "A class that generates random numbers",
          "A special type of list",
          "A tool to generate new code",
        ],
        answer: "A function that creates iterators",
      },
      {
        question: "What is the purpose of the yield statement?",
        options: [
          "To return a value from a function",
          "To pause a function and return a value",
          "To raise an exception",
          "To terminate a program",
        ],
        answer: "To pause a function and return a value",
      },
      {
        question: "What happens when a StopIteration exception is raised?",
        options: [
          "The program crashes",
          "The iteration terminates",
          "The loop continues with the next element",
          "A default value is returned",
        ],
        answer: "The iteration terminates",
      },
      {
        question:
          'What is the purpose of the "else" clause in a try-except statement?',
        options: [
          "To handle a specific exception",
          "To execute code if no exception is raised",
          "To define a default exception handler",
          "To provide an alternative solution",
        ],
        answer: "To execute code if no exception is raised",
      },
      {
        question: "How do you raise a custom exception in Python?",
        options: [
          "Using the throw keyword",
          "Using the raise statement",
          "Using the except keyword",
          "Using the custom keyword",
        ],
        answer: "Using the raise statement",
      },
      {
        question: "What is a context manager in Python?",
        options: [
          "A framework for managing connections",
          "An object that manages resources using the with statement",
          "A tool for managing control flow",
          "A module for managing exceptions",
        ],
        answer: "An object that manages resources using the with statement",
      },
      {
        question: "What does the @contextmanager decorator do?",
        options: [
          "Creates a context manager from a generator function",
          "Handles exceptions automatically",
          "Manages system resources",
          "Defines a new context",
        ],
        answer: "Creates a context manager from a generator function",
      },
      {
        question: 'What is the purpose of the "with" statement in Python?',
        options: [
          "To create a new scope",
          "To define a code block",
          "To ensure proper cleanup of resources",
          "To handle exceptions",
        ],
        answer: "To ensure proper cleanup of resources",
      },
      {
        question: "What is a lambda function in Python?",
        options: [
          "A named function defined with the lambda keyword",
          "An anonymous function",
          "A built-in function",
          "A function that automatically iterates",
        ],
        answer: "An anonymous function",
      },
      {
        question:
          "What will this code output?\n```python\ndef outer(x):\n    def inner(y):\n        return x + y\n    return inner\n\nf = outer(5)\nprint(f(3))\n```",
        options: ["5", "3", "8", "Error"],
        answer: "8",
      },
      {
        question:
          'What is the output of this code?\n```python\ntry:\n    print("try")\n    raise ValueError()\nexcept ValueError:\n    print("except")\nfinally:\n    print("finally")\n```',
        options: [
          "try except finally",
          "try finally",
          "except finally",
          "Error",
        ],
        answer: "try except finally",
      },
      {
        question: "What is a list comprehension?",
        options: [
          "A way to create lists using a for loop in a single line",
          "A method to analyze lists",
          "A technique to compress lists in memory",
          "A function to combine multiple lists",
        ],
        answer: "A way to create lists using a for loop in a single line",
      },
      {
        question: "What is a generator expression?",
        options: [
          "An expression that returns a list",
          "An expression that yields elements one at a time",
          "A function that generates random numbers",
          "A syntax error in Python",
        ],
        answer: "An expression that yields elements one at a time",
      },
      {
        question: "What does the any() function do in Python?",
        options: [
          "Returns True if any element in an iterable is True",
          "Returns any element from an iterable",
          "Checks if an iterable has any elements",
          "Returns the first element of an iterable",
        ],
        answer: "Returns True if any element in an iterable is True",
      },
      {
        question: "What does the all() function do in Python?",
        options: [
          "Returns True if all elements in an iterable are True",
          "Returns all elements from an iterable",
          "Checks if an iterable has all required elements",
          "Returns the last element of an iterable",
        ],
        answer: "Returns True if all elements in an iterable are True",
      },
      {
        question: "What is the purpose of the assert statement in Python?",
        options: [
          "To make assertions about the code for debugging",
          "To assert control over a process",
          "To assert that a variable exists",
          "To optimize code execution",
        ],
        answer: "To make assertions about the code for debugging",
      },
      {
        question:
          "What is the output of this code?\n```python\nresult = [i for i in range(5) if i % 2 == 0]\nprint(result)\n```",
        options: ["[0, 2, 4]", "[0, 1, 2, 3, 4]", "[1, 3]", "[2, 4]"],
        answer: "[0, 2, 4]",
      },
    ],
    advanced: [
      {
        question: "What is a context manager in Python?",
        options: [
          "A special type of loop",
          "A resource manager using with statement",
          "A function that manages control flow",
          "A type of conditional statement",
        ],
        answer: "A resource manager using with statement",
      },
      {
        question: "What is a decorator in Python?",
        options: [
          "A function that takes another function and extends its behavior",
          "A design pattern for GUI applications",
          "A type of loop",
          "A special type of class",
        ],
        answer:
          "A function that takes another function and extends its behavior",
      },
      {
        question: "What is a coroutine in Python?",
        options: [
          "A regular function with a return statement",
          "A function that can suspend and resume execution",
          "A parallel processing technique",
          "A type of exception handling",
        ],
        answer: "A function that can suspend and resume execution",
      },
      {
        question: "What is the difference between a generator and an iterator?",
        options: [
          "Generators use yield, iterators use next()",
          "Generators are built-in, iterators are user-defined",
          "Generators create iterators, iterators access elements",
          "Generators consume more memory than iterators",
        ],
        answer: "Generators use yield, iterators use next()",
      },
      {
        question: "How does exception chaining work in Python?",
        options: [
          "Using the raise from statement",
          "Using multiple except blocks",
          "Using the chain() function",
          "Using the link() method",
        ],
        answer: "Using the raise from statement",
      },
      {
        question:
          "What is the purpose of the contextlib.suppress context manager?",
        options: [
          "To silence warnings",
          "To suppress specific exceptions",
          "To prevent logging",
          "To hide code execution",
        ],
        answer: "To suppress specific exceptions",
      },
      {
        question: "What is a metaclass in Python?",
        options: [
          "A class that inherits from multiple classes",
          "A class that defines how classes are created",
          "A class with static methods",
          "A class that cannot be instantiated",
        ],
        answer: "A class that defines how classes are created",
      },
      {
        question:
          "What is the output of this code?\n```python\ndef gen():\n    yield 1\n    yield from [2, 3, 4]\n    yield 5\n    \nprint(list(gen()))\n```",
        options: [
          "[1, 2, 3, 4, 5]",
          "[1, [2, 3, 4], 5]",
          "[1, 5]",
          "[1, 2, 3, 4]",
        ],
        answer: "[1, 2, 3, 4, 5]",
      },
      {
        question: "What is the purpose of the asyncio module in Python?",
        options: [
          "To handle HTTP requests",
          "To provide asynchronous I/O capabilities",
          "To process data in parallel",
          "To manage system resources",
        ],
        answer: "To provide asynchronous I/O capabilities",
      },
      {
        question:
          "What are the keywords used for asynchronous programming in Python?",
        options: [
          "async and await",
          "yield and return",
          "parallel and concurrent",
          "async and sync",
        ],
        answer: "async and await",
      },
      {
        question: "What is a closure in Python?",
        options: [
          "A function that closes files",
          "A function that terminates execution",
          "A nested function that remembers values from the outer scope",
          "A class method that finalizes objects",
        ],
        answer: "A nested function that remembers values from the outer scope",
      },
      {
        question: "What is tail recursion optimization?",
        options: [
          "A technique to reduce recursion depth",
          "An optimization where recursive calls are the last operation",
          "A method to prevent stack overflow",
          "A way to speed up recursive functions",
        ],
        answer: "An optimization where recursive calls are the last operation",
      },
      {
        question:
          "Does Python automatically perform tail recursion optimization?",
        options: [
          "Yes, always",
          "No, never",
          "Only in newer versions",
          "Only with the @tailrec decorator",
        ],
        answer: "No, never",
      },
      {
        question: "What is the purpose of the functools.lru_cache decorator?",
        options: [
          "To memoize function calls",
          "To limit recursion depth",
          "To optimize memory usage",
          "To log function calls",
        ],
        answer: "To memoize function calls",
      },
      {
        question:
          "What is the output of this code?\n```python\nasync def f():\n    return 1\n    \nprint(f())\n```",
        options: ["1", "None", "A coroutine object", "Error"],
        answer: "A coroutine object",
      },
      {
        question:
          'What is the purpose of the "yield from" statement in Python?',
        options: [
          "To yield multiple values at once",
          "To yield values from another generator",
          "To yield from a function",
          "To create a list of yielded values",
        ],
        answer: "To yield values from another generator",
      },
      {
        question: "What does the @staticmethod decorator do?",
        options: [
          "Creates a method that doesn't access the instance",
          "Creates a method that can only be called once",
          "Creates a method that cannot be overridden",
          "Creates a method that remains in memory",
        ],
        answer: "Creates a method that doesn't access the instance",
      },
      {
        question:
          'What is the purpose of the "with" statement contextlib.ExitStack()?',
        options: [
          "To exit from multiple contexts",
          "To manage multiple context managers",
          "To handle stack overflows",
          "To exit a function gracefully",
        ],
        answer: "To manage multiple context managers",
      },
      {
        question: "How do you create a custom context manager in Python?",
        options: [
          "By implementing __enter__ and __exit__ methods",
          "By inheriting from the ContextManager class",
          "By using the @contextmanager decorator",
          "Both A and C",
        ],
        answer: "Both A and C",
      },
      {
        question:
          "What is the difference between return and yield in a function?",
        options: [
          "return exits the function, yield pauses it",
          "return can only return one value, yield can return multiple values",
          "return is for regular functions, yield is for generators",
          "All of the above",
        ],
        answer: "All of the above",
      },
    ],
    expert: [],
  },
  lists_tuples_dict: {
    beginner: [
      {
        question: "How do you define a function in Python?",
        options: [
          "function myFunc():",
          "def myFunc():",
          "define myFunc():",
          "func myFunc():",
        ],
        answer: "def myFunc():",
      },
      {
        question: "How do you import a module in Python?",
        options: [
          "#include <module>",
          "import module",
          "using module",
          "require module",
        ],
        answer: "import module",
      },
      {
        question:
          "What is the purpose of the __init__.py file in a Python package?",
        options: [
          "Initialize the package",
          "Mark a directory as a package",
          "Define package variables",
          "All of the above",
        ],
        answer: "Mark a directory as a package",
      },
      {
        question:
          "How do you return multiple values from a function in Python?",
        options: [
          "Return an array",
          "Return a tuple",
          "Return multiple variables separated by commas",
          "You cannot return multiple values",
        ],
        answer: "Return multiple variables separated by commas",
      },
      {
        question: "What happens if a function doesn't have a return statement?",
        options: [
          "It returns 0",
          "It returns None",
          "It causes an error",
          "It returns the last calculated value",
        ],
        answer: "It returns None",
      },
    ],
    intermediate: [
      {
        question: "What is a lambda function in Python?",
        options: [
          "A function defined using the lambda keyword",
          "An anonymous function",
          "A small one-line function",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What does *args mean in a function definition?",
        options: [
          "It represents a variable number of arguments",
          "It collects all arguments into a tuple",
          "It allows passing non-keyword arguments to a function",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the __name__ variable in Python?",
        options: [
          "To get the name of the current function",
          "To check if a module is being run directly or imported",
          "To set the name of a class",
          "To get the name of the current module",
        ],
        answer: "To check if a module is being run directly or imported",
      },
    ],
    advanced: [
      {
        question: "What is a closure in Python?",
        options: [
          "A nested function that captures values from its enclosing lexical scope",
          "A way to close a file",
          "A special type of class",
          "A context manager",
        ],
        answer:
          "A nested function that captures values from its enclosing lexical scope",
      },
      {
        question: "What is the purpose of the functools.lru_cache decorator?",
        options: [
          "To optimize recursive functions",
          "To cache function results for faster lookup",
          "To limit the execution time of a function",
          "To implement a least recently used caching strategy",
        ],
        answer: "To cache function results for faster lookup",
      },
      {
        question: "What are dictionary views in Python?",
        options: [
          "Special dictionary representations for printing",
          "GUI elements to display dictionaries",
          "Live views of dictionary data that change when the dictionary changes",
          "Memory-efficient copies of dictionaries",
        ],
        answer: "Live views of dictionary data that change when the dictionary changes",
      },
      {
        question: "What is a ChainMap in Python's collections module?",
        options: [
          "A data structure that links dictionaries together",
          "A way to chain multiple operations on a dictionary",
          "A dictionary that enforces key order",
          "A special dictionary with linked values",
        ],
        answer: "A data structure that links dictionaries together",
      },
      {
        question: "What happens in this code? x = [[]]*3",
        options: [
          "Creates a 2D list with 3 distinct empty lists",
          "Creates a 2D list with 3 references to the same empty list",
          "Creates a list containing 3 empty strings",
          "Raises a TypeError",
        ],
        answer: "Creates a 2D list with 3 references to the same empty list",
      },
      {
        question: "What is the purpose of the collections.Counter class?",
        options: [
          "To count iterations in a loop",
          "To count occurrences of elements in a collection",
          "To track execution time",
          "To measure memory usage of collections",
        ],
        answer: "To count occurrences of elements in a collection",
      },
      {
        question: "What is the time complexity of dict.pop(key)?",
        options: [
          "O(1) on average",
          "O(log n)",
          "O(n)",
          "O(n²)",
        ],
        answer: "O(1) on average",
      },
      {
        question: "How does a collections.defaultdict differ from a regular dictionary?",
        options: [
          "It is thread-safe",
          "It automatically supplies a default value for missing keys",
          "It sorts keys automatically",
          "It has a smaller memory footprint",
        ],
        answer: "It automatically supplies a default value for missing keys",
      },
      {
        question: "What is the purpose of functools.reduce()?",
        options: [
          "To reduce the size of a data structure",
          "To apply a function cumulatively to the items of a sequence",
          "To minimize runtime complexity",
          "To simplify nested data structures",
        ],
        answer: "To apply a function cumulatively to the items of a sequence",
      },
      {
        question: "What is the purpose of collections.OrderedDict?",
        options: [
          "A dictionary that sorts keys automatically",
          "A dictionary that remembers the order of keys inserted",
          "A dictionary optimized for performance",
          "A dictionary with an order attribute",
        ],
        answer: "A dictionary that remembers the order of keys inserted",
      },
      {
        question: "How do you create a deep copy of a nested list or dictionary?",
        options: [
          "Using list.deepcopy()",
          "Using the copy.deepcopy() function",
          "Using the = operator with deep=True",
          "Using recursive functions",
        ],
        answer: "Using the copy.deepcopy() function",
      },
      {
        question: "What is a dictionary comprehension?",
        options: [
          "A compact way to create dictionaries based on existing iterables",
          "A method to compress dictionary data",
          "A technique to understand complex dictionaries",
          "A special type of dictionary that updates automatically",
        ],
        answer: "A compact way to create dictionaries based on existing iterables",
      },
      {
        question: "What is the difference between the is operator and == when comparing lists?",
        options: [
          "is checks if two lists are identical, == checks if they have the same values",
          "is checks for equality, == checks for identity",
          "is checks if the lists reference the same object, == checks if they have the same content",
          "There is no difference",
        ],
        answer: "is checks if the lists reference the same object, == checks if they have the same content",
      },
      {
        question: "What is a slice object in Python?",
        options: [
          "A portion of a list",
          "A class that represents an index range",
          "A method that cuts lists",
          "A special integer type for indexing",
        ],
        answer: "A class that represents an index range",
      },
      {
        question: "What does itertools.combinations() do?",
        options: [
          "Creates all possible combinations of elements",
          "Combines multiple iterables",
          "Creates combinations of iterables with replacement",
          "Returns multiple iterator combinations",
        ],
        answer: "Creates all possible combinations of elements",
      },
      {
        question: "What is the output of list(itertools.chain([1, 2], [3, 4]))?",
        options: [
          "[[1, 2], [3, 4]]",
          "[1, 2, 3, 4]",
          "[1, 2, [3, 4]]",
          "Error",
        ],
        answer: "[1, 2, 3, 4]",
      },
      {
        question: "How can you get both the index and value when iterating through a list?",
        options: [
          "Use a counter variable",
          "Use enumerate(list)",
          "Use list.with_indices()",
          "Use index_value(list)",
        ],
        answer: "Use enumerate(list)",
      },
      {
        question: "What is the difference between collections.namedtuple and typing.NamedTuple?",
        options: [
          "NamedTuple supports type hints, namedtuple doesn't",
          "namedtuple is faster, NamedTuple is more flexible",
          "NamedTuple is immutable, namedtuple is mutable",
          "They are exactly the same",
        ],
        answer: "NamedTuple supports type hints, namedtuple doesn't",
      },
      {
        question: "What does itertools.product() do?",
        options: [
          "Multiplies elements in iterables",
          "Computes the product of a sequence",
          "Returns the Cartesian product of iterables",
          "Finds the mathematical product of numbers",
        ],
        answer: "Returns the Cartesian product of iterables",
      },
      {
        question: "What is the most memory-efficient way to find the most common element in a large list?",
        options: [
          "Use a for loop with a counter variable",
          "Use list.count() for each element",
          "Use collections.Counter",
          "Use a recursive function",
        ],
        answer: "Use collections.Counter",
      },
    ],
    expert: [],
  },
  sets: {
    beginner: [
      {
        question: "What is a set in Python?",
        options: [
          "An ordered collection",
          "A collection with key-value pairs",
          "An unordered collection with no duplicates",
          "A mutable list",
        ],
        answer: "An unordered collection with no duplicates",
      },
      {
        question: "Which syntax creates an empty set?",
        options: ["{}", "[]", "set()", "empty()"],
        answer: "set()",
      },
      {
        question: "Which method is used to add an item to a set?",
        options: ["append()", "insert()", "add()", "extend()"],
        answer: "add()",
      },
      {
        question: "What happens when you add a duplicate value to a set?",
        options: [
          "It creates a copy",
          "It raises an error",
          "The duplicate is ignored",
          "The set becomes ordered",
        ],
        answer: "The duplicate is ignored",
      },
      {
        question: "Which data type cannot be added to a set?",
        options: ["int", "float", "list", "tuple"],
        answer: "list",
      },
      {
        question: "How do you remove an item from a set?",
        options: ["pop()", "delete()", "remove()", "drop()"],
        answer: "remove()",
      },
      {
        question: "What does the pop() method do in a set?",
        options: [
          "Removes a specific item",
          "Removes an item randomly",
          "Adds a new item",
          "Clears all items",
        ],
        answer: "Removes an item randomly",
      },
      {
        question: "Which method removes all items from a set?",
        options: ["empty()", "clear()", "delete()", "removeAll()"],
        answer: "clear()",
      },
      {
        question: "How do you create a set with values 1, 2, 3?",
        options: ["set(1,2,3)", "{1,2,3}", "[1,2,3]", "(1,2,3)"],
        answer: "{1,2,3}",
      },
      {
        question: "What does len(set([1,2,2,3])) return?",
        options: ["4", "3", "2", "1"],
        answer: "3",
      },
      {
        question: "Sets are:",
        options: ["Ordered", "Mutable", "Immutable", "Indexed"],
        answer: "Mutable",
      },
      {
        question: "Which of the following is true about sets?",
        options: [
          "They allow duplicates",
          "They are indexed",
          "They are unordered",
          "They store values in pairs",
        ],
        answer: "They are unordered",
      },
      {
        question: "Which method is used to remove an item without error if it doesn’t exist?",
        options: ["remove()", "discard()", "pop()", "drop()"],
        answer: "discard()",
      },
      {
        question: "Which of these is a valid set method?",
        options: ["get()", "put()", "add()", "append()"],
        answer: "add()",
      },
      {
        question: "Can you store a tuple inside a set?",
        options: ["Yes", "No", "Only if it’s mutable", "Only if it’s a string"],
        answer: "Yes",
      },
      {
        question: "What type of brackets are used to define a set?",
        options: ["()", "[]", "{}", "<>"],
        answer: "{}",
      },
      {
        question: "What is the output of: type({})?",
        options: [
          "<class 'dict'>",
          "<class 'set'>",
          "<class 'list'>",
          "<class 'tuple'>",
        ],
        answer: "<class 'dict'>",
      },
      {
        question: "Which of the following is NOT a valid set operation?",
        options: ["add()", "discard()", "append()", "clear()"],
        answer: "append()",
      },
      {
        question: "How are set elements stored?",
        options: ["By index", "Randomly", "By insertion order", "In a queue"],
        answer: "Randomly",
      },
      {
        question: "Which operation creates a new set from existing ones?",
        options: ["union()", "append()", "join()", "combine()"],
        answer: "union()",
      }
    ],
    intermediate: [
      {
        question: "What does set1 & set2 return?",
        options: ["Union", "Difference", "Intersection", "Symmetric Difference"],
        answer: "Intersection",
      },
      {
        question: "What does set1 | set2 return?",
        options: ["Intersection", "Union", "Difference", "Subset"],
        answer: "Union",
      },
      {
        question: "What is the result of set1 - set2?",
        options: [
          "Items in both sets",
          "Items in set2 not in set1",
          "Items in set1 not in set2",
          "Union of sets",
        ],
        answer: "Items in set1 not in set2",
      },
      {
        question: "What does ^ operator between sets do?",
        options: [
          "Intersection",
          "Symmetric difference",
          "Union",
          "Difference",
        ],
        answer: "Symmetric difference",
      },
      {
        question: "Which method checks if a set is a subset of another?",
        options: ["ispartof()", "issubset()", "includes()", "isinside()"],
        answer: "issubset()",
      },
      {
        question: "What does issuperset() return?",
        options: [
          "True if a set has all elements of another set",
          "True if sets are equal",
          "True if both are empty",
          "Error if one is empty",
        ],
        answer: "True if a set has all elements of another set",
      },
      {
        question: "Which method returns True if two sets have no elements in common?",
        options: ["isdisjoint()", "issubset()", "difference()", "symmetric()"],
        answer: "isdisjoint()",
      },
      {
        question: "What is the output of: set('hello')?",
        options: [
          "{'h', 'e', 'l', 'o'}",
          "{'hello'}",
          "['h', 'e', 'l', 'o']",
          "('h', 'e', 'l', 'o')",
        ],
        answer: "{'h', 'e', 'l', 'o'}",
      },
      {
        question: "Which of the following creates a frozen set?",
        options: ["set()", "fset()", "frozenset()", "constset()"],
        answer: "frozenset()",
      },
      {
        question: "Can you modify a frozen set?",
        options: ["Yes", "No", "Only values", "Only keys"],
        answer: "No",
      },
      {
        question: "Which method copies a set?",
        options: ["copy()", "clone()", "duplicate()", "replicate()"],
        answer: "copy()",
      },
      {
        question: "What is the result of: set('abc') == set('cba')?",
        options: ["True", "False", "Error", "None"],
        answer: "True",
      },
      {
        question: "What does the expression: 'a' in {'a', 'b'} return?",
        options: ["True", "False", "None", "Error"],
        answer: "True",
      },
      {
        question: "What does set comprehension return: {x for x in range(3)}?",
        options: ["{0, 1, 2}", "[0, 1, 2]", "(0, 1, 2)", "{1, 2, 3}"],
        answer: "{0, 1, 2}",
      },
      {
        question: "Which method is used to update one set with another?",
        options: ["merge()", "combine()", "update()", "insert()"],
        answer: "update()",
      },
      {
        question: "What is the result of len(set([1, 1, 2, 3, 3]))?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
      {
        question: "What happens when you try to add a dict to a set?",
        options: ["It gets added", "Error: unhashable type", "It’s ignored", "It becomes a frozenset"],
        answer: "Error: unhashable type",
      },
      {
        question: "Are sets iterable?",
        options: ["Yes", "No", "Only if converted", "Only strings"],
        answer: "Yes",
      },
      {
        question: "What’s the output of {1, 2}.intersection({2, 3})?",
        options: ["{1, 2, 3}", "{2}", "{1}", "{}"],
        answer: "{2}",
      },
      {
        question: "What does set('aabbbc') return?",
        options: ["{'a', 'b', 'c'}", "['a', 'b', 'c']", "('a', 'b', 'c')", "None"],
        answer: "{'a', 'b', 'c'}",
      }
    ],
    advanced: [
      {
        question: "What is the time complexity of checking membership in a set?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: "O(1)",
      },
      {
        question: "Which one is a valid set comprehension syntax?",
        options: [
          "{x for x in range(5)}",
          "[x for x in range(5)]",
          "(x for x in range(5))",
          "<x for x in range(5)>",
        ],
        answer: "{x for x in range(5)}",
      },
      {
        question: "What is the output of frozenset('abc')?",
        options: [
          "frozenset(['abc'])",
          "frozenset({'a', 'b', 'c'})",
          "frozenset(('a', 'b', 'c'))",
          "{'a', 'b', 'c'}",
        ],
        answer: "frozenset({'a', 'b', 'c'})",
      },
      {
        question: "Which is a key feature of sets in terms of hashing?",
        options: [
          "Mutable and hashable",
          "Unordered and unhashable",
          "Unordered and hashable",
          "Mutable and unhashable",
        ],
        answer: "Unordered and hashable",
      },
      {
        question: "Which set operation modifies the original set?",
        options: ["union()", "intersection()", "difference()", "update()"],
        answer: "update()",
      },
      {
        question: "What happens when you call .remove(x) on a missing element?",
        options: [
          "Returns False",
          "Returns None",
          "Raises a KeyError",
          "Silently ignores",
        ],
        answer: "Raises a KeyError",
      },
      {
        question: "What is a set of sets called?",
        options: [
          "Nested sets",
          "Setset",
          "Invalid in Python",
          "Deep set",
        ],
        answer: "Invalid in Python",
      },
      {
        question: "What will be the output of len(set((1,2,3,2,1)))?",
        options: ["3", "4", "2", "5"],
        answer: "3",
      },
      {
        question: "Can a frozenset be used as a dictionary key?",
        options: ["Yes", "No", "Only inside sets", "Only inside lists"],
        answer: "Yes",
      },
      {
        question: "What is the type of {1, 2, 3}?",
        options: [
          "<class 'list'>",
          "<class 'tuple'>",
          "<class 'set'>",
          "<class 'dict'>",
        ],
        answer: "<class 'set'>",
      },
      {
        question: "What is the result of set() == set([])?",
        options: ["True", "False", "Error", "None"],
        answer: "True",
      },
      {
        question: "Can a set be passed to a function as an argument?",
        options: ["Yes", "No", "Only if sorted", "Only if converted to list"],
        answer: "Yes",
      },
      {
        question: "Which method returns a new set without modifying the original?",
        options: ["update()", "clear()", "copy()", "remove()"],
        answer: "copy()",
      },
      {
        question: "What will be output of set('112233')?",
        options: ["{'1', '2', '3'}", "{1,2,3}", "['1','2','3']", "['112233']"],
        answer: "{'1', '2', '3'}",
      },
      {
        question: "What does symmetric_difference() do?",
        options: [
          "Returns common elements",
          "Returns elements in either set but not both",
          "Updates original set",
          "Clears both sets",
        ],
        answer: "Returns elements in either set but not both",
      },
      {
        question: "Which method keeps only items present in both sets?",
        options: ["intersect()", "intersection_update()", "intersection()", "update()"],
        answer: "intersection_update()",
      },
      {
        question: "What will be the output of {1,2} == {2,1}?",
        options: ["True", "False", "Error", "None"],
        answer: "True",
      },
      {
        question: "Which method finds elements in set A but not in B?",
        options: ["difference()", "intersect()", "subtract()", "not_in()"],
        answer: "difference()",
      },
      {
        question: "What will {1,2,3}.issuperset({2,3}) return?",
        options: ["True", "False", "None", "Error"],
        answer: "True",
      },
      {
        question: "Which built-in Python function can convert a list to a set?",
        options: ["toSet()", "list2set()", "set()", "convert()"],
        answer: "set()",
      }
    ],
    expert: [],
  },
  modules_functions: {
    beginner: [
      {
        question: "What is a function in Python?",
        options: [
          "A piece of code that performs a specific task",
          "A variable",
          "An object",
          "A loop structure"
        ],
        answer: "A piece of code that performs a specific task"
      },
      {
        question: "How do you define a function in Python?",
        options: ["function()", "def function():", "define function():", "fun function()"],
        answer: "def function():"
      },
      {
        question: "What keyword is used to return a value from a function?",
        options: ["exit", "return", "send", "back"],
        answer: "return"
      },
      {
        question: "Which keyword is used to import a module in Python?",
        options: ["include", "require", "import", "using"],
        answer: "import"
      },
      {
        question: "What is the file extension of a Python module?",
        options: [".js", ".html", ".py", ".java"],
        answer: ".py"
      },
      {
        question: "Which of the following is a built-in Python module?",
        options: ["math", "network", "forms", "table"],
        answer: "math"
      },
      {
        question: "How do you call a function named `hello`?",
        options: ["call hello()", "hello()", "run hello", "execute hello"],
        answer: "hello()"
      },
      {
        question: "What does the `len()` function return?",
        options: ["Total characters", "List items", "Length of object", "Size of RAM"],
        answer: "Length of object"
      },
      {
        question: "How do you import only the `sqrt` function from the math module?",
        options: ["import math.sqrt", "from math import sqrt", "include sqrt from math", "load math.sqrt"],
        answer: "from math import sqrt"
      },
      {
        question: "Which of the following is not a valid function name?",
        options: ["my_function", "123function", "function_1", "_func"],
        answer: "123function"
      },
      {
        question: "What is the default return value of a function that doesn't explicitly return anything?",
        options: ["0", "None", "False", "''"],
        answer: "None"
      },
      {
        question: "What does `*args` allow a function to do?",
        options: ["Access global variables", "Accept any number of positional arguments", "Return multiple values", "Print arguments"],
        answer: "Accept any number of positional arguments"
      },
      {
        question: "Which statement is used to stop a function from continuing?",
        options: ["stop", "exit", "break", "return"],
        answer: "return"
      },
      {
        question: "How do you import all functions from a module?",
        options: ["from module import all", "import * from module", "from module import *", "include all"],
        answer: "from module import *"
      },
      {
        question: "Which module provides random number generation?",
        options: ["math", "os", "random", "time"],
        answer: "random"
      },
      {
        question: "What does the `type()` function do?",
        options: ["Checks length", "Checks data type", "Checks size", "Checks value"],
        answer: "Checks data type"
      },
      {
        question: "What is a docstring in Python?",
        options: ["A special comment", "Documentation string", "Loop", "Function name"],
        answer: "Documentation string"
      },
      {
        question: "What is the purpose of the `help()` function?",
        options: ["Get syntax help", "Exit Python", "Import modules", "List variables"],
        answer: "Get syntax help"
      },
      {
        question: "Which function prints output to the console?",
        options: ["write()", "echo()", "log()", "print()"],
        answer: "print()"
      },
      {
        question: "What is the main purpose of using functions?",
        options: ["To write long code", "To organize code and reuse logic", "To slow down the program", "To create errors"],
        answer: "To organize code and reuse logic"
      }
    ],
    intermediate: [
      {
        question: "Which keyword is used to define an anonymous function in Python?",
        options: ["def", "func", "lambda", "anonymous"],
        answer: "lambda"
      },
      {
        question: "What is the difference between `*args` and `**kwargs`?",
        options: [
          "`*args` is for positional arguments, `**kwargs` is for keyword arguments",
          "`*args` is for strings, `**kwargs` is for numbers",
          "`*args` is a dictionary, `**kwargs` is a list",
          "They are the same"
        ],
        answer: "`*args` is for positional arguments, `**kwargs` is for keyword arguments"
      },
      {
        question: "Which of the following is used to import a module with an alias?",
        options: ["import math as m", "alias math as m", "load math as m", "from math import alias m"],
        answer: "import math as m"
      },
      {
        question: "What does the `dir()` function do?",
        options: ["Lists variables", "Lists attributes of an object", "Deletes a module", "Creates a module"],
        answer: "Lists attributes of an object"
      },
      {
        question: "What is the output of `type(lambda x: x)`?",
        options: ["<class 'function'>", "<class 'lambda'>", "<class 'method'>", "<class 'object'>"],
        answer: "<class 'function'>"
      },
      {
        question: "Which module is used for working with dates and times?",
        options: ["calendar", "datetime", "time", "clock"],
        answer: "datetime"
      },
      {
        question: "How do you reload a previously imported module?",
        options: ["importlib.reload()", "module.reload()", "reload(module)", "module.reimport()"],
        answer: "importlib.reload()"
      },
      {
        question: "What is the result of `print(__name__)` in a module run directly?",
        options: ["__main__", "__file__", "__module__", "__name__"],
        answer: "__main__"
      },
      {
        question: "What is a pure function?",
        options: [
          "A function that modifies external data",
          "A function that depends on global state",
          "A function that has no side effects and always returns same output for same input",
          "A function that calls another function"
        ],
        answer: "A function that has no side effects and always returns same output for same input"
      },
      {
        question: "Which function can convert a string to an integer?",
        options: ["toInt()", "int()", "parseInt()", "strToInt()"],
        answer: "int()"
      },
      {
        question: "What is the default value of a function parameter called?",
        options: ["initial value", "preset", "default argument", "static value"],
        answer: "default argument"
      },
      {
        question: "Which module helps in performing file system operations?",
        options: ["os", "math", "sys", "io"],
        answer: "os"
      },
      {
        question: "How can a function return multiple values?",
        options: ["return list", "return tuple", "return string", "return float"],
        answer: "return tuple"
      },
      {
        question: "What does the `globals()` function return?",
        options: ["List of global variables", "Dictionary of current global symbol table", "Modules used", "None"],
        answer: "Dictionary of current global symbol table"
      },
      {
        question: "Which module is used to work with command-line arguments?",
        options: ["argparse", "os", "sys", "input"],
        answer: "sys"
      },
      {
        question: "Which statement is used to check if a module is the entry point?",
        options: [
          "if __name__ == '__entry__'",
          "if __file__ == '__main__'",
          "if __name__ == '__main__'",
          "if __main__ == '__name__'"
        ],
        answer: "if __name__ == '__main__'"
      },
      {
        question: "What will `math.floor(3.9)` return?",
        options: ["4", "3.9", "3", "Error"],
        answer: "3"
      },
      {
        question: "What does the `inspect` module do?",
        options: [
          "Inspects file size",
          "Analyzes syntax",
          "Retrieves information about live objects",
          "Scans memory"
        ],
        answer: "Retrieves information about live objects"
      },
      {
        question: "Which function allows delayed execution of a function?",
        options: ["sleep()", "pause()", "wait()", "timer()"],
        answer: "sleep()"
      },
      {
        question: "How do you import multiple functions from a module?",
        options: [
          "from module import a, b",
          "import a, b from module",
          "import module(a, b)",
          "module.import(a, b)"
        ],
        answer: "from module import a, b"
      }
    ],
    advanced: [
      {
        question: "What is memoization in Python functions?",
        options: [
          "Storing results of expensive function calls",
          "Writing notes inside functions",
          "Debugging functions",
          "Loop optimization"
        ],
        answer: "Storing results of expensive function calls"
      },
      {
        question: "What does `functools.wraps()` do in decorators?",
        options: [
          "Wraps the decorator into the function",
          "Preserves metadata of original function",
          "Wraps function in a loop",
          "Repeats function call"
        ],
        answer: "Preserves metadata of original function"
      },
      {
        question: "What is a closure in Python?",
        options: [
          "A function inside a class",
          "A function object that remembers variables from enclosing scopes",
          "A function with no return",
          "A lambda function"
        ],
        answer: "A function object that remembers variables from enclosing scopes"
      },
      {
        question: "Which module is used for creating virtual environments?",
        options: ["venv", "env", "os", "virtualenvs"],
        answer: "venv"
      },
      {
        question: "What is a recursive function?",
        options: [
          "A function that calls itself",
          "A loop function",
          "A decorated function",
          "A nested function"
        ],
        answer: "A function that calls itself"
      },
      {
        question: "What is the purpose of the `__all__` variable in a module?",
        options: [
          "Defines public API when using `from module import *`",
          "Lists all functions",
          "Stores all variables",
          "Imports all modules"
        ],
        answer: "Defines public API when using `from module import *`"
      },
      {
        question: "What is a decorator in Python?",
        options: [
          "A function that modifies another function’s behavior",
          "A variable type",
          "A class method",
          "A loop construct"
        ],
        answer: "A function that modifies another function’s behavior"
      },
      {
        question: "What does the `@staticmethod` decorator do?",
        options: [
          "Creates a global method",
          "Marks a method as independent of instance",
          "Creates a class method",
          "Enforces return type"
        ],
        answer: "Marks a method as independent of instance"
      },
      {
        question: "Which module can be used for dynamically importing other modules?",
        options: ["importlib", "sys", "os", "dynamic"],
        answer: "importlib"
      },
      {
        question: "What will `locals()` return when called inside a function?",
        options: [
          "Global variables",
          "Local symbol table as a dictionary",
          "All imported modules",
          "None"
        ],
        answer: "Local symbol table as a dictionary"
      },
      {
        question: "How do you define a function with optional parameters?",
        options: [
          "Use `def func(param?)`",
          "Use default values like `def func(param='default')`",
          "Use `func optional param`",
          "You cannot define optional params"
        ],
        answer: "Use default values like `def func(param='default')`"
      },
      {
        question: "What is a generator function?",
        options: [
          "A function that returns a list",
          "A function that yields values using `yield`",
          "A decorator function",
          "An external module"
        ],
        answer: "A function that yields values using `yield`"
      },
      {
        question: "How do you test if a function is callable?",
        options: ["isCallable()", "type()", "callable()", "isFunction()"],
        answer: "callable()"
      },
      {
        question: "What is the difference between `global` and `nonlocal` keywords?",
        options: [
          "`global` accesses module-level scope, `nonlocal` accesses outer enclosing function scope",
          "They mean the same",
          "`nonlocal` is used for global variables",
          "`global` is for constants"
        ],
        answer: "`global` accesses module-level scope, `nonlocal` accesses outer enclosing function scope"
      },
      {
        question: "What is the use of `inspect.signature()`?",
        options: [
          "To get a function’s parameter signature",
          "To sign a function securely",
          "To create function headers",
          "To return return types"
        ],
        answer: "To get a function’s parameter signature"
      },
      {
        question: "Which module allows serialization of Python objects?",
        options: ["pickle", "marshal", "serialize", "json"],
        answer: "pickle"
      },
      {
        question: "How can you define a function with variable keyword arguments?",
        options: ["**kwargs", "*args", "args[]", "varargs"],
        answer: "**kwargs"
      },
      {
        question: "Which of these modules is used for high-performance function caching?",
        options: ["functools", "collections", "os", "math"],
        answer: "functools"
      },
      {
        question: "What will the `yield` keyword do in a function?",
        options: [
          "Pause the function and return a generator",
          "Break the loop",
          "Return immediately",
          "Raise an error"
        ],
        answer: "Pause the function and return a generator"
      },
      {
        question: "What is the purpose of `__init__.py` in a module directory?",
        options: [
          "Marks a directory as a Python package",
          "Creates a main class",
          "Initializes variables",
          "Stores all imports"
        ],
        answer: "Marks a directory as a Python package"
      }
    ],
    expert: [],
  }, 
  exception_handling: {
    beginner: [
      {
        question: "What is an exception in Python?",
        options: ["A syntax error", "A logical error", "An error that occurs during execution", "A print statement"],
        answer: "An error that occurs during execution",
      },
      {
        question: "Which keyword is used to handle exceptions in Python?",
        options: ["error", "try", "catch", "except"],
        answer: "except",
      },
      {
        question: "What will happen if an exception is not handled?",
        options: ["The program continues", "It prints a warning", "The program crashes", "It retries the operation"],
        answer: "The program crashes",
      },
      {
        question: "Which keyword is used to define a block of code to test for errors?",
        options: ["try", "test", "handle", "raise"],
        answer: "try",
      },
      {
        question: "Which keyword is used to raise a custom exception?",
        options: ["except", "raise", "throw", "error"],
        answer: "raise",
      },
      {
        question: "What does `finally` do in exception handling?",
        options: ["It handles all exceptions", "It runs only if there is an error", "It always runs, error or not", "It skips the error"],
        answer: "It always runs, error or not",
      },
      {
        question: "Which error is raised when dividing by zero?",
        options: ["TypeError", "SyntaxError", "ZeroDivisionError", "ValueError"],
        answer: "ZeroDivisionError",
      },
      {
        question: "Which block must always come after a try block?",
        options: ["else", "finally", "except", "raise"],
        answer: "except",
      },
      {
        question: "What does the `else` block do in try-except-else?",
        options: ["Runs if there's an exception", "Runs if no exception occurs", "Runs always", "Skips the try block"],
        answer: "Runs if no exception occurs",
      },
      {
        question: "What type of error is `NameError`?",
        options: ["Error from undefined variable", "Syntax issue", "Loop error", "File error"],
        answer: "Error from undefined variable",
      },
      {
        question: "Which statement is optional in exception handling?",
        options: ["try", "except", "finally", "all are optional"],
        answer: "finally",
      },
      {
        question: "Can you catch multiple exception types?",
        options: ["Yes, using multiple except blocks", "No", "Only two", "Only in Python 3+"],
        answer: "Yes, using multiple except blocks",
      },
      {
        question: "What is printed if no error occurs in a try-except block?",
        options: ["Error occurred", "Only try block runs", "except block runs", "Program stops"],
        answer: "Only try block runs",
      },
      {
        question: "Which keyword is used to manually raise an exception?",
        options: ["raise", "throw", "except", "assert"],
        answer: "raise",
      },
      {
        question: "What does `assert` do?",
        options: ["Raises AssertionError if condition is false", "Skips the test", "Handles error", "None"],
        answer: "Raises AssertionError if condition is false",
      },
      {
        question: "Which of the following is NOT a built-in exception?",
        options: ["ValueError", "IOError", "KeyException", "IndexError"],
        answer: "KeyException",
      },
      {
        question: "What is the output of `int('abc')`?",
        options: ["123", "TypeError", "ValueError", "SyntaxError"],
        answer: "ValueError",
      },
      {
        question: "What does the `try-except` block prevent?",
        options: ["Looping", "Program crash", "Indentation errors", "Import errors"],
        answer: "Program crash",
      },
      {
        question: "What is the base class for all built-in exceptions?",
        options: ["Exception", "BaseError", "Error", "SystemError"],
        answer: "Exception",
      },
      {
        question: "Which statement allows clean-up actions regardless of error?",
        options: ["except", "clean", "finally", "else"],
        answer: "finally",
      }
    ],
    intermediate: [
      {
        question: "What does the following code do?\ntry:\n  1 / 0\nexcept ZeroDivisionError:\n  print('Error')",
        options: ["Raises an exception", "Prints 'Error'", "Crashes the program", "Ignores the exception"],
        answer: "Prints 'Error'",
      },
      {
        question: "How do you catch multiple exceptions in a single block?",
        options: [
          "Using multiple try blocks",
          "Using if-else",
          "Using a tuple in except: except (TypeError, ValueError):",
          "Using nested functions"
        ],
        answer: "Using a tuple in except: except (TypeError, ValueError):",
      },
      {
        question: "Which exception is raised when accessing a non-existent dictionary key?",
        options: ["KeyError", "IndexError", "ValueError", "AttributeError"],
        answer: "KeyError",
      },
      {
        question: "What is the output of `try:\n  print(1/0)\nexcept:\n  print('Error')`?",
        options: ["Error", "1", "Zero", "Program crashes"],
        answer: "Error",
      },
      {
        question: "What happens if no `except` matches the raised exception?",
        options: ["Code continues", "Exception is ignored", "Program crashes", "None"],
        answer: "Program crashes",
      },
      {
        question: "What does the `finally` block typically contain?",
        options: ["Raising new exceptions", "Logging and clean-up code", "Input statements", "Looping constructs"],
        answer: "Logging and clean-up code",
      },
      {
        question: "Can you nest try-except blocks?",
        options: ["No", "Yes", "Only in functions", "Only in Python 3+"],
        answer: "Yes",
      },
      {
        question: "Which statement is true about `try-except-else`?",
        options: [
          "The else block always runs",
          "Else block runs only if no exception occurs",
          "Else runs only if finally block runs",
          "Else handles the exception"
        ],
        answer: "Else block runs only if no exception occurs",
      },
      {
        question: "What kind of exception is `AttributeError`?",
        options: [
          "Accessing an undefined variable",
          "Calling a method or property that doesn't exist on an object",
          "Passing wrong arguments",
          "Syntax error"
        ],
        answer: "Calling a method or property that doesn't exist on an object",
      },
      {
        question: "How do you catch all exceptions regardless of type?",
        options: ["except All:", "except:", "catch Exception:", "except BaseError:"],
        answer: "except:",
      },
      {
        question: "Which module contains predefined exceptions and error handling utilities?",
        options: ["exceptions", "errors", "traceback", "warnings"],
        answer: "traceback",
      },
      {
        question: "Which method from the `traceback` module prints the full stack trace?",
        options: ["format()", "print_exc()", "debug()", "stack()"],
        answer: "print_exc()",
      },
      {
        question: "What does this code raise? `int('1.5')`",
        options: ["SyntaxError", "TypeError", "ValueError", "No Error"],
        answer: "ValueError",
      },
      {
        question: "Can the `else` block come before `except`?",
        options: ["Yes", "No", "Only with finally", "Only in Python 2"],
        answer: "No",
      },
      {
        question: "Which error occurs when you access a list element out of range?",
        options: ["KeyError", "ValueError", "IndexError", "AttributeError"],
        answer: "IndexError",
      },
      {
        question: "Which of these is best for debugging after an exception?",
        options: ["assert", "warnings.warn", "traceback.print_exc()", "print('Error')"],
        answer: "traceback.print_exc()",
      },
      {
        question: "Can `finally` block modify the return value of a function?",
        options: ["No", "Yes", "Only in Python 2", "Only inside try"],
        answer: "Yes",
      },
      {
        question: "What is the behavior of `try-finally` if no exception occurs?",
        options: [
          "Only try block executes",
          "Only finally block executes",
          "Both try and finally blocks execute",
          "None are executed"
        ],
        answer: "Both try and finally blocks execute",
      },
      {
        question: "Which error is raised for invalid type operations (like '2' + 5)?",
        options: ["TypeError", "ValueError", "KeyError", "IndexError"],
        answer: "TypeError",
      },
      {
        question: "What happens when `return` is used in try and finally?",
        options: [
          "Return in finally overrides try",
          "Return in try overrides finally",
          "Both return values are combined",
          "It raises SyntaxError"
        ],
        answer: "Return in finally overrides try",
      }
    ],
    advanced: [
      {
        question: "What is the correct way to manually raise an exception?",
        options: ["raise Error()", "throw Exception()", "raise Exception()", "raise new Exception()"],
        answer: "raise Exception()",
      },
      {
        question: "Which built-in function can be used to check if an object is an exception?",
        options: ["isinstance(obj, BaseException)", "issubclass(obj, Error)", "type(obj) == Exception", "check(obj)"],
        answer: "isinstance(obj, BaseException)",
      },
      {
        question: "What will `try:\n raise KeyboardInterrupt\nfinally:\n print('Cleanup')` output?",
        options: ["Cleanup", "KeyboardInterrupt", "Nothing", "SyntaxError"],
        answer: "Cleanup",
      },
      {
        question: "Which base class is inherited by all built-in exceptions?",
        options: ["Error", "Exception", "BaseException", "Throwable"],
        answer: "BaseException",
      },
      {
        question: "What is the difference between `Exception` and `BaseException`?",
        options: [
          "No difference",
          "`BaseException` is for system-exiting exceptions",
          "`Exception` handles all exceptions",
          "`BaseException` can't be caught"
        ],
        answer: "`BaseException` is for system-exiting exceptions",
      },
      {
        question: "Which exception is raised when the input is interrupted (e.g., Ctrl+C)?",
        options: ["KeyboardInterrupt", "EOFError", "IOError", "RuntimeError"],
        answer: "KeyboardInterrupt",
      },
      {
        question: "How do you define a custom exception?",
        options: [
          "class MyError extends Exception",
          "raise MyError()",
          "class MyError(Exception): pass",
          "def MyError(): raise Exception"
        ],
        answer: "class MyError(Exception): pass",
      },
      {
        question: "Which of the following exceptions is not built-in?",
        options: ["TypeError", "ArithmeticError", "InputError", "StopIteration"],
        answer: "InputError",
      },
      {
        question: "What happens if `raise` is used without an active exception?",
        options: ["Nothing", "Raises RuntimeError", "Silently passes", "Ignores the raise"],
        answer: "Raises RuntimeError",
      },
      {
        question: "What is `assert` used for?",
        options: ["Conditionally stop program execution", "Input validation", "Exception catching", "Loop control"],
        answer: "Conditionally stop program execution",
      },
      {
        question: "Which statement correctly re-raises the current exception?",
        options: ["raise", "throw", "raise Error()", "rethrow"],
        answer: "raise",
      },
      {
        question: "What is the output?\ntry:\n  assert 2 == 3\nexcept AssertionError:\n  print('Failed')",
        options: ["Nothing", "Failed", "Error", "2 != 3"],
        answer: "Failed",
      },
      {
        question: "Which keyword should be used to suppress exceptions temporarily?",
        options: ["try", "finally", "pass", "contextlib.suppress"],
        answer: "contextlib.suppress",
      },
      {
        question: "What is the primary purpose of `contextlib.suppress`?",
        options: [
          "Ignore specific exceptions",
          "Log exceptions",
          "Raise exceptions",
          "Convert warnings to exceptions"
        ],
        answer: "Ignore specific exceptions",
      },
      {
        question: "What does `sys.exc_info()` return?",
        options: [
          "A string message of the error",
          "A tuple with exception type, value, traceback",
          "Error code",
          "Boolean result"
        ],
        answer: "A tuple with exception type, value, traceback",
      },
      {
        question: "What is the result of raising `SystemExit`?",
        options: ["Terminates program", "Logs warning", "Raises error", "Restarts program"],
        answer: "Terminates program",
      },
      {
        question: "Which of these exceptions are derived from `ArithmeticError`?",
        options: ["ZeroDivisionError", "FloatingPointError", "OverflowError", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Can `try-except-finally` blocks be used inside a function definition?",
        options: ["Yes", "No", "Only in classes", "Only with return statements"],
        answer: "Yes",
      },
      {
        question: "How do you print the stack trace of an exception?",
        options: [
          "traceback.print_exc()",
          "exception.stacktrace()",
          "sys.show_trace()",
          "error.print()"
        ],
        answer: "traceback.print_exc()",
      },
      {
        question: "What does `except Exception as e:` allow you to do?",
        options: [
          "Ignore exception",
          "Re-raise exception",
          "Assign the caught exception to variable `e`",
          "Terminate loop"
        ],
        answer: "Assign the caught exception to variable `e`",
      }
    ],
    expert: [],
  },
  file_handling: {
    beginner: [
      {
        question: "What is the correct way to open a file named 'data.txt' for reading in Python?",
        options: [
          'open("data.txt", "r")',
          'open("data.txt", "w")',
          'read("data.txt")',
          'file("data.txt", "r")'
        ],
        answer: 'open("data.txt", "r")'
      },
      {
        question: "What mode opens a file for writing, creating a new file if it doesn't exist?",
        options: ["r", "w", "a", "r+"],
        answer: "w"
      },
      {
        question: "Which method is used to read all lines of a file into a list?",
        options: ["read()", "readlines()", "readline()", "readall()"],
        answer: "readlines()"
      },
      {
        question: "How do you properly close a file in Python?",
        options: ["file.close()", "close(file)", "file.end()", "end(file)"],
        answer: "file.close()"
      },
      {
        question: "What is the safest way to open and automatically close a file in Python?",
        options: [
          "Try-except block",
          "Using the with statement",
          "Using the finally clause",
          "Creating a custom function"
        ],
        answer: "Using the with statement"
      },
      {
        question: "What happens if you open a file that doesn't exist using mode 'r'?",
        options: [
          "The file is created",
          "Nothing happens",
          "A FileNotFoundError is raised",
          "Python returns None"
        ],
        answer: "A FileNotFoundError is raised"
      },
      {
        question: "Which method reads a single line from a file?",
        options: ["read()", "readline()", "readlines()", "next()"],
        answer: "readline()"
      },
      {
        question: "What does the read(5) method do?",
        options: [
          "Reads 5 lines from the file",
          "Reads 5 bytes from the file",
          "Reads 5 characters from the file",
          "Reads until line 5 in the file"
        ],
        answer: "Reads 5 characters from the file"
      },
      {
        question: "How do you write a string to a file in Python?",
        options: [
          "file.write(string)",
          "file.put(string)",
          "file.writeline(string)",
          "write(file, string)"
        ],
        answer: "file.write(string)"
      },
      {
        question: "Which mode allows you to both read from and write to a file?",
        options: ["r", "w", "rw", "r+"],
        answer: "r+"
      },
      {
        question: "What mode should you use to append data to the end of a file?",
        options: ["a", "w", "r", "w+"],
        answer: "a"
      },
      {
        question: "What happens when you open an existing file with mode 'w'?",
        options: [
          "The file content remains unchanged",
          "The file content is overwritten",
          "The content is appended to the end",
          "A error is raised"
        ],
        answer: "The file content is overwritten"
      },
      {
        question: "What is the default encoding when opening a text file in Python?",
        options: ["UTF-8", "ASCII", "ISO-8859-1", "Platform dependent"],
        answer: "Platform dependent"
      },
      {
        question: "Which module provides functions for working with file paths?",
        options: ["filepath", "pathlib", "os.path", "dirpath"],
        answer: "os.path"
      },
      {
        question: "What does the open() function return?",
        options: [
          "A string containing the file content",
          "A file object",
          "A boolean indicating success",
          "A list of lines"
        ],
        answer: "A file object"
      },
      {
        question: "If you open a file with mode 'a', where will the file pointer be positioned?",
        options: [
          "At the beginning of the file",
          "At the end of the file",
          "At the second line of the file",
          "The file pointer doesn't exist in append mode"
        ],
        answer: "At the end of the file"
      },
      {
        question: "What method would you use to check if a file exists before opening it?",
        options: [
          "os.path.exists()",
          "file.exists()",
          "os.exists()",
          "Path.exists()"
        ],
        answer: "os.path.exists()"
      },
      {
        question: "How do you read the first 10 characters from a file?",
        options: [
          "file.read(10)",
          "file.readline(10)",
          "file.readchars(10)",
          "file.readfirst(10)"
        ],
        answer: "file.read(10)"
      },
      {
        question: "What happens when you reach the end of a file while reading?",
        options: [
          "An error is raised",
          "The file pointer wraps around to the beginning",
          "An empty string is returned",
          "The file is automatically closed"
        ],
        answer: "An empty string is returned"
      },
      {
        question: "Which method moves the file pointer to a specific position?",
        options: ["file.move()", "file.goto()", "file.seek()", "file.position()"],
        answer: "file.seek()"
      }
    ],
    intermediate: [
      {
        question: "What does the 'a+' mode do when opening a file?",
        options: [
          "Opens for reading and writing, creates file if it doesn't exist",
          "Opens for appending, creates file if it doesn't exist",
          "Opens for reading and appending, creates file if it doesn't exist",
          "Opens for reading and writing, but doesn't create the file"
        ],
        answer: "Opens for reading and appending, creates file if it doesn't exist"
      },
      {
        question: "What's the difference between 'r+' and 'w+' modes?",
        options: [
          "No difference",
          "r+ requires the file to exist, w+ truncates or creates the file",
          "r+ is read-only, w+ is write-only",
          "r+ allows only reading, w+ allows only writing"
        ],
        answer: "r+ requires the file to exist, w+ truncates or creates the file"
      },
      {
        question: "How do you open a file in binary mode?",
        options: [
          'open("file.bin", "binary")',
          'open("file.bin", "bin")',
          'open("file.bin", "rb")',
          'open("file.bin", mode=binary)'
        ],
        answer: 'open("file.bin", "rb")'
      },
      {
        question: "What is the purpose of the tell() method on a file object?",
        options: [
          "It tells you if the file exists",
          "It tells you the current position of the file pointer",
          "It tells you the size of the file",
          "It tells you the encoding of the file"
        ],
        answer: "It tells you the current position of the file pointer"
      },
      {
        question: "What happens when you call seek(0) on a file object?",
        options: [
          "It closes the file",
          "It moves the file pointer to the beginning of the file",
          "It deletes the first character",
          "It returns the first line"
        ],
        answer: "It moves the file pointer to the beginning of the file"
      },
      {
        question: "What is the difference between read() and readlines()?",
        options: [
          "read() returns a string, readlines() returns a list of lines",
          "read() reads one character, readlines() reads all characters",
          "read() is for text files, readlines() is for binary files",
          "There is no difference"
        ],
        answer: "read() returns a string, readlines() returns a list of lines"
      },
      {
        question: "What is the correct way to iterate over each line in a file?",
        options: [
          "for line in file.readlines(): ...",
          "for line in file: ...",
          "for line in file.lines(): ...",
          "Both A and B are correct"
        ],
        answer: "Both A and B are correct"
      },
      {
        question: "Which method flushes the internal buffer to ensure all data is written to disk?",
        options: ["file.save()", "file.flush()", "file.sync()", "file.update()"],
        answer: "file.flush()"
      },
      {
        question: "What module would you use to read and write CSV files?",
        options: ["csvlib", "csv", "pandas", "excel"],
        answer: "csv"
      },
      {
        question: "How do you open a file with a custom encoding?",
        options: [
          'open("file.txt", encoding="utf-8")',
          'open("file.txt", "r", "utf-8")',
          'open("file.txt", encode="utf-8")',
          'open("file.txt").encode("utf-8")'
        ],
        answer: 'open("file.txt", encoding="utf-8")'
      },
      {
        question: "What is the purpose of the os.path.join() function?",
        options: [
          "To merge two text files",
          "To concatenate file paths using the correct separator for the operating system",
          "To join file extensions to filenames",
          "To combine file content"
        ],
        answer: "To concatenate file paths using the correct separator for the operating system"
      },
      {
        question: "What does the truncate() method do to a file?",
        options: [
          "Deletes the file",
          "Resizes the file to the specified size",
          "Truncates the file name",
          "Moves the file pointer to the end"
        ],
        answer: "Resizes the file to the specified size"
      },
      {
        question: "Which method can be used to check if a file object is closed?",
        options: [
          "file.is_closed()",
          "file.closed",
          "file.status()",
          "file.check_closed()"
        ],
        answer: "file.closed"
      },
      {
        question: "What is the difference between os.path.abspath() and os.path.realpath()?",
        options: [
          "No difference",
          "abspath() returns normalized path, realpath() also resolves symlinks",
          "abspath() is for Windows, realpath() is for Unix",
          "abspath() works on files, realpath() works on directories"
        ],
        answer: "abspath() returns normalized path, realpath() also resolves symlinks"
      },
      {
        question: "How would you rename a file in Python?",
        options: [
          "file.rename(new_name)",
          "os.rename(old_name, new_name)",
          "path.rename(old_name, new_name)",
          "rename(old_name, new_name)"
        ],
        answer: "os.rename(old_name, new_name)"
      },
      {
        question: "What is a file-like object in Python?",
        options: [
          "Any object with a filename attribute",
          "Any object that implements methods like read() and write()",
          "Only instances of the File class",
          "Any object with a path attribute"
        ],
        answer: "Any object that implements methods like read() and write()"
      },
      {
        question: "What is the purpose of the 'newline' parameter when opening a file?",
        options: [
          "To specify the line ending character to use",
          "To set the number of new lines to insert",
          "To determine if the file should start with a new line",
          "To control how new line characters are translated"
        ],
        answer: "To control how new line characters are translated"
      },
      {
        question: "How do you get the size of a file in Python?",
        options: [
          "file.size()",
          "os.file.size(filename)",
          "os.stat(filename).st_size",
          "os.getsize(filename)"
        ],
        answer: "os.stat(filename).st_size"
      },
      {
        question: "What is the purpose of the 'buffering' parameter when opening a file?",
        options: [
          "To control memory usage",
          "To set the buffer size for read/write operations",
          "To enable or disable system buffering",
          "To determine if data should be buffered before writing"
        ],
        answer: "To set the buffer size for read/write operations"
      },
      {
        question: "What module would you use to work with temporary files that are automatically deleted?",
        options: ["os", "io", "tempfile", "autofile"],
        answer: "tempfile"
      }
    ],
    advanced: [
      {
        question: "What is the difference between binary mode and text mode when opening files?",
        options: [
          "Binary mode reads bytes, text mode reads strings",
          "Binary mode is for images, text mode is for text files",
          "Binary mode handles encoding automatically",
          "Text mode is faster than binary mode"
        ],
        answer: "Binary mode reads bytes, text mode reads strings"
      },
      {
        question: "What is a file object in Python?",
        options: [
          "A built-in data type",
          "An iterator",
          "A context manager",
          "All of the above"
        ],
        answer: "All of the above"
      },
      {
        question: "What is the purpose of the 'fileinput' module?",
        options: [
          "To handle file input/output operations",
          "To iterate over multiple input streams transparently",
          "To create custom file objects",
          "To simulate file input for testing"
        ],
        answer: "To iterate over multiple input streams transparently"
      },
      {
        question: "What is memory-mapped file I/O?",
        options: [
          "Loading the entire file into memory",
          "Mapping file content directly to memory for efficient access",
          "Creating a memory-based virtual file",
          "Storing file operations in memory before executing them"
        ],
        answer: "Mapping file content directly to memory for efficient access"
      },
      {
        question: "Which module provides memory-mapped file objects?",
        options: ["io", "os", "mmap", "memmap"],
        answer: "mmap"
      },
      {
        question: "What is the difference between io.StringIO and io.BytesIO?",
        options: [
          "StringIO handles text, BytesIO handles binary data",
          "StringIO is faster, BytesIO is more memory efficient",
          "StringIO is for input, BytesIO is for output",
          "StringIO uses less memory, BytesIO is faster"
        ],
        answer: "StringIO handles text, BytesIO handles binary data"
      },
      {
        question: "What is the purpose of the 'io' module?",
        options: [
          "To handle basic input/output operations",
          "To provide a consistent interface for various types of I/O",
          "To optimize I/O performance",
          "To implement low-level I/O routines"
        ],
        answer: "To provide a consistent interface for various types of I/O"
      },
      {
        question: "What is a file descriptor in the context of file handling?",
        options: [
          "A small integer representing an open file in the OS",
          "A detailed description of a file's attributes",
          "A Python object that describes a file",
          "A unique identifier for each file in the filesystem"
        ],
        answer: "A small integer representing an open file in the OS"
      },
      {
        question: "What does the 'os.fdopen()' function do?",
        options: [
          "Opens a file using its name",
          "Creates a Python file object from a file descriptor",
          "Opens a file in descriptor mode",
          "Returns a file's descriptor number"
        ],
        answer: "Creates a Python file object from a file descriptor"
      },
      {
        question: "What is the advantage of using pathlib over os.path?",
        options: [
          "It's faster",
          "It provides an object-oriented interface to file paths",
          "It uses less memory",
          "It's more secure"
        ],
        answer: "It provides an object-oriented interface to file paths"
      },
      {
        question: "What is the proper way to handle a file that might not exist?",
        options: [
          "Always create the file first",
          "Use try-except to catch FileNotFoundError",
          "Check if the file exists before opening it",
          "Both B and C are acceptable approaches"
        ],
        answer: "Both B and C are acceptable approaches"
      },
      {
        question: "What is the recommended way to read large files efficiently?",
        options: [
          "Use file.read() to load it all at once",
          "Read the file line by line in a loop",
          "Use memory mapping for very large files",
          "Both B and C depending on the file size"
        ],
        answer: "Both B and C depending on the file size"
      },
      {
        question: "What happens to file handles if an exception occurs during file operations?",
        options: [
          "They are automatically closed by Python's garbage collector",
          "They remain open until explicitly closed",
          "They are closed if using a with statement, otherwise remain open",
          "They are always automatically closed when an exception occurs"
        ],
        answer: "They are closed if using a with statement, otherwise remain open"
      },
      {
        question: "What is the purpose of the 'fcntl' module in Python?",
        options: [
          "For file compression and decompression",
          "For file comparison and synchronization",
          "For file control and locking operations on Unix",
          "For file conversion between text and binary formats"
        ],
        answer: "For file control and locking operations on Unix"
      },
      {
        question: "What are file modes for in Linux/Unix file permissions?",
        options: [
          "They specify if a file is read, write, or executable",
          "They indicate if a file is text or binary",
          "They control access permissions for owner, group, and others",
          "They manage the operation mode of the file system"
        ],
        answer: "They control access permissions for owner, group, and others"
      },
      {
        question: "How can you implement a simple file locking mechanism in Python?",
        options: [
          "Using the threading module",
          "Using the fcntl module on Unix or msvcrt on Windows",
          "Using the with statement",
          "Using the lock() method on file objects"
        ],
        answer: "Using the fcntl module on Unix or msvcrt on Windows"
      },
      {
        question: "What is the purpose of the 'shelve' module?",
        options: [
          "To organize files on disk",
          "To compress files for archiving",
          "To store Python objects in a file-based database",
          "To share files between processes"
        ],
        answer: "To store Python objects in a file-based database"
      },
      {
        question: "How would you implement a custom file-like object in Python?",
        options: [
          "Subclass the File class",
          "Implement read, write, and other methods according to the file protocol",
          "Use the io.IOBase class as a base class",
          "Both B and C are correct approaches"
        ],
        answer: "Both B and C are correct approaches"
      },
      {
        question: "What is the difference between opening a file in 'r+b' mode and 'w+b' mode?",
        options: [
          "r+b preserves content, w+b truncates the file",
          "r+b is for reading, w+b is for writing",
          "r+b requires the file to exist, w+b creates it if it doesn't",
          "Both A and C"
        ],
        answer: "Both A and C"
      },
      {
        question: "What is the purpose of the 'filecmp' module?",
        options: [
          "To compare files and directories",
          "To compress files",
          "To encrypt file contents",
          "To share files between processes"
        ],
        answer: "To compare files and directories"
      }
    ],
    expert: []
  },
  oop_concepts: {
    beginner: [
      {
        question: "How do you define a class in Python?",
        options: [
          "class MyClass {}",
          "class MyClass:",
          "def class MyClass:",
          "create MyClass:",
        ],
        answer: "class MyClass:",
      },
      {
        question: "What is the purpose of self in Python classes?",
        options: [
          "It refers to the current instance of the class",
          "It's a keyword for private methods",
          "It's needed to create a new instance",
          "It's a placeholder for the class name",
        ],
        answer: "It refers to the current instance of the class",
      },
      {
        question: "What is the __init__ method used for in a Python class?",
        options: [
          "To initialize class variables",
          "To create an instance of the class",
          "To define the constructor of the class",
          "All of the above",
        ],
        answer: "To define the constructor of the class",
      },
      {
        question: "How do you create an instance of a class named MyClass?",
        options: [
          "instance = MyClass",
          "instance = new MyClass()",
          "instance = MyClass()",
          "MyClass.create()",
        ],
        answer: "instance = MyClass()",
      },
      {
        question: "How do you access an instance variable in a method?",
        options: [
          "self.variable",
          "this.variable",
          "@variable",
          "instance.variable",
        ],
        answer: "self.variable",
      },
      {
        question: "What is an instance attribute in Python?",
        options: [
          "An attribute defined inside a class but outside any method",
          "An attribute defined inside the __init__ method",
          "An attribute that belongs to an object of a class",
          "An attribute that is shared among all instances of a class",
        ],
        answer: "An attribute that belongs to an object of a class",
      },
      {
        question: "What is a class attribute in Python?",
        options: [
          "An attribute defined inside a class but outside any method",
          "An attribute defined inside the __init__ method",
          "An attribute that belongs to an object of a class",
          "An attribute with the @classattribute decorator",
        ],
        answer: "An attribute defined inside a class but outside any method",
      },
      {
        question: "How do you create a method in a Python class?",
        options: [
          "Define a function inside the class with self as the first parameter",
          "Use the @method decorator on a function",
          "Define a function outside the class and attach it to the class",
          "Use the method keyword",
        ],
        answer: "Define a function inside the class with self as the first parameter",
      },
      {
        question: "What is encapsulation in OOP?",
        options: [
          "The process of creating instances of a class",
          "The practice of keeping fields within a class private",
          "The ability of a class to derive properties from another class",
          "The ability of a method to perform different tasks based on the object it is acting upon",
        ],
        answer: "The practice of keeping fields within a class private",
      },
      {
        question: "How do you create a private attribute in Python?",
        options: [
          "Use the private keyword",
          "Start the attribute name with two underscores (__)",
          "Use the @private decorator",
          "Python doesn't support private attributes",
        ],
        answer: "Start the attribute name with two underscores (__)",
      },
      {
        question: "What is a class docstring?",
        options: [
          "A string inside triple-quotes at the beginning of the class",
          "A comment at the top of the class file",
          "A special class attribute",
          "A method that returns documentation",
        ],
        answer: "A string inside triple-quotes at the beginning of the class",
      },
      {
        question: "How can you access documentation for a class in Python?",
        options: [
          "Using the help() function",
          "Using the __doc__ attribute",
          "Using the docs() method",
          "Both A and B",
        ],
        answer: "Both A and B",
      },
      {
        question: "What is a dunder method in Python?",
        options: [
          "A method that starts and ends with double underscores",
          "A duplicate method for redundancy",
          "A method that performs mathematical calculations",
          "A method defined under the main function",
        ],
        answer: "A method that starts and ends with double underscores",
      },
      {
        question: "Which method is automatically called when an object is printed?",
        options: [
          "__print__()",
          "__str__()",
          "__display__()",
          "toString()",
        ],
        answer: "__str__()",
      },
      {
        question: "How do you define a property in a Python class?",
        options: [
          "Using the @property decorator",
          "Using the property keyword",
          "Using get and set methods",
          "Python doesn't support properties",
        ],
        answer: "Using the @property decorator",
      },
      {
        question: "What happens when you call dir() on a class instance?",
        options: [
          "It shows the directory where the class is stored",
          "It lists all properties and methods of the instance",
          "It shows the class documentation",
          "It returns the direct parent class",
        ],
        answer: "It lists all properties and methods of the instance",
      },
      {
        question: "What is the main purpose of Object-Oriented Programming?",
        options: [
          "To create faster code",
          "To organize code into reusable objects with attributes and methods",
          "To reduce the need for variables",
          "To eliminate the need for functions",
        ],
        answer: "To organize code into reusable objects with attributes and methods",
      },
      {
        question: "Which statement best describes a class?",
        options: [
          "A collection of functions",
          "A built-in data type",
          "A blueprint for creating objects",
          "A synonym for module",
        ],
        answer: "A blueprint for creating objects",
      },
      {
        question: "What is the difference between a class and an object?",
        options: [
          "A class is a blueprint, an object is an instance of that blueprint",
          "A class is concrete, an object is abstract",
          "They are just different terms for the same concept",
          "A class is for static methods, an object is for instance methods",
        ],
        answer: "A class is a blueprint, an object is an instance of that blueprint",
      },
      {
        question: "What is the term for a variable that belongs to a class object?",
        options: [
          "Global variable",
          "Instance variable",
          "Object variable",
          "Local variable",
        ],
        answer: "Instance variable",
      },
    ],
    intermediate: [
      {
        question: "What is inheritance in Python?",
        options: [
          "Creating multiple instances of a class",
          "A mechanism where a class inherits attributes and methods from another class",
          "A way to hide class details",
          "A way to restrict access to class methods",
        ],
        answer:
          "A mechanism where a class inherits attributes and methods from another class",
      },
      {
        question: "How do you implement method overriding in Python?",
        options: [
          "By using the override keyword",
          "By defining a method in the child class with the same name as in the parent class",
          "By using the super() function",
          "It's not possible in Python",
        ],
        answer:
          "By defining a method in the child class with the same name as in the parent class",
      },
      {
        question: "What is the purpose of the super() function?",
        options: [
          "To call the parent class method",
          "To create a superclass",
          "To access private variables",
          "To override a method",
        ],
        answer: "To call the parent class method",
      },
      {
        question: "What is multiple inheritance in Python?",
        options: [
          "When a class inherits from multiple parent classes",
          "When a class creates multiple child classes",
          "When a class has multiple instances",
          "When a class has multiple methods",
        ],
        answer: "When a class inherits from multiple parent classes",
      },
      {
        question: "What is the Method Resolution Order (MRO) in Python?",
        options: [
          "The order in which methods are defined in a class",
          "The order in which Python looks for a method in a hierarchy of classes",
          "The order in which objects are created",
          "The order of parameters in a method",
        ],
        answer: "The order in which Python looks for a method in a hierarchy of classes",
      },
      {
        question: "How do you find the MRO of a class?",
        options: [
          "Using the cls.mro() method",
          "Using the __mro__ attribute",
          "Using the mro() function",
          "Both A and B",
        ],
        answer: "Both A and B",
      },
      {
        question: "What is Polymorphism in Object-Oriented Programming?",
        options: [
          "The ability to create multiple objects",
          "The ability to create multiple classes",
          "The ability of a function or method to handle objects of different types",
          "The ability to inherit from multiple classes",
        ],
        answer: "The ability of a function or method to handle objects of different types",
      },
      {
        question: "What is method overloading?",
        options: [
          "Defining multiple methods with the same name but different parameters",
          "Redefining a method in a subclass",
          "Calling a method from another method",
          "Defining a method that takes variable number of arguments",
        ],
        answer: "Defining multiple methods with the same name but different parameters",
      },
      {
        question: "Does Python support traditional method overloading?",
        options: [
          "Yes, like all OOP languages",
          "No, Python uses default arguments and variable arguments instead",
          "Only in newer versions of Python",
          "Only with external libraries",
        ],
        answer: "No, Python uses default arguments and variable arguments instead",
      },
      {
        question: "What is a class method in Python?",
        options: [
          "A method that belongs to an instance",
          "A method that belongs to a class and not the instance",
          "A method that can only be called from another method",
          "A method that can be called without creating an instance",
        ],
        answer: "A method that belongs to a class and not the instance",
      },
      {
        question: "How do you define a class method in Python?",
        options: [
          "Using the @classmethod decorator",
          "Using the classmethod keyword",
          "Using the static keyword",
          "By placing the method outside the class definition",
        ],
        answer: "Using the @classmethod decorator",
      },
      {
        question: "What is a static method in Python?",
        options: [
          "A method that can't be changed",
          "A method that doesn't use self or cls parameters",
          "A method that is defined outside a class",
          "A method that is created only once",
        ],
        answer: "A method that doesn't use self or cls parameters",
      },
      {
        question: "How do you define a static method in Python?",
        options: [
          "Using the @staticmethod decorator",
          "Using the static keyword",
          "Making it a class attribute",
          "All methods in Python are static by default",
        ],
        answer: "Using the @staticmethod decorator",
      },
      {
        question: "What is the difference between a class method and a static method?",
        options: [
          "Class methods take cls as the first parameter, static methods don't",
          "Static methods can access class variables, class methods can't",
          "Class methods can modify class state, static methods always create a new state",
          "There is no difference",
        ],
        answer: "Class methods take cls as the first parameter, static methods don't",
      },
      {
        question: "What is composition in Object-Oriented Programming?",
        options: [
          "A type of inheritance where a class can inherit from multiple classes",
          "A design approach where objects contain instances of other classes",
          "The process of initializing an object",
          "A way to compare objects of different classes",
        ],
        answer: "A design approach where objects contain instances of other classes",
      },
      {
        question: "What is aggregation in OOP?",
        options: [
          "A special form of composition where the contained object can exist independently",
          "A method to combine multiple classes into one",
          "The process of breaking down a class into smaller classes",
          "A way to count the number of objects created",
        ],
        answer: "A special form of composition where the contained object can exist independently",
      },
      {
        question: "What is method chaining in Python?",
        options: [
          "Calling multiple methods in sequence in a single statement",
          "Connecting methods using the chain operator",
          "Inheriting methods from multiple parent classes",
          "Creating a linked list of method calls",
        ],
        answer: "Calling multiple methods in sequence in a single statement",
      },
      {
        question: "What does the __call__ method do in a Python class?",
        options: [
          "Enables an instance to be called like a function",
          "Calls the parent class constructor",
          "Initializes class variables",
          "Creates a new method at runtime",
        ],
        answer: "Enables an instance to be called like a function",
      },
      {
        question: "What is duck typing in Python?",
        options: [
          "A type of inheritance",
          "A concept where the type of an object is determined by its behavior not its class",
          "A way to define dynamic classes",
          "A method naming convention",
        ],
        answer: "A concept where the type of an object is determined by its behavior not its class",
      },
      {
        question: "What is the Purpose of Abstract Base Classes (ABCs) in Python?",
        options: [
          "To create classes that can't be instantiated",
          "To enforce that certain methods are implemented by derived classes",
          "To make code run faster",
          "Both A and B",
        ],
        answer: "Both A and B",
      },
    ],
    advanced: [
      {
        question: "What are class methods in Python?",
        options: [
          "Methods that can only be called by the class",
          "Methods that can be called without an instance",
          "Methods that take the class as their first parameter",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the purpose of the __str__ and __repr__ methods?",
        options: [
          "__str__ for string representation for users, __repr__ for developers",
          "__str__ for debugging, __repr__ for displaying",
          "They are identical in function",
          "__str__ is required, __repr__ is optional",
        ],
        answer:
          "__str__ for string representation for users, __repr__ for developers",
      },
      {
        question: "What are metaclasses in Python?",
        options: [
          "Classes that inherit from multiple parent classes",
          "Classes that create other classes",
          "Classes that cannot be instantiated",
          "Classes that only contain static methods",
        ],
        answer: "Classes that create other classes",
      },
      {
        question: "How do you define a metaclass?",
        options: [
          "By subclassing from the type class",
          "Using the @metaclass decorator",
          "By using the metaclass keyword",
          "All classes in Python are metaclasses",
        ],
        answer: "By subclassing from the type class",
      },
      {
        question: "What is the use of __new__ method in Python?",
        options: [
          "It's used to initialize a newly created object",
          "It's a constructor that creates a new instance of a class",
          "It's used to define new attributes",
          "It's used to create new methods at runtime",
        ],
        answer: "It's a constructor that creates a new instance of a class",
      },
      {
        question: "What is the difference between __new__ and __init__?",
        options: [
          "__new__ creates the object, __init__ initializes it",
          "__new__ initializes attributes, __init__ creates the instance",
          "They are identical in functionality",
          "__new__ is called after __init__",
        ],
        answer: "__new__ creates the object, __init__ initializes it",
      },
      {
        question: "What is the purpose of __slots__ in a Python class?",
        options: [
          "To specify attribute names that are allowed in the class instance",
          "To reduce memory usage by storing instance variables in a tuple",
          "To prevent adding new attributes dynamically",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What are descriptor protocols in Python?",
        options: [
          "Protocols that describe how to create classes",
          "Protocols that allow customization of attribute access",
          "Protocols that define how objects are serialized",
          "Protocols that handle object comparison",
        ],
        answer: "Protocols that allow customization of attribute access",
      },
      {
        question: "What methods are part of the descriptor protocol?",
        options: [
          "__get__, __set__, and __delete__",
          "__getattr__, __setattr__, and __delattr__",
          "__getitem__, __setitem__, and __delitem__",
          "__enter__, __exit__, and __context__",
        ],
        answer: "__get__, __set__, and __delete__",
      },
      {
        question: "What is property decorator in Python?",
        options: [
          "A built-in descriptor that implements the descriptor protocol",
          "A way to define read-only attributes",
          "A way to define attributes that execute code on access/modification",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is a mixin in Python?",
        options: [
          "A class designed to add functionality to other classes through inheritance",
          "A type of multiple inheritance",
          "A method that mixes instance and class variables",
          "A special kind of metaclass",
        ],
        answer: "A class designed to add functionality to other classes through inheritance",
      },
      {
        question: "What is the purpose of __getattr__ and __getattribute__ methods?",
        options: [
          "__getattr__ is called when an attribute is not found, __getattribute__ is called for every attribute access",
          "They are aliases for the same functionality",
          "__getattr__ gets an attribute value, __getattribute__ gets the attribute name",
          "__getattr__ is for instance attributes, __getattribute__ is for class attributes",
        ],
        answer: "__getattr__ is called when an attribute is not found, __getattribute__ is called for every attribute access",
      },
      {
        question: "How can you implement a singleton pattern in Python?",
        options: [
          "By overriding the __new__ method",
          "By using a metaclass",
          "By using a decorator",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is introspection in Python?",
        options: [
          "The ability to examine classes and objects at runtime",
          "The process of debugging Python code",
          "A form of inheritance",
          "The process of converting objects to strings",
        ],
        answer: "The ability to examine classes and objects at runtime",
      },
      {
        question: "What is the difference between getattr() and getattr_static()?",
        options: [
          "getattr() can trigger descriptors, getattr_static() doesn't",
          "getattr() is for instance methods, getattr_static() is for static methods",
          "getattr() is built-in, getattr_static() is from a library",
          "They are identical in functionality",
        ],
        answer: "getattr() can trigger descriptors, getattr_static() doesn't",
      },
      {
        question: "What is a dataclass in Python?",
        options: [
          "A class that stores data without methods",
          "A class decorator that auto-generates special methods",
          "A special type of dict",
          "A class that can only contain class attributes",
        ],
        answer: "A class decorator that auto-generates special methods",
      },
      {
        question: "What is the @classmethod decorator used for?",
        options: [
          "To define a method that can be called without creating an instance",
          "To define a method that takes a class as its first parameter",
          "To create alternative constructors for a class",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What is the difference between an ABC (Abstract Base Class) and a protocol class?",
        options: [
          "ABCs enforce inheritance, protocols support structural subtyping",
          "ABCs are dynamic, protocols are static",
          "ABCs are for instance methods, protocols are for class methods",
          "There is no difference",
        ],
        answer: "ABCs enforce inheritance, protocols support structural subtyping",
      },
      {
        question: "What is the Liskov Substitution Principle?",
        options: [
          "A principle that states a subclass should not modify the behavior of the superclass",
          "A principle that states objects of a superclass should be replaceable with objects of a subclass without affecting the program",
          "A principle that enforces strict type checking",
          "A principle that requires all methods to be overridden in subclasses",
        ],
        answer: "A principle that states objects of a superclass should be replaceable with objects of a subclass without affecting the program",
      },
      {
        question: "How do you verify if a class is a subclass of another class?",
        options: [
          "Using the isinstance() function",
          "Using the issubclass() function",
          "Using the __subclass__() method",
          "By checking the __class__ attribute",
        ],
        answer: "Using the issubclass() function",
      },
    ],
    expert: [],
  },
  code_output: {
    beginner: [
      {
        question:
          "What will be the output of the following code?\n```\nx = 5\ny = 10\nprint(x + y)\n```",
        options: ["5", "10", "15", "Error"],
        answer: "15",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = "Hello"\ny = "World"\nprint(x + " " + y)\n```',
        options: ["Hello World", "HelloWorld", "Hello + World", "Error"],
        answer: "Hello World",
      },
      {
        question:
          "What will be the output of the following code?\n```\nmy_list = [1, 2, 3]\nprint(my_list[1])\n```",
        options: ["1", "2", "3", "Error"],
        answer: "2",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = 10\nif x > 5:\n    print("Greater")\nelse:\n    print("Smaller")\n```',
        options: ["Greater", "Smaller", "Both Greater and Smaller", "None"],
        answer: "Greater",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint("Python"[2])\n```',
        options: ["P", "y", "t", "h"],
        answer: "t",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = 5\ny = 2\nprint(x // y)\n```",
        options: ["2", "2.5", "2.0", "3"],
        answer: "2",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint(bool(""))\n```',
        options: ["True", "False", "0", "Error"],
        answer: "False",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint(3 * "abc")\n```',
        options: ["3abc", "abcabcabc", "9", "Error"],
        answer: "abcabcabc",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n```",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        answer: "[1, 2, 3, 4]",
      },
      {
        question:
          "What will be the output of the following code?\n```\na = 5\nb = 5\nprint(a is b)\n```",
        options: ["True", "False", "5", "Error"],
        answer: "True",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(1 == True)\n```",
        options: ["True", "False", "1", "Error"],
        answer: "True",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(type(5))\n```",
        options: ["int", "<class 'int'>", "Integer", "Number"],
        answer: "<class 'int'>",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint("Hello".lower())\n```',
        options: ["Hello", "HELLO", "hello", "Error"],
        answer: "hello",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(len([1, 2, 3]))\n```",
        options: ["1", "2", "3", "6"],
        answer: "3",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = 5\nprint(++x)\n```",
        options: ["5", "6", "10", "Error"],
        answer: "5",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint("Hello"[0:2])\n```',
        options: ["H", "He", "Hel", "Hello"],
        answer: "He",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(list(range(3)))\n```",
        options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[3]"],
        answer: "[0, 1, 2]",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(1 + 2 * 3)\n```",
        options: ["9", "7", "6", "3"],
        answer: "7",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = "10"\nprint(type(int(x)))\n```',
        options: ["str", "int", "<class 'int'>", "<class 'str'>"],
        answer: "<class 'int'>",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = 0\nwhile x < 3:\n    print(x, end=" ")\n    x += 1\n```',
        options: ["0 1 2", "0 1 2 3", "1 2 3", "3 2 1 0"],
        answer: "0 1 2",
      },
    ],
    intermediate: [
      {
        question:
          "What will be the output of the following code?\n```\ndef foo(a, b=1, c=2):\n    return a + b + c\n\nprint(foo(3, c=5))\n```",
        options: ["6", "8", "9", "10"],
        answer: "9",
      },
      {
        question:
          "What will be the output of the following code?\n```\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[1:4:2])\n```",
        options: ["[1, 3, 5]", "[2, 4]", "[1, 3]", "[2]"],
        answer: "[2, 4]",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = {1: "one", 2: "two"}\ny = x\ny[1] = "ONE"\nprint(x[1])\n```',
        options: ["one", "ONE", "1", "Error"],
        answer: "ONE",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint(list("Hello"))\n```',
        options: ['["Hello"]', "['H', 'e', 'l', 'l', 'o']", "Hello", "Error"],
        answer: "['H', 'e', 'l', 'l', 'o']",
      },
      {
        question:
          'What will be the output of the following code?\n```\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print("Success")\nfinally:\n    print("Done")\n```',
        options: ["Error Done", "Success Done", "Error Success Done", "Error"],
        answer: "Error Done",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint([x*x for x in range(5)])\n```",
        options: [
          "[0, 1, 4, 9, 16]",
          "[1, 4, 9, 16, 25]",
          "[0, 1, 4, 9, 16, 25]",
          "[1, 4, 9, 16]",
        ],
        answer: "[0, 1, 4, 9, 16]",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = lambda a, b: a if a > b else b\nprint(x(5, 10))\n```",
        options: ["5", "10", "15", "Error"],
        answer: "10",
      },
      {
        question:
          'What will be the output of the following code?\n```\ndef outer():\n    x = "local"\n    def inner():\n        nonlocal x\n        x = "nonlocal"\n    inner()\n    return x\n\nprint(outer())\n```',
        options: ["local", "nonlocal", "global", "Error"],
        answer: "nonlocal",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = [1, 2, 3]\ny = x.copy()\ny.append(4)\nprint(x)\n```",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        answer: "[1, 2, 3]",
      },
      {
        question:
          "What will be the output of the following code?\n```\na = [1, 2, 3]\nb = [4, 5]\nprint(a + b)\n```",
        options: ["[1, 2, 3, 4, 5]", "[5, 7, 8]", "15", "Error"],
        answer: "[1, 2, 3, 4, 5]",
      },
      {
        question:
          "What will be the output of the following code?\n```\ndef func(a, b, c):\n    print(a, b, c)\n\nargs = (1, 2, 3)\nfunc(*args)\n```",
        options: ["1 2 3", "(1, 2, 3)", "1, 2, 3", "Error"],
        answer: "1 2 3",
      },
      {
        question:
          'What will be the output of the following code?\n```\nsome_dict = {"a": 1, "b": 2}\nprint(some_dict.get("c", 3))\n```',
        options: ["None", "3", "Error", "c"],
        answer: "3",
      },
      {
        question:
          "What will be the output of the following code?\n```\na = [1, 2, 3]\nprint(a.pop())\n```",
        options: ["1", "2", "3", "Error"],
        answer: "3",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = 5\nprint(f"{x} + 10 = {x + 10}")\n```',
        options: ["5 + 10 = 15", "5 + 10 = 5 + 10", "x + 10 = 15", "Error"],
        answer: "5 + 10 = 15",
      },
      {
        question:
          "What will be the output of the following code?\n```\ndef f(x):\n    return x*2\n\nresult = map(f, [1, 2, 3])\nprint(list(result))\n```",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[f(1), f(2), f(3)]", "Error"],
        answer: "[2, 4, 6]",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = set([1, 2, 3, 2, 1])\nprint(x)\n```",
        options: ["{1, 2, 3}", "{1, 1, 2, 2, 3}", "[1, 2, 3]", "Error"],
        answer: "{1, 2, 3}",
      },
      {
        question:
          "What will be the output of the following code?\n```\ndef f(x=[]):\n    x.append(1)\n    return x\n\nprint(f())\nprint(f())\n```",
        options: ["[1] [1]", "[1] [1, 1]", "[] []", "Error"],
        answer: "[1] [1, 1]",
      },
      {
        question:
          'What will be the output of the following code?\n```\nx = True\ny = False\nz = False\nif x or y and z:\n    print("Yes")\nelse:\n    print("No")\n```',
        options: ["Yes", "No", "Error", "Both Yes and No"],
        answer: "Yes",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint("a" + "b" * 3)\n```',
        options: ["a3b", "ab3", "abbb", "ababab"],
        answer: "abbb",
      },
      {
        question:
          "What will be the output of the following code?\n```\na = {1, 2, 3}\nb = {3, 4, 5}\nprint(a.intersection(b))\n```",
        options: ["{1, 2, 3, 4, 5}", "{3}", "3", "Error"],
        answer: "{3}",
      },
    ],
    advanced: [
      {
        question:
          "What will be the output of the following code?\n```\nclass A:\n    def __init__(self):\n        self.x = 1\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.y = 2\n\nb = B()\nprint(b.x, b.y)\n```",
        options: ["1 2", "Error", "1 Error", "Error 2"],
        answer: "1 2",
      },
      {
        question:
          "What will be the output of the following code?\n```\nfrom functools import reduce\nprint(reduce(lambda x, y: x + y, [1, 2, 3, 4]))\n```",
        options: ["10", "[1, 2, 3, 4]", "24", "Error"],
        answer: "10",
      },
      {
        question:
          'What will be the output of the following code?\n```\nclass A:\n    def __init__(self):\n        print("A")\n\nclass B(A):\n    def __init__(self):\n        print("B")\n\nclass C(B):\n    def __init__(self):\n        super().__init__()\n        print("C")\n\nc = C()\n```',
        options: ["A B C", "C B A", "B C", "A C"],
        answer: "B C",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = [1, 2, 3]\nprint(x[::-1])\n```",
        options: ["[1, 2, 3]", "[3, 2, 1]", "3", "Error"],
        answer: "[3, 2, 1]",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint(sorted(["a", "b", "c"], reverse=True))\n```',
        options: ['["a", "b", "c"]', '["c", "b", "a"]', "[3, 2, 1]", "Error"],
        answer: '["c", "b", "a"]',
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = [i for i in range(10) if i % 2 == 0]\nprint(x)\n```",
        options: [
          "[0, 2, 4, 6, 8]",
          "[2, 4, 6, 8]",
          "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
          "[1, 3, 5, 7, 9]",
        ],
        answer: "[0, 2, 4, 6, 8]",
      },
      {
        question:
          'What will be the output of the following code?\n```\nclass MyClass:\n    def __str__(self):\n        return "Str"\n    def __repr__(self):\n        return "Repr"\n\nmc = MyClass()\nprint(mc)\n```',
        options: ["MyClass object", "Str", "Repr", "Error"],
        answer: "Str",
      },
      {
        question:
          "What will be the output of the following code?\n```\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))\n```",
        options: ["10", "55", "89", "Error"],
        answer: "55",
      },
      {
        question:
          "What will be the output of the following code?\n```\nimport itertools\nprint(list(itertools.permutations([1, 2, 3], 2)))\n```",
        options: [
          "[(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]",
          "[(1, 2), (2, 3), (1, 3)]",
          "[(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]",
          "Error",
        ],
        answer: "[(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]",
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = [1, 2, 3]\ny = [1, 2, 3]\nprint(x is y, x == y)\n```",
        options: ["True True", "False True", "True False", "False False"],
        answer: "False True",
      },
      {
        question:
          'What will be the output of the following code?\n```\ndict1 = {"a": 1, "b": 2}\ndict2 = {"b": 3, "c": 4}\nprint({**dict1, **dict2})\n```',
        options: [
          '{"a": 1, "b": 2, "b": 3, "c": 4}',
          '{"a": 1, "b": 3, "c": 4}',
          '{"a": 1, "b": 2, "c": 4}',
          "Error",
        ],
        answer: '{"a": 1, "b": 3, "c": 4}',
      },
      {
        question:
          "What will be the output of the following code?\n```\nclass Meta(type):\n    def __new__(cls, name, bases, dct):\n        x = super().__new__(cls, name, bases, dct)\n        x.attr = 100\n        return x\n\nclass MyClass(metaclass=Meta):\n    pass\n\nprint(MyClass.attr)\n```",
        options: ["100", "Meta", "attr", "Error"],
        answer: "100",
      },
      {
        question:
          "What will be the output of the following code?\n```\ndef generate():\n    for i in range(3):\n        yield i\n\ng = generate()\nprint(next(g))\nprint(next(g))\n```",
        options: ["0 1", "0 0", "1 2", "Error"],
        answer: "0 1",
      },
      {
        question:
          "What will be the output of the following code?\n```\nclass Counter:\n    def __init__(self, start=0):\n        self.count = start\n    def __iter__(self):\n        return self\n    def __next__(self):\n        self.count += 1\n        return self.count\n\nc = Counter()\nprint(next(c), next(c), next(c))\n```",
        options: ["0 1 2", "1 2 3", "Error", "1 1 1"],
        answer: "1 2 3",
      },
      {
        question:
          'What will be the output of the following code?\n```\nprint("\\t".isspace())\n```',
        options: ["True", "False", "\\t", "Error"],
        answer: "True",
      },
      {
        question:
          'What will be the output of the following code?\n```\nimport re\ntext = "Python is fun"\nresult = re.findall(r"\\w+", text)\nprint(result)\n```',
        options: [
          '["Python", "is", "fun"]',
          '["Python is fun"]',
          "Python is fun",
          "Error",
        ],
        answer: '["Python", "is", "fun"]',
      },
      {
        question:
          "What will be the output of the following code?\n```\nx = 0\ndef outer():\n    x = 1\n    def inner():\n        global x\n        x = 2\n    inner()\n    return x\n\nprint(outer())\nprint(x)\n```",
        options: ["1 0", "1 1", "1 2", "2 2"],
        answer: "1 2",
      },
      {
        question:
          'What will be the output of the following code?\n```\nfrom contextlib import contextmanager\n\n@contextmanager\ndef my_context():\n    print("Enter")\n    yield\n    print("Exit")\n\nwith my_context():\n    print("Inside")\n```',
        options: ["Enter Inside Exit", "Inside", "Enter Exit", "Error"],
        answer: "Enter Inside Exit",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(any([False, False, True]))\nprint(all([False, False, True]))\n```",
        options: ["True True", "True False", "False True", "False False"],
        answer: "True False",
      },
      {
        question:
          'What will be the output of the following code?\n```\nclass A(object):\n    def __init__(self):\n        self.a = "a"\n    def test(self):\n        print(self.a)\n\nclass B(A):\n    def __init__(self):\n        self.a = "b"\n\nB().test()\n```',
        options: ["a", "b", "None", "Error"],
        answer: "b",
      },
    ],
    expert: [
      {
        question:
          "What will be the output of the following code?\n```\nclass A:\n    x = 1\n    \nclass B(A):\n    pass\n    \nclass C(A):\n    x = 2\n    \nclass D(B, C):\n    pass\n    \nprint(D.x)\n```",
        options: ["1", "2", "Error", "None"],
        answer: "2",
      },
      {
        question:
          'What will be the output of the following code?\n```\nimport threading\n\ndef print_something(something):\n    print(something)\n\nt = threading.Thread(target=print_something, args=("Hello",))\nt.start()\nt.join()\nprint("World")\n```',
        options: ["Hello World", "World Hello", "HelloWorld", "World"],
        answer: "Hello World",
      },
      {
        question:
          'What will be the output of the following code?\n```\nclass A(type):\n    def __call__(cls, *args, **kwargs):\n        print("Called")\n        return super().__call__(*args, **kwargs)\n\nclass B(metaclass=A):\n    def __new__(cls):\n        print("New")\n        return super().__new__(cls)\n    def __init__(self):\n        print("Init")\n\nB()\n```',
        options: [
          "Called New Init",
          "New Init Called",
          "Called Init New",
          "Init New Called",
        ],
        answer: "Called New Init",
      },
      {
        question:
          "What will be the output of the following code?\n```\nprint(isinstance(type, object) and isinstance(object, type))\n```",
        options: ["True", "False", "Error", "None"],
        answer: "True",
      },
      {
        question:
          'What will be the output of the following code?\n```\nclass UpperStr(str):\n    def __new__(cls, value=""):\n        return super().__new__(cls, value.upper())\n\nprint(UpperStr("hello"))\n```',
        options: ["hello", "HELLO", "Hello", "Error"],
        answer: "HELLO",
      },
    ],
  },
};