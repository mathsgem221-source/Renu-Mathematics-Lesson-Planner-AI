
export interface SubUnit {
  id: string;
  name: string;
}

export interface Lesson {
  id: string;
  name: string;
  term: number; // 1, 2, or 3
  periods: number; // பாடவேளைகளின் எண்ணிக்கை
  subUnits: SubUnit[];
}

export interface GradeCurriculum {
  grade: string;
  lessons: Lesson[];
}

export interface LessonPlan {
  grade: string;
  topic: string;
  subUnit: string;
  term: string;
  time: string;
  model: string;
  objectives: string[];
  introduction: { duration: string; content: string };
  presentation: { duration: string; content: string; textbookRef: string };
  practice: { duration: string; content: string; exercises: string[] };
  production: { duration: string; content: string };
  conclusion: { duration: string; content: string };
}

export interface TextbookLink {
  grade: string;
  parts: { title: string; url: string }[];
}

export interface NIELink {
  grade: string;
  url: string;
}
