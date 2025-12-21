from typing import Dict
import requests
import os

class DogBreedService:
    def __init__(self):
        self.results = []

    async def get_dog_breeds(self) -> list[Dict]:
        if not len(self.results):
            key = os.getenv("X_API_KEY")
            url = os.getenv("API_URL")
            if not key or not url:
                raise ValueError("API key or URL is missing")
            # Simulate API call and data retrieval
            try:
                print("Fetching dog breeds from external API...")
                self.results = requests.get(url, headers={"X-API-KEY": key}).json()
            except requests.RequestException as e:
                raise ValueError("Failed to retrieve dog breeds") from e
        return self.results