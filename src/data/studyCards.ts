export interface StudyCardData {
  id: number;
  term: string;
  front: string;
  back: string;
  category: string;
}

export const studyCards: StudyCardData[] = [
  {
    id: 1,
    term: "Social Network Analysis",
    front: "What is the systematic study of social structures through network theory?",
    back: "Social Network Analysis (SNA) is the process of investigating social structures through the use of networks and graph theory. It characterizes networked structures in terms of nodes and ties.",
    category: "fundamentals"
  },
  {
    id: 2,
    term: "Node",
    front: "What do we call individual actors within a network?",
    back: "A node (or vertex) represents an individual actor in the network. This could be a person, organization, website, or any entity being studied in the social network.",
    category: "fundamentals"
  },
  {
    id: 3,
    term: "Edge/Tie",
    front: "What connects nodes in a social network?",
    back: "An edge (or tie) is a relationship or connection between two nodes. This could represent friendship, communication, collaboration, or any type of relationship being analyzed.",
    category: "fundamentals"
  },
  {
    id: 4,
    term: "Centrality",
    front: "What measures how important a node is within a network?",
    back: "Centrality measures identify the most important nodes within a network. Common types include degree centrality, betweenness centrality, closeness centrality, and eigenvector centrality.",
    category: "metrics"
  },
  {
    id: 5,
    term: "Degree Centrality",
    front: "How do we measure the number of direct connections a node has?",
    back: "Degree centrality is the number of ties incident upon a node. It's the most basic measure of centrality, counting how many direct connections a node has in the network.",
    category: "metrics"
  },
  {
    id: 6,
    term: "Betweenness Centrality",
    front: "Which centrality measure identifies nodes that act as bridges?",
    back: "Betweenness centrality measures how often a node appears on the shortest paths between other nodes. High betweenness centrality indicates a node serves as a bridge or broker.",
    category: "metrics"
  },
  {
    id: 7,
    term: "Clustering Coefficient",
    front: "How do we measure how clustered a node's neighborhood is?",
    back: "The clustering coefficient measures the degree to which nodes in a network tend to cluster together. It's the proportion of links between the nodes within its neighborhood.",
    category: "metrics"
  },
  {
    id: 8,
    term: "Path Length",
    front: "What is the shortest distance between two nodes called?",
    back: "Path length is the number of edges in the shortest path between two nodes. Average path length is a key metric for understanding network connectivity.",
    category: "structure"
  },
  {
    id: 9,
    term: "Small World Network",
    front: "What type of network has high clustering but short path lengths?",
    back: "A small world network is characterized by high clustering coefficients and short average path lengths. These networks exhibit the 'six degrees of separation' phenomenon.",
    category: "structure"
  },
  {
    id: 10,
    term: "Scale-Free Network",
    front: "What type of network has a power-law degree distribution?",
    back: "A scale-free network has a degree distribution that follows a power law - a few nodes have very high degree (hubs) while most nodes have low degree. Many real-world networks are scale-free.",
    category: "structure"
  }
];