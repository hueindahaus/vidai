import os

from dotenv import load_dotenv

load_dotenv()  # reads variables from a .env file and sets them in os.environ


print(os.environ.get("OPENAI_API_KEY"))


from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-5-nano", input="Write a one-sentence bedtime story about a unicorn."
)

print(response.output_text)
