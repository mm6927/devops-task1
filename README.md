# Automated Code Deployment Using CI/CD Pipeline

## Project Overview

This project demonstrates a basic CI/CD pipeline using GitHub Actions and Docker. A sample Node.js web application is containerized, and GitHub Actions automatically builds and pushes the Docker image to Docker Hub when code is pushed to the `main` branch.

## Technologies Used

- Node.js
- Docker
- Git and GitHub
- GitHub Actions
- Docker Hub

## Application

The application runs an HTTP server on port `3000` and returns a message when accessed.

## Run Locally

1. Install Node.js and Docker.
2. Clone this repository:

   ```bash
   git clone https://github.com/mm6927/devops-task1.git
   cd devops-task1
   ```

3. Run the application:

   ```bash
   node app.js
   ```

4. Open `http://localhost:3000` in your browser.

## Run Using Docker

Build the Docker image:

```bash
docker build -t devops-task1 .
```

Run the container:

```bash
docker run --rm -p 3000:3000 devops-task1
```

Open `http://localhost:3000` in your browser.

## CI/CD Workflow

The workflow is defined in `.github/workflows/main.yml`.

When code is pushed to the `main` branch, GitHub Actions:

1. Checks out the repository.
2. Sets up Docker Buildx.
3. Authenticates with Docker Hub using GitHub repository secrets.
4. Builds the Docker image.
5. Pushes the image to Docker Hub.

## Docker Hub Image

Repository: https://hub.docker.com/r/mm6927/devops-task1

Image: `mm6927/devops-task1:latest`

## GitHub Actions Secrets

The workflow uses these repository secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

Credentials are stored in GitHub repository settings and are not included in the source code.

## Learning Outcome

This project demonstrates basic containerization and automation of Docker image publishing using a GitHub Actions CI/CD pipeline.

