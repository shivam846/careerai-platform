const API_BASE = "http://localhost:8080/api/auth"; // ✅ Correct base path

// Login API
export async function login(email, password) {
  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  return response.json();
}

// Register API
export async function register(name, email, password, userType) {
  const response = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, userType }),
  });

  return response.text();
}

// Career Assessment API
export async function submitAssessment(data) {
  const response = await fetch("http://localhost:8080/api/assessment/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Assessment failed");
  }

  return response.json();
}

//Careear predit api

export const predictCareer = async (data) => {
  try {
    const res = await fetch("http://localhost:8080/api/predict-career", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
