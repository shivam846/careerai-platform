package com.careerai.intelligent_career_platform.service;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class TaskService {
    private final Map<String, List<Map<String, Object>>> careerTasks = new HashMap<>();

    public TaskService() {
        initializeTasks();
    }

    private void initializeTasks() {
        // Software Developer Tasks
        careerTasks.put("Software Development", Arrays.asList(
            createTask("Master React Hooks", "Learn advanced React patterns", "Medium", 8, "https://reactjs.org"),
            createTask("JavaScript Algorithms", "Solve LeetCode easy problems", "Medium", 10, "https://leetcode.com"),
            createTask("Git Workflow", "Master branching and merging", "Easy", 4, "https://git-scm.com"),
            createTask("System Design Basics", "Learn scalability principles", "Hard", 12, "https://www.youtube.com"),
            createTask("SQL Optimization", "Write efficient database queries", "Hard", 10, "https://www.sqlshack.com")
        ));

        // Cloud Engineer Tasks
        careerTasks.put("Cloud Computing", Arrays.asList(
            createTask("AWS S3 & EC2 Basics", "Deploy first cloud app", "Easy", 6, "https://aws.amazon.com"),
            createTask("Docker Containerization", "Build and run Docker containers", "Medium", 8, "https://www.docker.com"),
            createTask("Kubernetes Basics", "Deploy apps on K8s", "Hard", 14, "https://kubernetes.io"),
            createTask("CI/CD Pipelines", "Setup GitHub Actions", "Medium", 10, "https://github.com"),
            createTask("Cloud Security", "Implement IAM policies", "Hard", 12, "https://aws.amazon.com/security")
        ));

        // Data Scientist Tasks
        careerTasks.put("Data Science", Arrays.asList(
            createTask("Python Pandas", "Data manipulation practice", "Easy", 6, "https://pandas.pydata.org"),
            createTask("Statistics Fundamentals", "Learn probability distributions", "Medium", 10, "https://www.khanacademy.org"),
            createTask("Machine Learning Basics", "Build first ML model", "Medium", 12, "https://scikit-learn.org"),
            createTask("Data Visualization", "Create Tableau dashboards", "Hard", 8, "https://www.tableau.com"),
            createTask("Deep Learning", "Build neural networks", "Hard", 20, "https://www.tensorflow.org")
        ));

        // Graphic Designer Tasks
        careerTasks.put("Graphic Design", Arrays.asList(
            createTask("Figma Fundamentals", "Design a mobile UI mockup", "Easy", 5, "https://www.figma.com"),
            createTask("Color Theory", "Master color schemes", "Medium", 6, "https://www.adobe.com"),
            createTask("Typography Basics", "Learn font pairing", "Medium", 4, "https://www.fonts.com"),
            createTask("Adobe XD Mastery", "Create interactive prototypes", "Hard", 10, "https://www.adobe.com"),
            createTask("Design Systems", "Build a component library", "Hard", 15, "https://www.designsystems.com")
        ));
    }

    private Map<String, Object> createTask(String name, String description, String difficulty, int hours, String resource) {
        Map<String, Object> task = new HashMap<>();
        task.put("name", name);
        task.put("description", description);
        task.put("difficulty", difficulty);
        task.put("estimatedHours", hours);
        task.put("resourceLink", resource);
        task.put("status", "Pending");
        return task;
    }

    private List<Map<String, Object>> generateDynamicTasks(String career) {
        // Generate generic learning tasks for any career
        return Arrays.asList(
            createTask("Master " + career + " Fundamentals", "Learn core concepts and foundational knowledge", "Easy", 8, "https://www.coursera.org"),
            createTask("Industry-Standard Tools", "Get hands-on with tools used in " + career, "Medium", 10, "https://www.udemy.com"),
            createTask("Real-World Projects", "Build a project to demonstrate " + career + " skills", "Medium", 12, "https://github.com"),
            createTask("Advanced Techniques", "Explore advanced concepts in " + career, "Hard", 15, "https://www.linkedin.com/learning"),
            createTask("Certification Prep", "Prepare for industry certification", "Hard", 20, "https://www.examtopics.com")
        );
    }

    public List<Map<String, Object>> getTasksByCareer(String career) {
        List<Map<String, Object>> tasks = careerTasks.get(career);
        // If career not found, generate dynamic tasks for any career
        if (tasks == null || tasks.isEmpty()) {
            tasks = generateDynamicTasks(career);
        }
        return tasks;
    }

    public Map<String, Object> getTaskSummary(String career) {
        List<Map<String, Object>> tasks = getTasksByCareer(career);
        Map<String, Object> summary = new HashMap<>();
        summary.put("career", career);
        summary.put("totalTasks", tasks.size());
        summary.put("totalHours", tasks.stream().mapToInt(t -> (int) t.get("estimatedHours")).sum());
        summary.put("tasks", tasks);
        return summary;
    }
}
