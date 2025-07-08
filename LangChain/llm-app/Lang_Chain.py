from dotenv import load_dotenv
import os
from langchain.globals import set_debug
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

load_dotenv()

def generate_pet_name(animal_type):
    # set_debug(True) #? Set debug to True for verbose output
    google_api_key = os.getenv("GOOGLE_GEMINI_API_KEY")
    if not google_api_key:
        raise ValueError("GOOGLE_GEMINI_API_KEY environment variable not found. Please set it in your .env file.")

    llm = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash", 
        temperature=0.7, 
        google_api_key=google_api_key # Pass the API key explicitly
    )
    
    prompt_template = PromptTemplate(
        input_variables=['animal_type'],
        template="I have a {animal_type} pet and I want a cool name for it. Suggest me five cool names for my pet",
    )
    
    name_chain = prompt_template | llm
    
    response = name_chain.invoke({"animal_type": animal_type})
    print("\nFind response below:\n")
    return response.content.strip()

if __name__ == "__main__":
    print(generate_pet_name("dog"))
    