function Projects() {
  const projects = [
    {
      name: "Predictors of Academic Performance: The Role of Alcohol Consumption and Gender",
      description:
        "Explores how weekday and weekend alcohol consumption relate to student academic performance, and whether gender moderates this relationship. Built with a linear regression framework including interaction terms and over 30 demographic, behavioral, and socioeconomic controls.",
      tech: "R (dplyr, ggplot2)",
      link: "https://github.com/JonathanMa03/Applied-Statistics-Final-Project?tab=readme-ov-file",
    },
    {
      name: "Obesity of the Youth: Health Disparity and Income Inequality",
      description:
        "Analyzes adolescent obesity in the U.S. through the lens of income inequality, healthcare access, and racial/ethnic disparities. Uses logistic regression and inequality indices on data from the National Survey of Children’s Health (2019 & 2023).",
      tech: "R (ineq, tidyverse, lme4, dplyr, ggplot2)",
      link: "https://github.com/JonathanMa03/YouthObesity",
    },
    {
      name: "Stock Price Forecasting with Neural Networks",
      description:
        "An interactive dashboard that uses neural networks to predict stock prices based on historical data. Designed for investors and analysts, the app visualizes trends and provides real-time forecast insights.",
      tech: "Python (plotly, numpy, pandas, dash)",
      link: "https://github.com/JonathanMa03/Stock-Forecaster",
    },
    {
      name: "Predicting Depression: A Comparative ML Approach",
      description:
        "Evaluates logistic regression and random forest classifiers to detect depression using demographic and psychosocial survey data. Highlights the strengths of ensemble-based machine learning in mental health diagnostics.",
      tech: "R (CARET, dplyr, randomForest)",
      link: "https://github.com/JonathanMa03/Depression-Prediction",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Tech Used:</strong> {project.tech}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007bff' }}
          >
            View Repository
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;