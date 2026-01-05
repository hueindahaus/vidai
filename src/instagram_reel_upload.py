import logging
import os

import requests

LOGGER = logging.getLogger(__name__)

from dotenv import load_dotenv

load_dotenv()  # reads variables from a .env file and sets them in os.environ

RESUMABLE_UPLOAD_URL = "https://rupload.facebook.com/ig-api-upload/v23.0"


def upload_local_video_to_server(path: str, create_id: str):
    """"""
    LOGGER.info(f"Uploading video from {path} to instagram server for {create_id=}...")
    with open(path, "rb") as f:
        video_bytes = f.read()
    instagram_account_id = os.getenv("INSTAGRAM_ACCOUNT_ID")
    instagram_access_token = os.getenv("INSTAGRAM_ACCESS_TOKEN")


def create_reels_container_resumable_upload():
    pass


def create_reels_container_video_url():
    pass


def main():
    pass


if __name__ == "__main__":
    """"""
    # upload_local_video_to_server("path/to/video.mp4")
