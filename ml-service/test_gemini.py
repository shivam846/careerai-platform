from google import genai

client = genai.Client(api_key="AIzaSyCLXpwvxcQ1HRzY4jKfQTG7BVl9zbxx5xQ")

response = client.models.generate_content(
    model="models/gemini-2.0-flash",
    contents="Suggest a career in tech"
)

print(response.text)