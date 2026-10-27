export type CourseChunk = {
  id: string;
  title: string;
  page: number;
  keywords: string[];
  content: string;
};

export const courseChunks: CourseChunk[] = [
  {
    id: "expert-systems",
    title: "03 - Rules, Search, and Expert Systems",
    page: 3,
    keywords: ["expert", "system", "rules", "knowledge", "symbolic"],
    content: "In expert systems, intelligence comes from eliciting and maintaining human expertise as rules. In machine learning, intelligence increasingly comes from finding regularities in data rather than manually writing every rule.",
  },
  {
    id: "five-tribes",
    title: "04 - The Five Tribes of Machine Learning",
    page: 74,
    keywords: ["five", "tribes", "symbolists", "connectionists", "evolutionaries", "bayesians", "analogizers"],
    content: "The five tribes are symbolists, connectionists, evolutionaries, Bayesians, and analogizers. Each makes a different bet about where knowledge comes from and uses a different central learning approach.",
  },
  {
    id: "supervision",
    title: "05 - Machine Learning Fundamentals",
    page: 40,
    keywords: ["supervised", "unsupervised", "clustering", "labels", "target"],
    content: "Unsupervised learning has no target variable. Clustering is an unsupervised learning task; example algorithms include K-Means, hierarchical clustering, DBSCAN, spectral clustering, and Gaussian methods.",
  },
  {
    id: "overfitting",
    title: "05 - Machine Learning Fundamentals",
    page: 70,
    keywords: ["overfitting", "generalization", "bias", "variance", "training", "test"],
    content: "Overfitting is a generalization problem connected to the bias-variance tradeoff: a model can fit training data too closely and perform worse on new, unseen examples.",
  },
  {
    id: "neural-networks",
    title: "06 - Neural Networks and Deep Learning",
    page: 21,
    keywords: ["neural", "network", "neurons", "deep", "layers"],
    content: "Artificial neural networks are data-mining models inspired by neurons. Their main idea is to connect multiple simple units in a network.",
  },
  {
    id: "universal-approximation",
    title: "06 - Neural Networks and Deep Learning",
    page: 37,
    keywords: ["universal", "approximation", "hidden", "layer", "continuous", "function"],
    content: "The universal approximation theorem says a single-hidden-layer neural network with a linear output unit can approximate any continuous function arbitrarily well, given enough hidden units.",
  },
  {
    id: "tokens-embeddings",
    title: "07 - How Large Language Models Work",
    page: 47,
    keywords: ["token", "tokens", "embedding", "embeddings", "transformer", "llm", "language", "model"],
    content: "Tokens are the units a large language model reads and writes. Embeddings are the numeric vectors it processes internally. Transformer layers update each token vector using surrounding tokens, and the model produces scores for possible next tokens.",
  },
  {
    id: "agentic-ai",
    title: "Session 08 - Agentic AI and AI Workflows",
    page: 25,
    keywords: ["agent", "agentic", "perception", "reasoning", "planning", "action", "tools"],
    content: "An agentic workflow moves through perception, reasoning, planning, and action: it gathers information, interprets context, develops a plan, and acts through available tools.",
  },
];
