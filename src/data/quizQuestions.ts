export interface QuizQuestionData {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const quizQuestions: QuizQuestionData[] = [
  {
    id: 1,
    question: "What are the two main components of any social network?",
    options: [
      "People and relationships",
      "Nodes and edges",
      "Actors and connections", 
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Social networks consist of nodes (actors/people/entities) and edges (relationships/ties/connections). All the terms mentioned refer to these same fundamental components.",
    category: "fundamentals"
  },
  {
    id: 2,
    question: "Which centrality measure would best identify the most connected person in a friendship network?",
    options: [
      "Betweenness centrality",
      "Closeness centrality",
      "Degree centrality",
      "Eigenvector centrality"
    ],
    correctAnswer: 2,
    explanation: "Degree centrality measures the number of direct connections a node has, making it perfect for identifying who has the most friends in a friendship network.",
    category: "metrics"
  },
  {
    id: 3,
    question: "What does a high clustering coefficient indicate?",
    options: [
      "The network has many isolated nodes",
      "Friends of a node tend to be friends with each other",
      "The network has a central hub",
      "The network is randomly connected"
    ],
    correctAnswer: 1,
    explanation: "A high clustering coefficient means that neighbors of a node are likely to be connected to each other, indicating dense local connections or 'cliques'.",
    category: "metrics"
  },
  {
    id: 4,
    question: "In the 'six degrees of separation' concept, what does the number six represent?",
    options: [
      "The maximum number of friends a person can have",
      "The average number of steps to connect any two people",
      "The number of social circles people belong to",
      "The ideal network size for communication"
    ],
    correctAnswer: 1,
    explanation: "Six degrees of separation suggests that any two people in the world can be connected through a chain of at most six intermediate personal relationships.",
    category: "structure"
  },
  {
    id: 5,
    question: "What characterizes a scale-free network?",
    options: [
      "All nodes have the same degree",
      "Nodes are randomly connected",
      "A few nodes have very high degree while most have low degree",
      "The network forms perfect clusters"
    ],
    correctAnswer: 2,
    explanation: "Scale-free networks follow a power-law degree distribution where a small number of highly connected 'hubs' coexist with many nodes having few connections.",
    category: "structure"
  },
  {
    id: 6,
    question: "Which of the following is NOT a common application of Social Network Analysis?",
    options: [
      "Disease spread modeling",
      "Social media influence analysis",
      "Weather prediction",
      "Organizational communication patterns"
    ],
    correctAnswer: 2,
    explanation: "Weather prediction relies on atmospheric physics and meteorological data, not social network structures. SNA is used for studying relationships and interactions between entities.",
    category: "applications"
  },
  {
    id: 7,
    question: "What does betweenness centrality measure?",
    options: [
      "How close a node is to all other nodes",
      "How many connections a node has",
      "How often a node lies on paths between other nodes",
      "How influential a node's connections are"
    ],
    correctAnswer: 2,
    explanation: "Betweenness centrality measures how frequently a node appears on the shortest paths between pairs of other nodes, identifying nodes that serve as bridges or brokers.",
    category: "metrics"
  },
  {
    id: 8,
    question: "In a directed network, what's the difference between in-degree and out-degree?",
    options: [
      "In-degree counts incoming ties, out-degree counts outgoing ties",
      "In-degree is for internal connections, out-degree is for external",
      "There is no difference, they're the same measure",
      "In-degree is always higher than out-degree"
    ],
    correctAnswer: 0,
    explanation: "In directed networks, in-degree counts the number of edges pointing TO a node, while out-degree counts the number of edges pointing FROM a node.",
    category: "fundamentals"
  }
];