export type AnswerData = {
    topic: string;
    level: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
      userAnswer: string;
    }[];
    total: number;
    score: number;
    percentage: number;
  };
  
  export type Question = {
    question: string;
    options: string[];
    answer: string;
  };
  
  export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';
  export type Topic = 
    | 'google_colab' 
    | 'introduction_to_python' 
    | 'data_types' 
    | 'operators_keywords_variables' 
    | 'strings_casting' 
    | 'control_flow' 
    | 'lists_tuples_dict' 
    | 'sets' 
    | 'modules_functions' 
    | 'exception_handling' 
    | 'file_handling' 
    | 'oop_concepts'
    | 'code_output';
  
  export type MCQData = {
    [topic in Topic]?: {
      beginner: Question[];
      intermediate: Question[];
      advanced: Question[];
      expert: Question[];
    }
  };
  